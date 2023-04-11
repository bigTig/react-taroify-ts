import Taro from '@tarojs/taro';
import { baseUrl } from '@/config';
import showToast from './showToast';

/**
 * 请求成功的接收
 * @param response 成功的响应体
 * @param config 配置
 * @returns
 */
const ResolveSuccess = (response) => {
  const { data, statusCode } = response;
  return new Promise((resolve, reject) => {
    if (statusCode === 200) {
      resolve(data);
    } else {
      reject(response);
    }
  });
};

/**
 * 请求错误
 * @param error 错误响应体
 */
const RejectError = (error) => {
  const { statusCode, status } = error;

  if (status === 401 || statusCode === 401) {
    showToast({ title: '登录过期, 请重新登录' });

    const totalPages = Taro.getCurrentPages();
    const filPath = totalPages.filter((el) => el.route === 'pages/userPackage/pages/login/index');
    if (!filPath.length) {
      console.log('跳转登录页');
    }
  }
};

const BeforeRequest = (chain: { requestParams: any; proceed: any }) => {
  const { requestParams, proceed } = chain;
  // const { method, data, url } = requestParams;

  return proceed(requestParams)
    .then((res) => {
      return ResolveSuccess(res);
    })
    .catch((err) => {
      return RejectError(err);
    });
};

Taro.addInterceptor(BeforeRequest);

/**
 * Request 实体
 * @param options 配置项
 * @param method 请求方式
 * @returns
 */
const Requset = <T, U>(options, method = 'GET') => {
  const { url, header, ...otherConfig } = options;

  const baseOptions = {
    url: url.indexOf('http') !== -1 ? url : baseUrl + url,
    method,
    header: {
      'content-type': 'application/json', // 默认值
      ...header,
    },
    ...otherConfig,
  };

  return Taro.request<T, U>(baseOptions);
};

Requset.get = <T, U>(url: string, data = {}, config = {}) => Requset<T, U>({ url, data, ...config });

Requset.post = <T, U>(url: string, data = {}, config = {}) => Requset<T, U>({ url, data, ...config }, 'POST');

Requset.delete = <T, U>(url: string, data = {}, config = {}) => Requset<T, U>({ url, data, ...config }, 'DELETE');

Requset.put = <T, U>(url: string, data = {}, config = {}) => Requset<T, U>({ url, data, ...config }, 'PUT');

export default Requset;
