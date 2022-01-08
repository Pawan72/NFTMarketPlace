require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync('.secret').toString();
const projectId = ''

module.exports = {
  networks: {
    hardhat:{
      chainId: 1337
    },
    mumbai:{
      url: `https://wawaoticdype.usemoralis.com:2053/server`,
      accounts:[privateKey]
    },
    mainnet:{
      url:`https://wawaoticdype.usemoralis.com:2053/server`,
      accounts:[privateKey]
    }
  },
  solidity: "0.8.4",
};
