const { ethers } = require('hardhat')
// const { ethers, JsonRpcProvider } = require('ethers');

const fs = require('fs')

async function main() {
    const base_uri = 'https://ipfs.io/ipfs/QmTWbe9wDns7aqZQNCuWh5PqybGbBF91kngC5Zf8qmCoyg/';
    
  const contract_name = 'minting';
  const Contract = await ethers.getContractFactory(contract_name);
  const contract = await Contract.deploy('rajnft','RJM',base_uri);

  await contract.deployed()

  const address = JSON.stringify({ address: contract.address }, null, 4)
  fs.writeFile('./src/abis/contractAddress.json', address, 'utf8', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Deployed contract address', contract.address)
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
