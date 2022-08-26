require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/",
      chainId: 5,
      accounts: [`0x${process.env.TEST_NET_PRIVATE}`],
    },
  },
};
