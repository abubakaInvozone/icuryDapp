const hre = require("hardhat");

async function main() {
  const IcuryErc1155 = await hre.ethers.getContractFactory("IcuryErc1155");
  const icuryErc1155 = await IcuryErc1155.deploy();

  await icuryErc1155.deployed();
  console.log("icuryErc1155 deployed to:", icuryErc1155.deployTransaction);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
