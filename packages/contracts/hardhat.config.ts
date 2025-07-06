import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'dotenv/config';
import '@openzeppelin/hardhat-upgrades';
import './tasks/getUSDC';

const config: HardhatUserConfig = {
    solidity: {
        version: '0.8.28',
    },
    networks: {
        hardhat: {
            chainId: 42161,
            forking: {
                url: 'https://arb-mainnet.g.alchemy.com/v2/' + process.env.ALCHEMY_API_KEY, // or Infura, etc.
                enabled: true,
            },
            mining: {
                auto: false,
                interval: 3000,
            },
        },
    },
};

export default config;
