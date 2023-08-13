import { httpDoingSomething } from '@/api/user';
import TabBar from '@/components/TabBar';
import { View } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import styles from './index.less';

/**
 * 首页
 * @returns
 */
const Index: React.FC = () => {
  const [doParams, setDoParams] = useState<DoType.DoingReq>({ id: 0 });

  const httpDoingSomethingReq = async () => {
    const res = await httpDoingSomething(doParams);
    console.log(res);
  };

  useEffect(() => {
    httpDoingSomethingReq();
  }, []);

  return (
    <View className={styles['']}>
      <TabBar path='/pages/index/index' />
    </View>
  );
};

export default Index;
