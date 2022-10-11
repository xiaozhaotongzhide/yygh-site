import request from "@/utils/request";

const api_name = `/api/act`
export default {
  //签到
  signTask() {
    return request({
      url: `${api_name}/signTask`,
      method: 'post',
    })
  },
  getList(){
    return request({
      url:`admin/act/list`,
      method:'get'
    })
  }
  ,
  seckill(couponId){
    return request({
      url:`api/act/seckill/${couponId}`,
      method:'post'
    })
  },
  getListByUser(){
    return request({
      url:`api/act/getList`,
      method:'get'
    })
  },
  use(id){
    return request({
      url:`api/act/useCoupon/${id}`,
      method:'get'
    })
  }
}
