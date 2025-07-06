# 🧠 Doctor Delta Vault – Main Repository

Welcome to the main repository for the **Doctor Delta** project.

This vault implements a delta-neutral strategy using yield from [Euler Finance](https://euler.finance) and perpetual short positions on [GMX](https://gmx.io), with automated rebalancing logic executed via ROFL on Oasis Sapphire.

---

## 📄 Project Structure

This repo includes two major components, each with its own README:

### 1. [`packages/contracts`](./packages/contracts)

Smart contracts deployed on Arbitrum, including the `DoctorDeltaVault` contract that holds and manages user funds.

📘 Refer to [`packages/contracts/README.md`](./packages/contracts/README.md) for:

- Vault strategy
- Rebalancing logic

---

### 2. [`packages/rofl`](./packages/rofl)

The off-chain oracle logic deployed via ROFL, which monitors market conditions and triggers on-chain vault rebalances.

📘 Refer to [`packages/rofl/README.md`](./packages/rofl/README.md) for:

- Oracle data sources
- Execution conditions
- Usage information

## Deployments

Doctor Delta Contract on Arbitrum mainnet: 0xD30E6997119cb5330E927fe8109E7B580e977970
ROFL application identifier (sapphire): rofl1qqrd6s84ge7ugp90mth8rdw80wxkvxrxuyqmphy2
Address used by ROFL Oracle: 0x83bD941abD6D80FC1EA6Dd84553A3bB21B11Ad56

## 👥 Authors

Built by **Ferdinand Martini** and **Vincent Weckström**  
For **ETHGlobal Cannes 2025**
