import TabBar from '@/components/TabBar';
import { View } from '@tarojs/components';
import React from 'react';
import styles from './index.less';

/**
 * 首页
 * @returns
 */
const Index: React.FC = () => {
  return (
    <View className={styles['']}>
      <TabBar path='/pages/index/index' />
    </View>
  );
};

export default Index;
