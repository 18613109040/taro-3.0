import Taro from '@tarojs/taro';
import { baseUrl, noConsole } from '../config';
type OptionsProps = {
  method?: any,
  data?: object,
  url?: string,
  header?: object,

}
export default (options:OptionsProps = { method: 'GET', data: {}, url: "", header: {} }) => {
  if (!noConsole) {
    console.log(
      `${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(
        options.data
      )}`
    );
  }
  return Taro.request({
    url: baseUrl + options.url,
    data: {
      ...options.data,
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'Cookie': Taro.getStorageSync('cookie'),
      'X-Requested-With': 'XMLHttpRequest',
      ...options.header
    },
    method: options.method.toUpperCase(),
  }).then(res => {
    const { statusCode, data, header } = res;
    const cookie = header["Set-Cookie"];
    if (cookie != null) {
      Taro.setStorageSync('cookie', cookie)
    }
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(
          `${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`,
          res.data
        );
      }
      return data;
    } else {
      Taro.showToast({
        title: '网络请求错误',
        icon: 'none',
        mask: true,
      });
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  });
};
