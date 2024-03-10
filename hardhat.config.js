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
  defaultNetwork: "localhost",
	networks: {
    hardhat: {
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
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
  

// my contract address:0x5FbDB2315678afecb367f032d93F642f64180aa3