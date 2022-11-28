import React, { useEffect } from 'react';
// @ts-ignore
import * as ethers from 'ethers';
import Web3 from 'web3';

import TronWeb from 'tronweb';

import Buffer from 'buffer';

import priConfig from '../Config';

// @ts-ignore
window.ethers = ethers;
// @ts-ignore
window.TronWeb = TronWeb;
// @ts-ignore
window.Web3 = Web3;
// // @ts-ignore
// window.Buffer = Buffer.Buffer;

console.log(priConfig);
const fullHost = 'http://127.0.0.1:9090';
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
const Home = props => {
  let tronWeb = null;
  useEffect(() => {
    let tronWeb = null;
    setTimeout(async () => {
      // @ts-ignore
      if (window.tronLink) {
        // @ts-ignore
        const tronLink = window.tronLink;
        if (tronLink.ready) {
          // @ts-ignore
          tronWeb = tronLink.tronWeb;
        } else {
          const res = await tronLink.request({ method: 'tron_requestAccounts' });
          // console.log(res);
          if (res.code === 200) {
            tronWeb = tronLink.tronWeb;
            console.log('tronWeb', tronWeb);
            return;
          }
        }
      } else {
        console.log('Please install TronLink Extension!');
      }
    }, 3000);
  }, []);

  return (
    <div className="home-container">
      <div>Home...</div>
    </div>
  );
};

export default Home;
//   window.addEventListener(
//     'tronLink#initialized',
//     async () => {
//       console.log(123);
//       // @ts-ignore
//       const tronLink = window.tronLink;
//       if (!tronLink) {
//         console.log('Please install TronLink Extension!');
//         return;
//       }
//       if (tronLink.ready) {
//         tronWeb = tronLink.tronWeb;
//       } else {
//         const res = await tronLink.request({ method: 'tron_requestAccounts' });
//         // console.log(res);
//         if (res.code === 200) {
//           tronWeb = tronLink.tronWeb;
//           console.log('tronWeb', tronWeb);
//           return;
//         }
//         console.log('Please install TronLink Extension!');
//       }
//     },
//     {
//       once: true
//     }
//   );
//   // const transaction = await tronWeb1.transactionBuilder.sendTrx('TDQsxPhq9bgmnw9CeDSrXsYjqt2rb1b3pg', 1000000);
// };
