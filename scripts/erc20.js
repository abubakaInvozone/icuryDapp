const hre = require("hardhat");

async function main() {
  const IcuryErc20 = await hre.ethers.getContractFactory("IcuryErc20");
  const icuryErc20 = await IcuryErc20.deploy();
  await icuryErc20.deployed();
  console.log("icuryErc20 deployed to:", icuryErc20.deployTransaction);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
