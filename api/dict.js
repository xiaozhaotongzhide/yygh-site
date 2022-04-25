import request from "@/utils/request";

const api_name = `/admin/cmn/dict`
export default {
  //根据dictCode获取下级结点
  findByDictCode(dictCode) {
    return request({
      url: `${api_name}/findDictCode/${dictCode}`,
      method: 'get',
    })
  },
  //根据医院名称做模糊查询
  findChildData(id){
    return request({
      url:`${api_name}/findChildData/{id}`,
      method:'get'
    })
  }
}
