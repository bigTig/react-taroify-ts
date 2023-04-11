/* eslint-disable no-param-reassign */
import Taro from '@tarojs/taro';
import { baseUrl } from '@/config';
import { getToken } from '@/utils/cookies';
import showToast from './showToast';

const UPLOADURL = `${baseUrl}/cs/file/public/upload`;

type chooseImageProps = {
  max?: number; // 最大个数
  total?: number; // 当前总个数
  count?: number;
  sourceType?: Array<keyof SourceTypeProps>;
  size?: number;
  uploadArr?: []; // 传此参数则选择跟上传分开
};

/**
 * 校验选中文件的格式
 * @param fileArr 选中的文件
 * @returns
 */
const validateType = (fileArr: string | any[]) => {
  for (let i = 0; i < fileArr.length; i += 1) {
    const files: FileProps = fileArr[i];
    const path = files.path;
    const filename = path.split('.')[0];
    const formatImage = path.split('.')[path.split('.').length - 1];
    if (formatImage !== 'png' && formatImage !== 'jpg' && formatImage !== 'jpeg') {
      showToast({ title: `${filename}格式不对, 只能上传.png、.jpg、.jpep 格式` });
      return false;
    }
  }
  return true;
};

/**
 * 校验选中文件的大小
 * @param fileArr 选中的文件
 * @returns
 */
const validateSize = (fileArr: string | any[], size: number) => {
  for (let i = 0; i < fileArr.length; i += 1) {
    const files: FileProps = fileArr[i];
    const path = files.path;
    const filename = path.split('.')[0];
    const fileSize = files.size;
    if (fileSize > size * 1024 * 1024) {
      showToast({ title: `${filename}超过限制, 图片大小不能超过${size}M！` });
      return false;
    }
  }
  return true;
};

/**
 * 选择图片，支持多张
 * @param props
 * @returns
 */
export const chooseImage = (props?: chooseImageProps) => {
  const {
    count = 1, // 每次的个数
    sourceType = ['album', 'camera'], // 相册，相机
    size = 10, // 文件大小
    max = 1, // 最大个数
    total = 0, // 现有个数
  } = props || {};

  return new Promise((resolve, reject) => {
    try {
      if (total >= max) {
        showToast({ title: `最多可上传${max}张` });
        return;
      }

      Taro.chooseImage({
        count: max - total <= count ? max - total : count,
        sizeType: ['original', 'compressed'],
        sourceType,
        success: async (res: Taro.chooseImage.SuccessCallbackResult) => {
          const typeSuccess = validateType(res.tempFiles);
          if (!typeSuccess) return;

          if (res.tempFiles.length > max) {
            showToast({ title: `最多一次选择${max}张` });
            return;
          }

          const sizeSuccess = validateSize(res.tempFiles, size);
          if (!sizeSuccess) return;
          resolve(res.tempFiles);
        },
        fail: () => {
          console.log('取消了');
          reject();
        },
      });
    } catch (err) {
      console.log(err);
    }
  });
};

/**
 * 上传图片【支持多张】
 * @param props 限制参数
 * @returns
 */
export const uploadFile = async (props?: chooseImageProps) => {
  const uploadFiles: Taro.chooseImage.ImageFile[] = props?.uploadArr
    ? props?.uploadArr
    : ((await chooseImage(props)) as any);

  if (!uploadFiles.length) {
    showToast({ title: '文件列表不能为空' });
    return [];
  }

  const promises = uploadFiles.map((file: any) => {
    return new Promise((resolve, reject) => {
      try {
        Taro.uploadFile({
          url: UPLOADURL,
          header: {
            authorization: getToken(),
            scope: 'sdc-hccm',
            app: 'sdc-hccm-patient',
          },
          filePath: file.path,
          name: 'file',
          success: (res) => {
            if (res.statusCode !== 200) {
              showToast({ title: '上传失败' });
              return;
            }
            const filename = file.path.split('.')[0];
            const data = res.data ? JSON.parse(res.data) : {};
            file.url = data.data;
            file.fileName = filename;
            file.status = 'success';
            resolve(file);
          },
          fail: () => {
            showToast({ title: '上传失败' });
            file.status = 'fail';
            file.url = '';
            resolve(file);
          },
          complete: () => {
            Taro.hideLoading();
          },
        });
      } catch (err) {
        reject(err);
      }
    });
  });

  Taro.showLoading({ title: '正在上传' });
  const list: FileProps[] = (await Promise.all(promises)) as any;
  console.log(list);
  Taro.hideLoading();
  return list;
};

export default { uploadFile, chooseImage };
