// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import '@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol';
import '@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

interface IEulerEToken {
    function deposit(uint256 subAccountId, uint256 amount) external;

    function balanceOf(address account) external view returns (uint256);

    function withdraw(uint256 subAccountId, uint256 amount) external;
}

interface IEulerDToken {
    function borrow(uint256 subAccountId, uint256 amount) external;

    function repay(uint256 subAccountId, uint256 amount) external;

    function balanceOf(address account) external view returns (uint256);
}

interface IEulerSwap {
    function swap(uint256 amount0Out, uint256 amount1Out, address to, bytes calldata data) external;

    function activate() external;
}

interface IGMXVault {
    function depositCollateral(address token, uint256 amount) external;

    function openLong(address token, uint256 amount, uint256 leverage) external;

    function closePosition(address token) external;

    function closePartialPosition(address token, uint256 proportionBps) external;
}

contract DoctorDeltaVault is ERC4626, Ownable {
    enum StrategyState {
        Neutral,
        Leveraged
    }

    IERC20 public weth;
    IEulerEToken public eTokenUSDC;
    IEulerDToken public dTokenWETH;
    IGMXVault public gmx;
    IEulerSwap public eulerSwap;

    address public oracle;
    StrategyState public strategyState;

    constructor(
        IERC20Metadata _usdc,
        address _weth,
        address _eTokenUSDC,
        address _dTokenWETH,
        address _gmx,
        address _eulerSwap,
        address _oracle
    ) ERC4626(_usdc) ERC20('Doctor Delta Vault Share', 'DDVS') Ownable(msg.sender) {
        weth = IERC20(_weth);
        eTokenUSDC = IEulerEToken(_eTokenUSDC);
        dTokenWETH = IEulerDToken(_dTokenWETH);
        gmx = IGMXVault(_gmx);
        eulerSwap = IEulerSwap(_eulerSwap);
        oracle = _oracle;
        strategyState = StrategyState.Neutral;
    }

    modifier onlyOracle() {
        require(msg.sender == oracle, 'Not authorized');
        _;
    }

    function withdraw(uint256 assets, address receiver, address owner) public override returns (uint256) {
        _beforeWithdraw(assets, receiver, owner);
        return super.withdraw(assets, receiver, owner);
    }

    function deposit(uint256 assets, address receiver) public override returns (uint256) {
        if (strategyState == StrategyState.Leveraged) {
            //...
        }
        uint256 result = super.deposit(assets, receiver);
        _afterDeposit(assets, receiver);
        return result;
    }

    function totalAssets() public view override returns (uint256) {
        if (strategyState == StrategyState.Neutral) {
            return eTokenUSDC.balanceOf(address(this));
        } else {
            return weth.balanceOf(address(this));
        }
    }

    function _afterDeposit(uint256 assets, address) internal {
        IERC20(asset()).approve(address(eTokenUSDC), assets);
        eTokenUSDC.deposit(0, assets);
    }

    function _beforeWithdraw(uint256 assets, address, address owner) internal {
        if (strategyState == StrategyState.Neutral) {
            eTokenUSDC.withdraw(0, assets);
        } else {
            uint256 totalShares = totalSupply();
            require(totalShares > 0, 'Invalid vault state');

            uint256 shares = balanceOf(owner);
            uint256 proportionBps = (shares * 10000) / totalShares;

            gmx.closePartialPosition(address(weth), proportionBps);

            uint256 wethPortion = (weth.balanceOf(address(this)) * proportionBps) / 10000;
            weth.approve(address(eulerSwap), wethPortion);
            eulerSwap.swap(0, wethPortion, address(this), bytes(''));

            uint256 usdcBalance = IERC20(asset()).balanceOf(address(this));
            IERC20(asset()).approve(address(eTokenUSDC), usdcBalance);
            eTokenUSDC.deposit(0, usdcBalance);
            eTokenUSDC.withdraw(0, assets);

            uint256 repayAmount = (weth.balanceOf(address(this)) * proportionBps) / 10000;
            weth.approve(address(dTokenWETH), repayAmount);
            dTokenWETH.repay(0, repayAmount);
        }
    }

    function executeLeveragedStrategy(uint256 wethAmount) external onlyOracle {
        require(strategyState == StrategyState.Neutral, 'Already leveraged');

        uint256 usdcBalance = IERC20(asset()).balanceOf(address(this));
        require(usdcBalance == 0, 'USDC not fully deployed');

        dTokenWETH.borrow(0, wethAmount);

        weth.approve(address(eulerSwap), wethAmount);
        eulerSwap.swap(0, wethAmount, address(this), bytes(''));

        uint256 usdcReceived = IERC20(asset()).balanceOf(address(this));

        weth.approve(address(gmx), wethAmount);
        gmx.depositCollateral(address(weth), wethAmount);
        gmx.openLong(address(weth), usdcReceived, 1);

        strategyState = StrategyState.Leveraged;
    }

    function rebalanceToNeutral(uint256 repayAmount) external onlyOracle {
        require(strategyState == StrategyState.Leveraged, 'Already neutral');

        gmx.closePosition(address(weth));

        uint256 usdcToSwap = IERC20(asset()).balanceOf(address(this));
        IERC20(asset()).approve(address(eulerSwap), usdcToSwap);
        eulerSwap.swap(usdcToSwap, 0, address(this), bytes(''));

        weth.approve(address(dTokenWETH), repayAmount);
        dTokenWETH.repay(0, repayAmount);

        strategyState = StrategyState.Neutral;
    }
}
