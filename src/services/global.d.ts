interface SourceTypeProps {
  /** 从相册选图 */
  album;
  /** 使用相机 */
  camera;
  /** 使用前置摄像头(仅H5纯浏览器使用) */
  user;
  /** 使用后置摄像头(仅H5纯浏览器) */
  environment;
}

interface FileProps {
  url: string; // 上传成功的url
  status?: 'success' | 'fail';
  path: string; // 临时路径
  size: number; // 大小
  fileName: string;
}
