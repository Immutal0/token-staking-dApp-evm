# ERC-20 Token Staking DApp

This is a decentralized application (DApp) that allows users to stake their ERC-20 tokens to earn rewards. The DApp interacts with a smart contract deployed on an Ethereum-compatible blockchain.

## Features

- **Stake ERC-20 Tokens**: Users can stake any ERC-20 token in the contract.
- **Claim Rewards**: Users can claim their staking rewards.
- **Unstake Tokens**: Users can withdraw their tokens after staking.
- **Secure and Transparent**: All staking activities are recorded on the blockchain.

## Tech Stack

- **Smart Contract**: Solidity (ERC-20 Token Staking Contract)
- **Frontend**: React.js (with web3.js or ethers.js for blockchain interaction)
- **Blockchain**: Ethereum, Polygon, or other EVM-compatible chains
- **Wallet Integration**: MetaMask, WalletConnect

## Installation

### Clone the Repository

```bash
git clone https://github.com/Immutal0/erc20-staking-dApp-evm.git
cd erc20-staking-dApp-evm
```

### Install Dependencies

For the frontend:

```bash
cd frontend
npm install
```

### Running the Frontend

Once the smart contract is deployed:

```bash
cd frontend
npm start
```

This will start a development server at `http://localhost:3000`.

## Usage

### Staking Tokens

1. Connect your wallet (MetaMask, WalletConnect, etc.) to the DApp.
2. Select the ERC-20 token you wish to stake.
3. Enter the amount of tokens you want to stake and confirm the transaction.

### Claiming Rewards

- Once you've staked your tokens, you can claim your staking rewards by clicking the "Claim Rewards" button.

### Unstaking Tokens

- To unstake tokens, click the "Unstake" button and confirm the transaction.

## Security

This contract has been audited and tested for common vulnerabilities. However, always be cautious when interacting with smart contracts. Only interact with trusted DApps and contracts.

## Contributing

We welcome contributions! If you'd like to improve this project, please follow the steps below:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.
