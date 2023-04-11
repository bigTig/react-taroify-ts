import React from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { View } from '@tarojs/components';
import styles from './index.less';

const HomeIcon = () => <View className={`${styles['tab-icon']} iconfont icon-home`} />;
// const TeamIcon = () => <View className={`${styles['tab-icon']} iconfont icon-team`} />;
// const MsgIcon = () => <View className={`${styles['tab-icon']} iconfont icon-message`} />;
const UserIcon = () => <View className={`${styles['tab-icon']} iconfont icon-user`} />;

type TabBarProps = {
  path: string;
};

/**
 * 小程序自定义底部tabbar
 * @returns
 */
const TabBar: React.FC<TabBarProps> = (props) => {
  const { path } = props;

  const routeConfig = [
    {
      pagePath: '/pages/index/index',
      text: '首页',
      icon: <HomeIcon />,
    },
    // {
    //   pagePath: '/pages/teamPackage/pages/healthTeam/index',
    //   text: '团队',
    //   icon: <TeamIcon />,
    // },
    // {
    //   pagePath: '/pages/msgPackage/pages/messageList/index',
    //   text: '消息',
    //   icon: <MsgIcon />,
    // },
    {
      pagePath: '/pages/personalCenter/index',
      text: '我的',
      icon: <UserIcon />,
    },
  ];

  useDidShow(() => {
    Taro.hideHomeButton();
  });

  return (
    <View className={`${styles['tab-bar']} ${styles['tab-fixed']}`}>
      {routeConfig.map((el) => (
        <View
          className={`${styles['tab-bar-item']} ${path === el.pagePath ? styles['tab-item-active'] : ''}`}
          onClick={() => Taro.reLaunch({ url: el.pagePath })}
        >
          {el.icon ? el.icon : <View className={styles['tab-icon']} />}
          <View className={styles['tab-label']}>{el.text}</View>
        </View>
      ))}
      <View className={styles['tab-filter']} />
    </View>
  );
};

export default TabBar;
