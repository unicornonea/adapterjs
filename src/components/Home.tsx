import React, { useEffect } from 'react';
// @ts-ignore
import * as ethers from 'ethers';
import Web3 from 'web3';

import TronWeb from 'tronweb';

import Buffer from 'buffer';

import priConfig from '../Config';

// @ts-ignore
const funcAbi = [
  {
    'inputs': [
      { 'internalType': 'address', 'name': 'cometProxy', 'type': 'address' },
      {
        'components': [
          { 'internalType': 'address', 'name': 'governor', 'type': 'address' },
          { 'internalType': 'address', 'name': 'pauseGuardian', 'type': 'address' },
          { 'internalType': 'address', 'name': 'baseToken', 'type': 'address' },
          { 'internalType': 'address', 'name': 'baseTokenPriceFeed', 'type': 'address' },
          { 'internalType': 'address', 'name': 'extensionDelegate', 'type': 'address' },
          { 'internalType': 'uint64', 'name': 'supplyKink', 'type': 'uint64' },
          { 'internalType': 'uint64', 'name': 'supplyPerYearInterestRateSlopeLow', 'type': 'uint64' },
          { 'internalType': 'uint64', 'name': 'supplyPerYearInterestRateSlopeHigh', 'type': 'uint64' },
          { 'internalType': 'uint64', 'name': 'supplyPerYearInterestRateBase', 'type': 'uint64' },
          { 'internalType': 'uint64', 'name': 'borrowKink', 'type': 'uint64' },
          { 'internalType': 'uint64', 'name': 'borrowPerYearInterestRateSlopeLow', 'type': 'uint64' },
          { 'internalType': 'uint64', 'name': 'borrowPerYearInterestRateSlopeHigh', 'type': 'uint64' },
          { 'internalType': 'uint64', 'name': 'borrowPerYearInterestRateBase', 'type': 'uint64' },
          { 'internalType': 'uint64', 'name': 'storeFrontPriceFactor', 'type': 'uint64' },
          { 'internalType': 'uint64', 'name': 'trackingIndexScale', 'type': 'uint64' },
          { 'internalType': 'uint64', 'name': 'baseTrackingSupplySpeed', 'type': 'uint64' },
          { 'internalType': 'uint64', 'name': 'baseTrackingBorrowSpeed', 'type': 'uint64' },
          { 'internalType': 'uint104', 'name': 'baseMinForRewards', 'type': 'uint104' },
          { 'internalType': 'uint104', 'name': 'baseBorrowMin', 'type': 'uint104' },
          { 'internalType': 'uint104', 'name': 'targetReserves', 'type': 'uint104' },
          {
            'components': [
              { 'internalType': 'address', 'name': 'asset', 'type': 'address' },
              { 'internalType': 'address', 'name': 'priceFeed', 'type': 'address' },
              { 'internalType': 'uint8', 'name': 'decimals', 'type': 'uint8' },
              { 'internalType': 'uint64', 'name': 'borrowCollateralFactor', 'type': 'uint64' },
              { 'internalType': 'uint64', 'name': 'liquidateCollateralFactor', 'type': 'uint64' },
              { 'internalType': 'uint64', 'name': 'liquidationFactor', 'type': 'uint64' },
              { 'internalType': 'uint128', 'name': 'supplyCap', 'type': 'uint128' }
            ],
            'internalType': 'struct CometConfiguration.AssetConfig[]',
            'name': 'assetConfigs',
            'type': 'tuple[]'
          }
        ],
        'internalType': 'struct CometConfiguration.Configuration',
        'name': 'newConfiguration',
        'type': 'tuple'
      }
    ],
    'name': 'setConfiguration',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }
];
console.log(funcAbi);

// @ts-ignore
window.iface = new ethers.utils.Interface(funcAbi);
// @ts-ignore
window.ethers = ethers;
// @ts-ignore
window.TronWeb = TronWeb;
// @ts-ignore
window.Web3 = Web3;
// @ts-ignore
window.Buffer = Buffer.Buffer;

