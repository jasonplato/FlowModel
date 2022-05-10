# Must Have
1. 创造经济模型并测试，包括暂停调试，提前终止等，还需明确显示当前测算的时间进程
2. Mint 经济模型 NFT（不含报告）
3. 在市场上查看别人的经济模型（只有画布图片）
4. 在个人主页打开自己持有的经济模型（结构 + 参数 + 数据）

# 接口定义 前端 -> 链端 前端 -> 后端

## 前端 -> 链端
1. 创建 NFT 
```js
// return: nftId 调用链端 mint 函数获取
async function createNFT(sig, name, displayURL, desc, externalLink) {}
```
<!-- 2. 查询指定 NFT 详情
```js
// return: name
//         displayURl
//         desc
//         externalLink
async function getNftMetadata(nftId) {}
``` -->
<!-- 3. 查询 address 下的所有 NFT
```js
// return: [nftId] 包含 address 下所有 NFT ID 的数组
async function getAllNFT(address) {}
``` -->

## 前端 -> 后端
1. 获取模型 NFT 的结构 JSON 数据
```js
// return: JSON-string nftId对应模型结构的 JSON 数据 
async function getModel(nftId) {}
```
2. 获取模型 NFT 的测算参数
```js
// return: JSON-string nftId对应模型的输入参数
async function getModelParams(nftId) {}
```
3. 获取模型 NFT 的测算历史数据
```js
// return: JSON-string nftId对应模型的测算历史数据
async function getModelSimData(nftId) {}
```
4. 保存模型 NFT 的实质数据
```js
// return: bool
async function saveModel(nftId, architectureString, paramString, SimDataString) {}
```
5. 保存模型 NFT 的 metadata
```js
// return: bool
async function saveModelMetadata(nftId, metadataString) {}
```
6. 获取指定模型 NFT 的 metadata
```js
// return: name
//         displayURl
//         desc
//         externalLink
async function getNftMetadata(nftId) {}
```
7. 查询指定 address 下的所有 NFT
```js
// return: [nftId] 包含 address 下所有 NFT ID 的数组
async function getAllNFT(address) {}
```