# 🩺 Doctor Delta Vault ROFL Oracle

This repository contains the off-chain oracle logic for the **Doctor Delta Vault**, a delta-neutral yield product built on Euler and GMX. The oracle runs inside a **ROFL (Runtime Offchain Logic)** enclave on Oasis Sapphire and executes logic to determine when to rebalance the vault based on on-chain lending and funding rate conditions.

---

## 💡 Overview

The Doctor Delta Vault earns yield by:
- Supplying USDC on [Euler Finance](https://www.euler.finance)
- Borrowing ETH against it
- Shorting ETH perpetuals on GMX

This off-chain oracle checks:
- The supply APY on Euler USDC markets
- The ETH funding rate on GMX

If both metrics meet a configurable threshold, it triggers a rebalance via an on-chain contract deployed on Arbitrum.

---

## 🛠 How It Works

1. **Schedule:** The logic runs as a scheduled Cron job (via `ROFL.cron`).
2. **Data Fetching:** Pulls real-time data from:
   - [Euler subgraph](https://thegraph.com/hosted-service/subgraph/euler-xyz/euler-mainnet)
   - [GMX API](https://gmxio.gitbook.io/gmx)
3. **Condition Logic:**
   - Euler APY > 4.0%
   - GMX funding rate > 0.01% (positive carry)
4. **Smart Contract Interaction:**
   - Signs a rebalance transaction using a secure enclave key
   - Sends `rebalance()` to the `DoctorDeltaVault` contract

---

## 🧾 File Structure

| File | Purpose |
|------|---------|
| `index.ts` | Main ROFL logic and trigger |
| `utils.ts` | Helper functions for APY, funding rate, condition logic |
| `DoctorDeltaVault.ts` | Contract ABI and rebalance call logic |
| `UtilsLens.ts` | Optional additional on-chain contract lens helper |

---

## 🔐 Security & Trust

This logic is deployed via **ROFL** on **Oasis Sapphire**, ensuring:
- **Confidentiality**: API keys and signing keys never leave the enclave
- **Integrity**: Signed messages originate from within a trusted execution environment
- **Automation**: No human intervention needed to monitor market conditions

---

## 🚀 Deployment

### Prerequisites
- Node.js v18+
- ROFL SDK
- Oasis CLI configured
- Environment variables for secrets (if needed)

### Steps

```bash
git clone https://github.com/your-org/doctor-delta-rofl-oracle.git
cd doctor-delta-rofl-oracle

npm install
npx rofl build
npx rofl deploy --network sapphire
```

> Note: Ensure your TEE signer is properly configured and whitelisted on the contract if needed.

---

## ⚙️ Configuration

Edit the thresholds in `utils.ts`:
```ts
const APY_THRESHOLD = 0.04;
const FUNDING_RATE_THRESHOLD = 0.0001;
```

Set contract address in `DoctorDeltaVault.ts`:
```ts
export const DOCTOR_DELTA_VAULT = "0xYourContractAddress";
```

---

## 📡 Data Sources

- **Euler Subgraph:** for real-time APY data
- **GMX Funding Rate API:** for ETH perps

---

## 🧪 Testing

The logic can be dry-run locally:
```bash
npx ts-node index.ts
```

To simulate rebalancing without signing:
```ts
rebalance(false); // mock call
```

---

## 📄 License

MIT — © 2025 Ferdinand Martini and Vincent Weckström

---

## 👤 Maintainers

Built by **Ferdinand Martini** and **Vincent Weckström** for **ETHGlobal Cannes 2025**.