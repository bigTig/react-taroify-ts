const env: string = process.env.NODE_ENV || 'development';

const baseConfig = {
  appId: 'wxc1f26b016e71925a',
  scope: 'zmn-rx-oms-wx-api',
};

const config: any = {
  development: {
    ...baseConfig,
    baseUrl: 'https://test.sdc.sinohealth.com/dev/hccm',
  },
  sit: {
    ...baseConfig,
    baseUrl: 'https://test.sdc.sinohealth.com/sit/hccm',
  },
  production: {
    ...baseConfig,
    baseUrl: 'https://demo.sdc.sinohealth.com/hccm',
  },
};

export const appId = config[env].appId;
export const scope = config[env].scope;
export const baseUrl = config[env].baseUrl;

export default {
  ...config[env],
};
