const ethers = require('ethers');

let version = ethers.version;

console.log(version);

let a = ethers.Wallet.createRandom({ locale: 'zh' });

console.log(a);
