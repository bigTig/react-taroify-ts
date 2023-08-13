import Requset from '@/core/request';

/**
 * httpDoingSomething
 * @param params
 * @returns
 */
export const httpDoingSomething = (params: DoType.DoingReq) =>
  Requset.post<DefaultResult<string>, any>('/something/doing', params, {
    isReturnAllData: true,
  });

export default { httpDoingSomething };
