require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://mainnet.infura.io/v3/3a736f1383ad4b4eb1758a81179f7901",
      accounts: [
        `a267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1`,
      ],
    },
  },
};
