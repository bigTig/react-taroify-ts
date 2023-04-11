import Taro from '@tarojs/taro';

const storageKey = {
  accessToken: 'ACCESSTOKEN',
};

/**
 * 获取Token
 * @returns
 */
export const getToken = () => Taro.getStorageSync(storageKey.accessToken);

/**
 * 存储Token
 * @param token
 * @returns
 */
export const setToken = (token: string) => Taro.setStorageSync(storageKey.accessToken, token);

/**
 * 移除Token
 * @param token
 * @returns
 */
export const removeToken = () => Taro.removeStorageSync(storageKey.accessToken);
