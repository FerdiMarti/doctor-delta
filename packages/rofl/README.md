# 🩺 Doctor Delta Vault ROFL Oracle

This repository contains the off-chain oracle logic for the **Doctor Delta Vault**, a delta-neutral yield product built on Euler and GMX. The oracle runs inside a **ROFL (Runtime Offchain Logic)** enclave on Oasis Sapphire and executes logic to determine when to rebalance the vault based on on-chain lending and funding rate conditions.

---

## 💡 Overview

The Doctor Delta Vault earns yield by:

- Supplying USDC on [Euler Finance](https://www.euler.finance)
- Borrowing ETH against it
- Longing ETH perpetuals on GMX

This off-chain oracle checks:

- The supply APY on Euler USDC markets
- The ETH funding rate on GMX

If both metrics meet a configurable threshold, it triggers a rebalance via an on-chain contract deployed on Arbitrum.

---

## 🛠 How It Works

1. **Schedule:** The logic runs Typescript code in an configurable interval.
2. **Data Fetching:** Pulls real-time data from:
    - Euler UtilsLens Contract
    - GMX Datastore contract
3. **Condition Logic:**
    - Euler Supply APY - Euler Borrow APY GMX > Euler Supply APY
    - If the condition is met, the complete startegy can be executed
    - If not, meaning the strategy is less profitable than the simple supply APY, the oracle triggers the contract to supply USDC without borrowing and going long.
    - Checks the condition regularly
4. **Smart Contract Interaction:**
    - Signs a rebalance transaction using a secure key
    - Sends `rebalanceToNeutral()` or `executeLeveragedStrategy()` to the `DoctorDeltaVault` contract depending on the calculated strategy and current contract status.

Right now the logic only compares a fixed token pair and gmx pool. In the future, this can be extended to

## 🚀 How to Use

- Deploy DoctorDeltaVault contract and note down address.
- Configure the environment variables as in config.example.env
- Run docker container or `npm run dev`
- When deploying the ROFL container, provide secrets like ALCHEMY_API_KEY and PRIVATE_KEY via `echo -n "my very secret value" | oasis rofl secret set mysecret -`

## 👤 Maintainers

Built by **Ferdinand Martini** and **Vincent Weckström** for **ETHGlobal Cannes 2025**.
