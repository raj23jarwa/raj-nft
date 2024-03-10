require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

const {
	VITE_ALCHEMY_API_URL,
	VITE_PRIVATE_KEY,
	VITE_ETHERSCAN_API_KEY,
	// VITE_ALCHEMY_API_KEY
} = process.env

const ALCHEMY_API_URL= VITE_ALCHEMY_API_URL;
// const ALCHEMY_API_KEY = VITE_ALCHEMY_API_KEY;
const SEPOLIA_PRIVATE_KEY = VITE_PRIVATE_KEY;
module.exports = {

	networks: {
		sepolia: {
			url: ALCHEMY_API_URL,
			accounts: [`${SEPOLIA_PRIVATE_KEY}`],
		}
	},
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './src/contracts',
    artifacts: './src/abis',
  },
  etherscan: {
		apiKey: VITE_ETHERSCAN_API_KEY
	},
  mocha: {
    timeout: 40000,
  },
}
  

// my contract address:0x7f8d5ef0b2655a965da1b9316164460c4e5edd6e65538ce73bd32e7d497923b7