/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

var TopListView = React.createClass({
    getDefaultProps(){
       return{
           dataArr: []
       }
    },

    getInitialState(){
        // 创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});

       return{
          dataSource: ds.cloneWithRows(this.props.dataArr)
       }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    },

    // 具体的cell
    renderRow(rowdata){
        return(
            <View>
                <Image source={{uri: rowdata.image}} style={{width:52, height:52}}/>
                <Text>{rowdata.title}</Text>
            </View>
        );
    }
});


const styles = StyleSheet.create({

});

// 输出组件类
module.exports = TopListView;
