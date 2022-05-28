import { ethers } from 'ethers';
import FlowInsightERC721NFT from "./FlowInsightERC721NFT.json";
import FlowInsightVault from "./FlowInsightVault.json";
import FlowInsightMarketplace from "./FlowInsightMarketplace.json";

const contract_address = "0x6C3838C66770927e0eeC57fCa550B1d651e5da8e";
const marketplace_address = "0x2528A191640638DcF6FafeE51E95946EE374C641";
const vault_address = "0xDD495cB2Cd7BFA616eB1F74A70E47F5c8f299BDf";

let contract = null;
let vault = null;
let marketplace = null;
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
        contract = new ethers.Contract(contract_address, FlowInsightERC721NFT.abi, window.web3Provider.getSigner());
        vault = new ethers.Contract(vault_address, FlowInsightVault.abi, window.web3Provider.getSigner());
        marketplace = new ethers.Contract(marketplace_address, FlowInsightMarketplace.abi, window.web3Provider.getSigner());
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
async function createNFT(to, name, picURL, desc, property, key, privURL) {
    try {
        let tx = await contract.createNFT(to, name, picURL, desc, property, key, privURL);
        tx = await tx.wait();

        let eventFilter = contract.filters.NFTCreated();
        let events = await contract.queryFilter(eventFilter, tx.blockNumber, "latest");

        return { status: "success", response: {id: events[0].args[0].toString(), owner: events[0].args[1]}};
    } catch (e) {
        console.error(e);
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

// TODO (Xufei) 把上面 createNFT 监听部分和这里的整合成一份代码
// 监听事件
async function Listen(contract) {
    contract.on("NFTCreated", (_FlowInsightId, _to) => {
        console.log("id:", _FlowInsightId.toString(), "; to:", _to);
        let id = _FlowInsightId.toString();
        let owner = _to;
        console.log("1",id, owner);
        return {id: id, owner: owner};
    });
}

async function approveNFT() {
    try {
        let tx = await contract.setApprovalForAll(marketplace_address, true);
        tx = await tx.wait();

        let eventFilter = contract.filters.ApprovalForAll();
        let events = await contract.queryFilter(eventFilter, tx.blockNumber, "latest");

        return { status: "success", response: {owner: events[0].args[0], operator: events[0].args[1], state: events[0].args[2]}};
    } catch (e) {
        console.error(e);
        return { status: "failed", response: null }
    }
}
async function registerNFTSale(nftId) {
    try {
        console.log("000");
        let tx = await marketplace.registerNFTSale(Number(nftId));
        tx = await tx.wait();
        console.log("111");
        let eventFilter = contract.filters.Approval();
        let events = await contract.queryFilter(eventFilter, tx.blockNumber, "latest");
        console.log("222");
        console.log("event:", events);
        return { status: "success", response: {owner: events[0].args[0], approved: events[0].args[1], nftId: events[0].args[2]}};
    } catch (e) {
        console.error(e);
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
    removeMinter,
    approveNFT,
    registerNFTSale,
}