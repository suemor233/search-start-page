import request from './request'

// 获取百度搜索提示
// export const getBaiduTip = (params) => request.get('/baidu', { params })

export const getBaiduTip = (params:any) =>
  request.jsonp('https://www.baidu.com/sugrec', params)

export const getBingTip = (params:any) =>
  request.get('https://www.baidu.com/sugrec', { params })

// 无梯子无法使用暂时不开发
// const getGoogleTip = (params) => {
//   request.get('https://www.baidu.com/sugrec', { params })
// }
