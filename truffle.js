// Allows us to use ES6 in our migrations and tests.
require('babel-register')
var HDWalletProvider = require("truffle-hdwallet-provider");
//var rpc_endpoint_kovan = "https://kovan.infura.io/v3/a0f96fa594774bad996d670e1ec06cb3";
var rpc_endpoint_poa = "http://paritypoa.eastasia.cloudapp.azure.com:8501";
var mnemonic = "taste public forest put voyage rabbit trial toward actress sudden letter attract";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    poa: {
      //provider: new HDWalletProvider(mnemonic, rpc_endpoint_poa),
      host:"paritypoa.eastasia.cloudapp.azure.com",
      gasPrice: '0x00',
      port: 8501,
      network_id: "*"//1515
    }
  }
}