// Allows us to use ES6 in our migrations and tests.
require('babel-register')
var HDWalletProvider = require("truffle-hdwallet-provider");
//var rpc_endpoint_kovan = "https://kovan.infura.io/v3/a0f96fa594774bad996d670e1ec06cb3";
var rpc_endpoint_poa = "http://eth7l2f7b-dns-reg1.eastasia.cloudapp.azure.com:8540";
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
    azure: {
      provider: new HDWalletProvider(mnemonic, rpc_endpoint_poa),
      gasPrice: '0',
      //port: 8540,
      network_id: '10101010'
    }
  }
};