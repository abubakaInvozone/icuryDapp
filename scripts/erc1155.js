// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  //   const Greeter = await hre.ethers.getContractFactory("IcuryErc1155");
  //   const greeter = await Greeter.deploy("Hello, Hardhat!");

  //   await greeter.deployed();

  //   // console.log("Greeter deployed to:", greeter.address);
  //   console.log("Greeter deployed to:", greeter.deployTransaction);

  const IcuryErc1155 = await hre.ethers.getContractFactory("IcuryErc1155");
  const icuryErc1155 = await hre.upgrades.deployProxy(IcuryErc1155, [42]);

  //   const greeter = await Greeter.deploy("Hello, Hardhat!");

  await icuryErc1155.deployed();

  // console.log("Greeter deployed to:", greeter.address);
  console.log("icuryErc1155 deployed to:", icuryErc1155.deployTransaction);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
