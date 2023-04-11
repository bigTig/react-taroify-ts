import { View } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import React, { useState } from 'react';
import styles from './index.less';

type NavigationBarProps = {
  back?: boolean;
  onBack?: () => void;
  title?: string;
};

/**
 * 自定义 NavigationBar
 * @returns
 */
const NavigationBar: React.FC<NavigationBarProps> = (props) => {
  const { back = false, onBack, title } = props;

  const [navBarHeight, setNavBarHeight] = useState(0); // 导航栏高度
  const [menuWidth, setMenuWidth] = useState(0); // 除去左右的间距的宽度
  const [menuRight, setMenuRight] = useState(0); // 胶囊距右方间距（方保持左、右间距一致）
  const [menuTop, setmenuTop] = useState(0); // 胶囊距底部间距（保持底部间距一致）
  const [menuHeight, setmenuHeight] = useState(0); // 胶囊高度（自定义内容可与胶囊高度保证一致）

  useDidShow(() => {
    // 获取系统信息
    const systemInfo = Taro.getSystemInfoSync() as any;
    // 胶囊按钮位置信息
    const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();
    // 导航栏高度 = 状态栏高度 + 44
    setNavBarHeight(systemInfo.statusBarHeight + 44);
    setMenuRight(systemInfo.screenWidth - menuButtonInfo.right);
    setMenuWidth(systemInfo.screenWidth - (systemInfo.screenWidth - menuButtonInfo.right) * 2);
    setmenuTop(menuButtonInfo.top);
    setmenuHeight(menuButtonInfo.height);
  });

  return (
    <View className={styles['navigation-bar']} style={{ height: navBarHeight }}>
      {back ? (
        <View
          className={styles['navigation-back']}
          style={{ height: menuHeight, minHeight: menuHeight, top: menuTop }}
          onClick={() => onBack && onBack()}
        />
      ) : null}
      {/* title  */}
      {title ? (
        <View
          className={styles['navigation-title']}
          style={{
            width: menuWidth,
            height: menuHeight,
            minHeight: menuHeight,
            lineHeight: `${menuHeight}px`,
            left: menuRight,
            top: menuTop,
          }}
        >
          {title}
        </View>
      ) : null}
    </View>
  );
};

export default NavigationBar;
