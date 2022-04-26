import {and} from "@vueuse/core";

export const jsonp = (url:any, data:any ) => {
  // jsonp原理就是动态创建script标签使用.src属性发送请求.但缺点就是频繁的创建与删除script标签会引起重绘与回流,对性能有一点的影响
  if (!url) throw new Error('url is necessary')
  const callback:any = 'CALLBACK' + Math.random().toString().substr(9, 18)
  const JSONP = document.createElement('script')
  JSONP.setAttribute('type', 'text/javascript')

  const headEle = document.getElementsByTagName('head')[0]

  let ret = ''
  if (data) {
    if (typeof data === 'string') ret = '&' + data
    else if (typeof data === 'object') {
      for (const key in data)
        ret += '&' + key + '=' + encodeURIComponent(data[key])
    }
    ret += '&_time=' + Date.now()
  }
  JSONP.src = `${url}?callback=${callback}${ret}`
  return new Promise((resolve, reject) => {
    // @ts-ignore
    window[callback] = (r) => {
      resolve(r)
      headEle.removeChild(JSONP)
      delete window[callback]
    }
    headEle.appendChild(JSONP)
  })
}
