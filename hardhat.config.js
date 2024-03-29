require("@nomiclabs/hardhat-waffle");
// require("hardhat-deploy");
// require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [
        "41e5bd77757214987225e120541b7c4a48228fccaef00d1ab1e8d8d320fd8828",
      ],
    },
  },
  solidity: "0.8.0",
  settings: {
    optimizer: {
      enabled: true,
      runs: 20,
    },
  },
};
