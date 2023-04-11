import TabBar from '@/components/TabBar';
import { View } from '@tarojs/components';
import React from 'react';
import styles from './index.less';

/**
 * 个人中心
 * @returns
 */
const PersonalCenter: React.FC = () => {
  return (
    <View className={styles['personal-center']}>
      <TabBar path='/pages/personalCenter/index' />
    </View>
  );
};

export default PersonalCenter;
