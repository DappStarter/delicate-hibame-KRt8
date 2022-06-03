require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remember artwork give arena flock genre'; 
let testAccounts = [
"0xb31b99252e5391b9ae5e24c7c57a80eb396a65531d2e779c8a62f1ec3e9e4c4c",
"0xdf72bae5978c48898f2b3e5bd7fec35ec96694889f601dae98b838d5da8ca2b1",
"0xe26bea653dc72dc1b84a921a36b33891e7e572cc136f52e961492a8f8bd35e6b",
"0x374075e88fb8baaf55f50e5460e7375f9d2fd2c7697a19c52fb0266f1dc3bf26",
"0xbd9dafede30b38dbd74c5c9200d5ea7110d408ab6c83caca5c87923cd27fa84a",
"0x1bea916f37bd28f682b12f14b3eff8daaccf5b2b6f1ccd0c8eee2f5bb121f589",
"0xcc8ef8ece3f22af968ccda8b97c941a16770c87bfe19f5982b379f18c0d017b4",
"0x28d444f295ed33cc4f7489bd838b0745847f0faeca7dee456aad4edf4e9a428a",
"0xa1537e047a90c47acd151f110983a296a50c1d1d474fd13f198a178a557853d8",
"0x43d199c42d0f4b086f180aba38db307814ae47f39740be94ed65c5a638ec0d7c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

