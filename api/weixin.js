import request from '@/utils/request'

const api_name = `/api/ucenter/wx`
const weixin_api_name = `/api/order/weixin`
export default {
  //取消预约
  cancelOrder(orderId) {
    return request({
      url: `/api/order/weixin/auth/cancelOrder/${orderId}`,
      method: 'get'
    })
  },
  //查询订单状态
  queryPayStatus(orderId) {
    return request({
      url: `${weixin_api_name}/queryPayStatus/${orderId}`,
      method: 'get'
    })
  },
  //生成微信支付的二维码
  createNative(orderId) {
    return request({
      url: `${weixin_api_name}/createNative/${orderId}`,
      method: `get`,
    })
  },
  getLoginParam() {
    return request({
      url: `${api_name}/getLoginParam`,
      method: `get`,
    })
  }
}
