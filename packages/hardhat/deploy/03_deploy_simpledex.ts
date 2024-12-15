import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deploySimpleDex: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` or `yarn account:import` to import your
    existing PK which will fill DEPLOYER_PRIVATE_KEY_ENCRYPTED in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
    const { deployments, getNamedAccounts } = hre
    const { deploy, get } = hre.deployments;
    const { deployer } = await hre.getNamedAccounts();


  const tokenA = await get("TokenA"); // Nombre definido en el despliegue de TokenA
  const tokenB = await get("TokenB"); // Nombre definido en el despliegue de TokenB


  await deploy("SimpleDex", {
    from: deployer,
    // Contract constructor arguments
    args: [tokenA.address, tokenB.address],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const simpleDex = await hre.ethers.getContract<Contract>("SimpleDex", deployer);
};

export default deploySimpleDex;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deploySimpleDex.tags = ["SimpleDex"];