console.log(priConfig);
// const fullHost = 'http://127.0.0.1:9090';
const fullHost = 'https://api.nileex.io';
// const fullHost = 'https://api.shasta.trongrid.io';
// for test create 10 token
const priKey = priConfig.privateKey;
const tronWeb1 = new TronWeb({ fullHost, privateKey: priKey });
// @ts-ignore
window.tronWeb1 = tronWeb1;

// bytesArray to hex
// const hexStr = window.Buffer.from('test').toString('hex');
// TronWeb.utils.bytes.byteArray2hexStr(hexStr);

/*

// Using ethers.js to interact with Metamask

const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
// Prompt user for account connections
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
console.log("Account:", await signer.getAddress());
*/
// let funcABIV2 =
// @ts-ignore
let parametersV2 = (window.parametersV2 = [
  '0x65fa68800fff5a10346d1a3aa1fb2ce92f2e2971',
  [
    '0x65fa68800fff5a10346d1a3aa1fb2ce92f2e2971',
    '0xdf8b1f3c5ceb7b8db39b729fa930387c4762c60b',
    '0xdf8b1f3c5ceb7b8db39b729fa930387c4762c60b',
    '0xdf8b1f3c5ceb7b8db39b729fa930387c4762c60b',
    '0xdf8b1f3c5ceb7b8db39b729fa930387c4762c60b',
    '8000',
    '8000',
    '8000',
    '8000',
    '8000',
    '8000',
    '8000',
    '8000',
    '8000',
    '8000',
    '8000',
    '8000',
    '8000',
    '8000',
    '8000',
    [
      [
        '0xdf8b1f3c5ceb7b8db39b729fa930387c4762c60b',
        '0xdf8b1f3c5ceb7b8db39b729fa930387c4762c60b',
        '10',
        '1000',
        '1000',
        '1000',
        '1000'
      ]
    ]
  ]
]);
let contractAddress = 'TQ1ZAVUChB1kQTFciJoRgyg3LsW2msk8L9';
let functionSelector =
  'setConfiguration(address,(address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint104,uint104,uint104,(address,address,uint8,uint64,uint64,uint64,uint128)[]))';

// let functionSelector = 'setConfiguration(address cometProxy,Configuration calldata newConfiguration)';
// let options = { funcABIV2: funcAbi, parametersV2 };
let rawParameter = TronWeb.utils.abi.encodeParamsV2ByABI(funcAbi[0], parametersV2);
let options = { rawParameter: rawParameter };

let parameters = [];
let Home = props => {
  let tronWeb = null;
  useEffect(() => {
    let tronWeb = null;
    setTimeout(async () => {
      const transaction = await tronWeb1.transactionBuilder.triggerSmartContract(
        contractAddress,
        functionSelector,
        options,
        parameters
      );
      console.log(transaction);
      // const instance = await tronWeb1.contract(abi, contractAddress);
      // const res = await instance.setConfiguration('TH1T9eN1vaVhhUrmH4PukgoymU9P5aZCAx', parametersV2).send();
      // console.log(res, 'ccc');
      //   // @ts-ignore
      //   if (window.tronLink) {
      //     // @ts-ignore
      //     const tronLink = window.tronLink;
      //     if (tronLink.ready) {
      //       // @ts-ignore
      //       tronWeb = tronLink.tronWeb;
      //     } else {
      //       const res = await tronLink.request({ method: 'tron_requestAccounts' });
      //       // console.log(res);
      //       if (res.code === 200) {
      //         tronWeb = tronLink.tronWeb;
      //         console.log('tronWeb', tronWeb);
      //         return;
      //       }
      //     }
      //   } else {
      //     console.log('Please install TronLink Extension!');
      //   }
    }, 3000);
  }, []);

  return (
    <div className="home-container">
      <div>Home...</div>
    </div>
  );
};

export default Home;
