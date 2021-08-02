require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stomach regret misery unhappy gown light army gaze'; 
let testAccounts = [
"0xc4cb2bba501bfc4f0de315613ac52f188807174a2e201139dac6acc7493688a1",
"0xf33eb6732591b9718bb4265b57eb326300d67e9b95466020062bf77e720df601",
"0x7f408e7bb2f7f74c9e2d324982ac142537f0bac95c06c5e3afb1750cb3b48904",
"0xce69100595cf195b7f7f726c96486649c113949f26c6405aee50b793c423a503",
"0x1362cb576927a551b078d288fe5b99d866e75097c2cce731445fd2df6b119ad6",
"0xe2da449ff94285e4d0a7d33dd87ac472f0cfec6d046f51da025dfca405833c23",
"0x9f8e3c471a4cc7ad5c732b2febeb555dd764b8fae0681a735e4cf5d1bde0baea",
"0x5ddab5947255931aafcd8b8e1d678b75ab609de183ce1d77c349d8f05c860ebf",
"0xf8f9616d408310e02e5032b9135b5a54b82329b880d6a81add67f3f58d799106",
"0x2af15765544fd3837bda3f7bf461e6e815629a794a87537e14223b9269fd5475"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


