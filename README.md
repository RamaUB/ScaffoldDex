# SimpleDex (on Scaffold-ETH 2)

![image](https://github.com/user-attachments/assets/941607be-95ce-462a-b6f2-b4468954af43)

 
## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.18)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with SimpleDex (on Scaffold-ETH 2), follow the steps below:

1. Install dependencies if it was skipped in CLI:

```
cd ScaffoldDex
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/hardhat/hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit SimpleDex  on: `http://localhost:3000`. You can interact with your smart contract right away. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

## Documentation (for Scaffold-ETH)

Visit [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

Contributions to Scaffold-ETH 2 are welcome!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
