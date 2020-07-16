import axios from 'axios';

//axios.defaults.baseURL = '/api'
axios.defaults.timeout = 1000 * 60 * 2; //超时时间
axios.defaults.withCredentials = true; //让ajax携带cookie
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data;charset=utf-8';

// 整理数据
axios.defaults.transformRequest = function (data) {
  // Do whatever you want to transform the data
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
};

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default axios;







