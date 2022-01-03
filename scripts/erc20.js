// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const { ethers, upgrades } = require("hardhat");

// const Box = await ethers.getContractFactory("Box");
// const box = await upgrades.deployProxy(Box, [42]);
// await box.deployed();
// console.log("Box deployed to:", box.address);

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const IcuryErc20 = await hre.ethers.getContractFactory("IcuryErc20");
  const icuryErc20 = await hre.upgrades.deployProxy(IcuryErc20, [42]);

  //   const greeter = await Greeter.deploy("Hello, Hardhat!");

  await icuryErc20.deployed();

  // console.log("Greeter deployed to:", greeter.address);
  console.log("icuryErc20 deployed to:", icuryErc20.deployTransaction);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
