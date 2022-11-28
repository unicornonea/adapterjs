import React, { useEffect } from 'react';
// @ts-ignore

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

  const metamaskDeepLink = () => {
    const dappUrl = 'https://opensea.io/';
    const userAddress = '0xA8B19365b2c56b414A79801595a750C56B20AA28';
    const defaultChaiId = 1;
    const tokenAmount = 1e21;

    const tokenAddress = '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5';
    const chainId = 1;
    const receiverAddress = '0xA8B19365b2c56b414A79801595a750C56B20AA28';

    const targetAddress = '0xA8B19365b2c56b414A79801595a750C56B20AA28';
    const amountNumber = 1e21;
    const detail = '';

    return (
      <>
        <h1>
          Metamask{' '}
          <a href="https://docs.metamask.io/guide/mobile-best-practices.html#deeplinking" target="_blank">
            doc link
          </a>
        </h1>
        <ol>
          <li>
            <a href={`https://metamask.app.link/dapp/${dappUrl}`}>Open a dapp</a>
          </li>
          <li>
            <a href={`https://metamask.app.link/send/${userAddress}@${defaultChaiId}?value=${tokenAmount}`}>
              Payment Request: ETH Payment
            </a>
          </li>
          <li>
            <a
              href={`https://metamask.app.link/send/${tokenAddress}@${chainId}/transfer?address=${receiverAddress}&uint256=${tokenAmount}`}
            >
              Payment Request: ERC20 token transfer
            </a>
          </li>
          <li>
            <a href={`https://metamask.app.link/payment/${targetAddress}?amount=${amountNumber}&dedail=${detail}`}>
              Payment Request: ERC20 token transfer
            </a>
          </li>
        </ol>
      </>
    );
  };

  const coinbaseDeeplink = () => {
    const dappUrl = 'https://opensea.io/';
    const callback = null;
    return (
      <>
        <h1>
          Coinbase{' '}
          <a href="https://docs.cloud.coinbase.com/wallet-sdk/docs/deep-link-into-dapp-browser" target="_blank">
            doc link
          </a>
        </h1>
        <ol>
          <li>
            <a href={`https://go.cb-w.com/dapp?cb_url=${dappUrl}&cb_callback=${callback}`}>coinbase deeplink</a>
          </li>
        </ol>
      </>
    );
  };

  const tpDeeplink = () => {
    const authorizeParam = {
      'callbackUrl': 'http://localhost:3000/',
      'action': 'login',
      'actionId': '1648522106711',
      'blockchains': [
        {
          'chainId': '1',
          'network': 'ethereum'
        }
      ],
      'dappIcon': 'https://eosknights.io/img/icon.png',
      'dappName': 'zs',
      'protocol': 'TokenPocket',
      'version': '2.0'
    };
    const transferParam = {
      'amount': 0.1,
      'contract': '0x1161725d019690a3e0de50f6be67b07a86a9fae1',
      'decimal': 18,
      'desc': '',
      'from': '0x12F4900A1fB41f751b8F616832643224606B75B4',
      'memo': '0xe595a6',
      'precision': 0,
      'symbol': 'SPT',
      'to': '0x34018569ee4d68a275909cc2538ff67a742f41c8',
      'action': 'transfer',
      'actionId': 'web-db4c5466-1a03-438c-90c9-2172e8becea5',
      'blockchains': [
        {
          'chainId': '1',
          'network': 'ethereum'
        }
      ],
      'dappIcon': 'https://eosknights.io/img/icon.png',
      'dappName': 'Test demo',
      'protocol': 'TokenPocket',
      'callbackUrl': 'http://localhost:3000/',
      'version': '2.0'
    };
    const transactionParam = {
      'txData':
        '{"from":"0x12F4900A1fB41f751b8F616832643224606B75B4","gasPrice":"0x6c088e200","gas":"0xea60","chainId":"1","to":"0x1d1e7fb353be75669c53c18ded2abcb8c4793d80","data":"0xa9059cbb000000000000000000000000171a0b081493722a5f22ebe6f0c4adf5fde49bd8000000000000000000000000000000000000000000000000000000000012c4b0"}',
      'action': 'pushTransaction',
      'actionId': 'web-db4c5466-1a03-438c-90c9-2172e8becea5',
      'blockchains': [
        {
          'chainId': '1',
          'network': 'ethereum'
        }
      ],
      'callbackUrl': 'http://localhost:3000/',
      'dappIcon': 'https://eosknights.io/img/icon.png',
      'dappName': 'Test demo',
      'protocol': 'TokenPocket',
      'version': '2.0'
    };
    const signMsgParam = {
      'hash': false,
      'memo': 'demo',
      'message': '0xc05dfb5d7d33ef21dacffc010ff0a45204a3dd5e0cf6f9a970f07339d7a7770e',
      'signType': 'ethSign',
      'action': 'sign',
      'actionId': 'web-db4c5466-1a03-438c-90c9-2172e8becea5',
      'blockchains': [
        {
          'chainId': '1',
          'network': 'ethereum'
        }
      ],
      'callbackUrl': 'http://115.205.0.178:9011/taaBizApi/taaInitData',
      'dappIcon': 'https://eosknights.io/img/icon.png',
      'dappName': 'Test demo',
      'protocol': 'TokenPocket',
      'version': '2.0'
    };
    const openUrlParam = {
      'url': 'https://dapp.mytokenpocket.vip/referendum/index.html#/',
      'chain': 'EOS',
      'source': 'xxx'
    };
    return (
      <>
        <h1>
          Token Pocket{' '}
          <a href="https://help.tokenpocket.pro/developer-cn/mobile-wallet/deeplink" target="_blank">
            doc link
          </a>
        </h1>
        <ol>
          <li>
            <a href={`tpoutside://pull.activity?param=${encodeURI(JSON.stringify(authorizeParam))}`}>
              Open TokenPocket to authorize
            </a>
          </li>
          <li>
            <a href={`tpoutside://pull.activity?param=${encodeURI(JSON.stringify(transferParam))}`}>
              Open TokenPocket to transfer
            </a>
          </li>
          <li>
            <a href={`tpoutside://pull.activity?param=${encodeURI(JSON.stringify(transactionParam))}`}>
              Open TokenPocket to push Transaction
            </a>
            <br />
          </li>
          <li>
            <a href={`tpoutside://pull.activity?param=${encodeURI(JSON.stringify(signMsgParam))}`}>
              Open TokenPocket to sign message
            </a>
            <br />
          </li>
          <li>
            <a href={`tpdapp://open?params=${encodeURI(JSON.stringify(openUrlParam))}`}>Open TokenPocket to open url</a>
            <br />
          </li>
        </ol>
      </>
    );
  };

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
        {metamaskDeepLink()}
        {coinbaseDeeplink()}
        {tpDeeplink()}
      </div>
    </div>
  );
};

export default Home;
