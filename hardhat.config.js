require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const  INFIURA_URL = process.env.INFIURA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: INFIURA_URL,
      accounts:[PRIVATE_KEY],
    },
  },
};