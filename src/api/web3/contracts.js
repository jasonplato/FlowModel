import { ethers } from 'ethers';
import FlowInsightERC721NFT from "./FlowInsightERC721NFT.json"
const contract_address = "0xA832DCD6D80Df82403F745F9D76f4D527560C474"
let contract;
//获取 metamask provider
function getWeb3Provider() {

    if (!window.web3Provider) {
        if (!window.ethereum) {
            return null;
        }
        window.web3Provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    }
    return window.web3Provider;


}
//连接metamask
async function connectMetamask(provider) {
    if (provider === null) {
        return false;
    }
    try {
        // 获取当前连接的账户地址:
        let account = await window.ethereum.request({
            method: 'eth_requestAccounts',
        });
        // 获取当前连接的链ID:
        let chainId = await window.ethereum.request({
            method: 'eth_chainId'
        });
        contract = new ethers.Contract(contract_address, FlowInsightERC721NFT.abi, window.web3Provider.getSigner())
        return { account: account, chainId: chainId, status: true };
    } catch (e) {
        console.error('could not get a wallet connection.', e);
        return false;
    }
}
//监听账户切换
function accountChangeListener(fn) {
    window.ethereum.on('accountsChanged', fn)
}
//获取对应id nft元数据
async function getNftMetadata(id) {
    let tx = await contract.getNFTMetadata(id);
    if (tx != "") {
        return { status: "successed", response: tx };
    } else {
        return { status: "failed", response: null };
    }

}
//获取账户余额
async function getBalance(address) {
    const balance = await window.web3Provider.getBalance(address)
    return ethers.utils.formatEther(balance);
}

//创建nft
async function createNFT(to, name, desc, displayUrl, metadataHash) {
    try {
        let tx = await contract.createNFT(to, name, desc, displayUrl, metadataHash);
        return { status: "successed", response: tx }
    } catch (e) {
        return { status: "failed", response: null }
    }
}
//添加
async function addMinter(user) {
    try {
        let tx = await contract.addMinter(user);
        return { status: "successed", response: tx }
    } catch (e) {
        return { status: "failed", response: null }
    }
}
//移除
async function removeMinter(user) {
    try {
        let tx = await contract.addMinter(user);
        return { status: "successed", response: tx }
    } catch (e) {
        return { status: "failed", response: null }
    }
}
export {
    getWeb3Provider,
    connectMetamask,
    accountChangeListener,
    getBalance,
    getNftMetadata,
    createNFT,
    addMinter,
    removeMinter
}