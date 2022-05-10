import http from './public'
/**
 * 此处前端会发送给其同名的代理服务器，与当前端口相同，随后会由代理服务器与真实ip和端口交互
 * 故此处请求无需写前缀服务器信息
 */
const baseUrl = "/api"
/**
 * 查询nft信息
 * @param {accountAddr,metadataHash} params 
 * @returns {data:{metadataHash,modelData,params},error_info,message_code}
 */
export const querymodel = (params) => {
    return http.fetchPost(baseUrl + '/messages/querymodel', params)
}


/**
 * 生成nft，向后端获取hash
 * @param {"accountAddr":"0x123",
 * "metaData": 
 * {"name":"Apex","desc":"the measure model of Apex",
 * "displayUrl":"http://example.com",
 * "metadataHash":""
 * },
 * "secretData":
 * {"modelData":"token-A,token-B","params":"param-1,param-2"}
 * }' params 
 * @returns 
 */
export const mintnft = (params) => {
    return http.fetchPost(baseUrl + '/messages/mintnft', params)
}

/**
 * querymetadata请求中accountAddr非必填，
 * 为空则按分页返回所有NFT的metadata，
 * 不为空则按分页返回指定用户的NFT metadata
 * @param {accountAddr,begin,end} params  
 * @returns 
 */
export const querymetadata = (params) => {
    return http.fetchPost(baseUrl + '/messages/querymetadata', params)
}