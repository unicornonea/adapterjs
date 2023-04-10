import React, { useEffect } from 'react';
// @ts-ignore
import { ethers } from 'ethers';
// const ethers = require('ethers');
import Web3 from 'web3';
// @ts-ignore
import TronWeb from 'tronweb';

// import Buffer from 'buffer';

import priConfig from '../Config';

// // @ts-ignore
// // const funcAbi = [
// //   {
// //     'inputs': [
// //       { 'internalType': 'address', 'name': 'cometProxy', 'type': 'address' },
// //       {
// //         'components': [
// //           { 'internalType': 'address', 'name': 'governor', 'type': 'address' },
// //           { 'internalType': 'address', 'name': 'pauseGuardian', 'type': 'address' },
// //           { 'internalType': 'address', 'name': 'baseToken', 'type': 'address' },
// //           { 'internalType': 'address', 'name': 'baseTokenPriceFeed', 'type': 'address' },
// //           { 'internalType': 'address', 'name': 'extensionDelegate', 'type': 'address' },
// //           { 'internalType': 'uint64', 'name': 'supplyKink', 'type': 'uint64' },
// //           { 'internalType': 'uint64', 'name': 'supplyPerYearInterestRateSlopeLow', 'type': 'uint64' },
// //           { 'internalType': 'uint64', 'name': 'supplyPerYearInterestRateSlopeHigh', 'type': 'uint64' },
// //           { 'internalType': 'uint64', 'name': 'supplyPerYearInterestRateBase', 'type': 'uint64' },
// //           { 'internalType': 'uint64', 'name': 'borrowKink', 'type': 'uint64' },
// //           { 'internalType': 'uint64', 'name': 'borrowPerYearInterestRateSlopeLow', 'type': 'uint64' },
// //           { 'internalType': 'uint64', 'name': 'borrowPerYearInterestRateSlopeHigh', 'type': 'uint64' },
// //           { 'internalType': 'uint64', 'name': 'borrowPerYearInterestRateBase', 'type': 'uint64' },
// //           { 'internalType': 'uint64', 'name': 'storeFrontPriceFactor', 'type': 'uint64' },
// //           { 'internalType': 'uint64', 'name': 'trackingIndexScale', 'type': 'uint64' },
// //           { 'internalType': 'uint64', 'name': 'baseTrackingSupplySpeed', 'type': 'uint64' },
// //           { 'internalType': 'uint64', 'name': 'baseTrackingBorrowSpeed', 'type': 'uint64' },
// //           { 'internalType': 'uint104', 'name': 'baseMinForRewards', 'type': 'uint104' },
// //           { 'internalType': 'uint104', 'name': 'baseBorrowMin', 'type': 'uint104' },
// //           { 'internalType': 'uint104', 'name': 'targetReserves', 'type': 'uint104' },
// //           {
// //             'components': [
// //               { 'internalType': 'address', 'name': 'asset', 'type': 'address' },
// //               { 'internalType': 'address', 'name': 'priceFeed', 'type': 'address' },
// //               { 'internalType': 'uint8', 'name': 'decimals', 'type': 'uint8' },
// //               { 'internalType': 'uint64', 'name': 'borrowCollateralFactor', 'type': 'uint64' },
// //               { 'internalType': 'uint64', 'name': 'liquidateCollateralFactor', 'type': 'uint64' },
// //               { 'internalType': 'uint64', 'name': 'liquidationFactor', 'type': 'uint64' },
// //               { 'internalType': 'uint128', 'name': 'supplyCap', 'type': 'uint128' }
// //             ],
// //             'internalType': 'struct CometConfiguration.AssetConfig[]',
// //             'name': 'assetConfigs',
// //             'type': 'tuple[]'
// //           }
// //         ],
// //         'internalType': 'struct CometConfiguration.Configuration',
// //         'name': 'newConfiguration',
// //         'type': 'tuple'
// //       }
// //     ],
// //     'name': 'setConfiguration',
// //     'outputs': [],
// //     'stateMutability': 'nonpayable',
// //     'type': 'function'
// //   }
// // ];
// const funcAbi = [
//   {
//     'inputs': [
//       {
//         'components': [
//           {
//             'internalType': 'uint256',
//             'name': 'merkleIndex',
//             'type': 'uint256'
//           },
//           {
//             'internalType': 'uint256',
//             'name': 'index',
//             'type': 'uint256'
//           },
//           {
//             'internalType': 'uint256',
//             'name': 'amount',
//             'type': 'uint256'
//           },
//           {
//             'internalType': 'bytes32[]',
//             'name': 'merkleProof',
//             'type': 'bytes32[]'
//           }
//         ],
//         'internalType': 'struct MerkleDistributor.Basic[]',
//         'name': 'basic',
//         'type': 'tuple[]'
//       }
//     ],
//     'name': 'multiClaim',
//     'outputs': [],
//     'stateMutability': 'nonpayable',
//     'type': 'function'
//   }
// ];
// //@ts-ignore
// window.funcAbi = funcAbi;
// console.log(funcAbi);

