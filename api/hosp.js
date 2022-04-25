import request from "@/utils/request";

const api_name = `/api/hosp/hospital`
export default {
  //查询医院列表
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/findHospList/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  //根据医院名称做模糊查询
  getByHosname(hosname){
    return request({
      url:`${api_name}/findByHospName/${hosname}`,
      method:'get'
    })
  },
  //根据医院编号查询详情
  show(hoscode){
    return request({
      url:`${api_name}/findHospDetail/${hoscode}`,
      method:'get'
    })
  },
  //根据医院编号查询科室信息
  findDepartment(hoscode){
    return request({
      url:`${api_name}/department/${hoscode}`,
      method:'get'
    })
  }
}
