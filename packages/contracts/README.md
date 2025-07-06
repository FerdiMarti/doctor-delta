# DoctorDeltaVault

DoctorDeltaVault is an ERC4626-compliant smart contract vault that runs a delta-neutral strategy on top of Euler Finance, EulerSwap, and GMX. The vault accepts USDC deposits and manages yield by switching between passive lending and an actively managed leveraged position that is delta-hedged on GMX.

This contract is designed for protocol-native capital, DAOs, and sophisticated users seeking yield with no directional ETH exposure.

## Strategy Modes

The vault operates in two states:

| State       | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| Neutral     | All USDC is lent on Euler to earn passive yield.                            |
| Leveraged   | USDC is lent on Euler, WETH is borrowed, WETH is swapped to USDC via EulerSwap (to rebalance inventory), USDC is posted as collateral on GMX, and a 1x long WETH position is opened. This long position fully delta-hedges the short WETH debt. |

Transitions between states are executed by a trusted oracle contract, which reacts to market signals.

## ERC4626 Share Accounting

- Follows the ERC4626 standard for vault accounting.
- Vault shares represent a proportional claim on net assets under management (NAV).
- `totalAssets()` is dynamically calculated based on:

```
NAV = USDC_in_Euler + USDC_in_Vault - WETH_debt_value
```

- WETH debt value is computed using a price oracle (e.g., Chainlink), ensuring share pricing remains fair even in leveraged mode.

## Swapping via EulerSwap

All token swaps (WETH ↔ USDC) are performed using EulerSwap, a native AMM integrated with Euler vaults.

The swap is used to convert borrowed WETH into USDC so it can be used as collateral on GMX. It is **not** the delta hedge itself — the GMX long is what neutralizes the vault's ETH exposure.

The contract uses:

```
eulerSwap.swap(
    amount0Out, 
    amount1Out, 
    to, 
    data
)
```

to perform this asset conversion before and after strategy execution.

## Oracle-Controlled Functions

Only the designated oracle can execute the strategy transitions:

| Function                     | Description                                 |
|-----------------------------|---------------------------------------------|
| executeLeveragedStrategy    | Triggers delta-neutral strategy activation  |
| rebalanceToNeutral          | Unwinds position back to passive lending    |

This separation ensures that strategy logic is offloaded to a verified controller while maintaining vault simplicity.

## Security Considerations

- No on-chain governance; strategy execution is fully oracle-controlled.
- Deposits are priced fairly using real-time NAV.
- No slippage protection is implemented in swaps.

## Deposits and Withdrawals

- Users can deposit or withdraw USDC at any time.
- Shares are always fairly priced based on vault NAV.
- In leveraged mode, a withdrawal triggers a partial unwind of the position proportional to the user’s share.

## Architecture Overview

```
          Oracle
            │
            ▼
    DoctorDeltaVault ◄──── Users
       ▲      │
       │      ▼
     Euler   EulerSwap
       ▲         ▲
       │         │
     Lend      Swap
     USDC     WETH-USDC
       ▲         ▲
       │         ▼
     Euler    GMX (delta hedge)
```

## Contract Interfaces Used

- IEulerEToken – for lending USDC
- IEulerDToken – for borrowing/repaying WETH
- IEulerSwap – for swapping WETH ↔ USDC
- IGMXVault – wrapper for opening/closing 1x long WETH using USDC collateral

## Deployment Checklist

- Oracle address set
- Euler and EulerSwap deployed and connected
- GMX strategy configured for USDC collateral and WETH long
- USDC and WETH tokens approved

## Future Enhancements

- Add slippage protection for EulerSwap
- Emergency pause and resume controls
- Real-time Chainlink price oracle integration
- Reward distribution mechanism for share holders

## License

MIT — open for experimentation, research, and production deployment with audit.

## Questions

Open an issue or reach out via official community channels.
