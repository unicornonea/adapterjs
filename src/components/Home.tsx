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
// @ts-ignore
window.Buffer = Buffer.Buffer;

console.log(priConfig);
// for test create 10 token
const priKey = priConfig.privateKey;
const tronWeb1 = new TronWeb({ fullHost: 'https://api.nileex.io', privateKey: priKey });
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
  useEffect(() => {
    const func = async () => {
      // const transaction = await tronWeb1.transactionBuilder.sendTrx('TDQsxPhq9bgmnw9CeDSrXsYjqt2rb1b3pg', 1000000);
    };
    func();
  }, []);
  const openseaUrl = encodeURI('https://opensea.io/');
  return (
    <div className="home-container">
      <div>Home...</div>
      <div>
        <h1>
          imtoken{' '}
          <a href="https://imtoken.gitbook.io/developers/v/zh/products/deep-linking" target="_blank">
            doc link
          </a>
        </h1>
        <div>
          <a href={`imtokenv2://navigate/DappView?url=${openseaUrl}`}>imtoken deeplink</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