// // @ts-ignore
// // window.iface = new ethers.utils.Interface(funcAbi);
// @ts-ignore
window.ethers = ethers;
// @ts-ignore
window.TronWeb = TronWeb;
// @ts-ignore
window.Web3 = Web3;
// // @ts-ignore
// window.Buffer = Buffer.Buffer;

// // console.log(priConfig);
const fullHost = 'http://127.0.0.1:9090';
// const fullHost = 'https://api.nileex.io';
// // const fullHost = 'https://api.shasta.trongrid.io';
// const fullHost = 'https://api.trongrid.io';
// // for test create 10 token
const priKey = priConfig.privateKey;
const tronWeb1 = new TronWeb({ fullHost, privateKey: priKey });
// @ts-ignore
window.tronWeb1 = tronWeb1;

// // bytesArray to hex
// // const hexStr = window.Buffer.from('test').toString('hex');
// // TronWeb.utils.bytes.byteArray2hexStr(hexStr);

// /*
/**
 *
 * @param props ethers.js
 * @returns
 */
// / 1. Using ethers.js v5.x.x to interact with Metamask
// @ts-ignore
// const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
// // @ts-ignore
// window.provider = provider;
// Prompt user for account connections
// await provider.send('eth_requestAccounts', []);
// const signer = provider.getSigner();
// console.log("Account:", await signer.getAddress());

// 2. Using ethers.js v6.x.x to interact with Metamask
// // @ts-ignore
// const provider = new ethers.BrowserProvider(window.ethereum)
// // @ts-ignore
// window.provider = provider;
// Prompt user for account connections
// await provider.send('eth_requestAccounts', []);
// const signer = provider.getSigner();
// console.log("Account:", await signer.getAddress());

