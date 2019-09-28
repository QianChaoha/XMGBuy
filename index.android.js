/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LaunchImage from './Component/Main/XMGLaunchImage';
import {Navigator} from 'react-native-deprecated-custom-components';
/**-------导入外部的组件类---------**/
class XMGBuy extends Component {
    render() {
        return (
            <Navigator
                //启动时加载的路由
                initialRoute={{name:'启动页',component:LaunchImage}}
                //页面之间跳转时候的动画,更多动画看: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
                configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                // 两个参数就是initialRoute方法中传入的两个变量。这样在LaunchImage中就拿到了navigator用来跳转下一页面
                // console.warn(JSON.stringify(route));
                renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
            />
        );
    }
}

AppRegistry.registerComponent('XMGBuy', () => XMGBuy);