// */
// // let funcABIV2 =
// // @ts-ignore
// // let parametersV2 = (window.parametersV2 = [
// //   '0x65fa68800fff5a10346d1a3aa1fb2ce92f2e2971',
// //   [
// //     '0x65fa68800fff5a10346d1a3aa1fb2ce92f2e2971',
// //     '0xdf8b1f3c5ceb7b8db39b729fa930387c4762c60b',
// //     '0xdf8b1f3c5ceb7b8db39b729fa930387c4762c60b',
// //     '0xdf8b1f3c5ceb7b8db39b729fa930387c4762c60b',
// //     '0xdf8b1f3c5ceb7b8db39b729fa930387c4762c60b',
// //     '8000',
// //     '8000',
// //     '8000',
// //     '8000',
// //     '8000',
// //     '8000',
// //     '8000',
// //     '8000',
// //     '8000',
// //     '8000',
// //     '8000',
// //     '8000',
// //     '8000',
// //     '8000',
// //     '8000',
// //     [
// //       [
// //         '0xdf8b1f3c5ceb7b8db39b729fa930387c4762c60b',
// //         '0xdf8b1f3c5ceb7b8db39b729fa930387c4762c60b',
// //         '10',
// //         '1000',
// //         '1000',
// //         '1000',
// //         '1000'
// //       ]
// //     ]
// //   ]
// // ]);
// let parametersV2 = (window.parametersV2 = [
//   [
//     [
//       0,
//       0,
//       '0xaa88f7fa176510',
//       [
//         '0xe116cae13225146c82cb535c347e22408bc343853fd244d131df1bf7477cb54d',
//         '0xd8023b5735ace43dfe0ec92a442817c79f29c8477ff29f6e59d7f565c00f72ae',
//         '0x53bad50d55806a9f36970840b235bd36b24779097c4b9c2f447c72a88c45b962',
//         '0x9f007ef7a147e9b201b79fb2f483b64843fe722d9ad307c03d476206313e9c87',
//         '0xa9e949f1f4c0630dcd949c7149d20809649e9d3eb5fdd5a0a23cbff03bc9637e',
//         '0x557910635442db907b92f31a4cecd6e807ccc5c9809914d34faf5d2c6262794f',
//         '0x7d9f0aa3894af69a8f670ccad302c74313953cd45852f695f6ce6c98e414041e',
//         '0xa1aa2f31a04f38d6034af8631d111f0e5c5ba3951c84a9d3a18525df2a8ab3eb',
//         '0xfb5ee87e2ad2a6916825a33762cd2a63e0536e2be84b57f85a582fcdfbd1c9e3',
//         '0xe441dcb2f579c3ef2602f990adde495085413d2eed07e1255c281e9bc2b276a9',
//         '0x699b06e49f418182bc5af413dbd273157b505ba3360cba303f2ca66fa2974f46',
//         '0xfabdc73584ddca01a0af1fa4f5ee7f3aef43e0b3a382fc50a6c1af94874c3a19',
//         '0x45a0c3b71cceae011d78d340b589b98fa356d823d9acdc7f1e5b266f2dcfd5eb',
//         '0xd06942e48ee795f0482924161c0c7b94d97fbe0149a614f97896dacb1d1e104f',
//         '0x2012fcd1a14f279d8935bd01c3d302f589540779dd7f8dcac15963ef6f53dd9d'
//       ]
//     ],
//     [
//       0,
//       0,
//       '0xaa88f7fa176510',
//       [
//         '0xe116cae13225146c82cb535c347e22408bc343853fd244d131df1bf7477cb54d',
//         '0xd8023b5735ace43dfe0ec92a442817c79f29c8477ff29f6e59d7f565c00f72ae',
//         '0x53bad50d55806a9f36970840b235bd36b24779097c4b9c2f447c72a88c45b962',
//         '0x9f007ef7a147e9b201b79fb2f483b64843fe722d9ad307c03d476206313e9c87',
//         '0xa9e949f1f4c0630dcd949c7149d20809649e9d3eb5fdd5a0a23cbff03bc9637e',
//         '0x557910635442db907b92f31a4cecd6e807ccc5c9809914d34faf5d2c6262794f',
//         '0x7d9f0aa3894af69a8f670ccad302c74313953cd45852f695f6ce6c98e414041e',
//         '0xa1aa2f31a04f38d6034af8631d111f0e5c5ba3951c84a9d3a18525df2a8ab3eb',
//         '0xfb5ee87e2ad2a6916825a33762cd2a63e0536e2be84b57f85a582fcdfbd1c9e3',
//         '0xe441dcb2f579c3ef2602f990adde495085413d2eed07e1255c281e9bc2b276a9',
//         '0x699b06e49f418182bc5af413dbd273157b505ba3360cba303f2ca66fa2974f46',
//         '0xfabdc73584ddca01a0af1fa4f5ee7f3aef43e0b3a382fc50a6c1af94874c3a19',
//         '0x45a0c3b71cceae011d78d340b589b98fa356d823d9acdc7f1e5b266f2dcfd5eb',
//         '0xd06942e48ee795f0482924161c0c7b94d97fbe0149a614f97896dacb1d1e104f',
//         '0x2012fcd1a14f279d8935bd01c3d302f589540779dd7f8dcac15963ef6f53dd9d'
//       ]
//     ]
//   ]
// ]);
// let contractAddress = 'TReYXEDcZqauPcr612xQE9ei5q5gGQbvzA';
// let functionSelector = 'multiClaim((uint256,uint256,uint256,bytes32[])[])';
// // let functionSelector =
// //   'setConfiguration(address,(address,address,address,address,address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint104,uint104,uint104,(address,address,uint8,uint64,uint64,uint64,uint128)[]))';

// // let functionSelector = 'setConfiguration(address cometProxy,Configuration calldata newConfiguration)';
// // let options = { funcABIV2: funcAbi, parametersV2 };
// let rawParameter = TronWeb.utils.abi.encodeParamsV2ByABI(funcAbi[0], parametersV2);
// let options = { rawParameter: rawParameter };

// let parameters = [];
let Home = props => {
  return (
    <div className="home-container">
      <div>Home...</div>
    </div>
  );
};

export default Home;
