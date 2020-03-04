import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { Config } from '@tarojs/taro';
import { connect } from 'react-redux';

import { AtButton, AtList, AtListItem } from 'taro-ui'

import List from '../../components/list'


import './index.scss'
type IState = {
}
type IProps= {
  dispatch: any;
  systemInfo: object;
}

@connect(({ common }) => ({
  systemInfo: common.systemInfo
}))
class Index extends Component<IProps, IState> {
  // config: Config = {
  //   navigationBarTitleText: '首页'
  // }
  constructor(props) {
      super(props)
  }

  componentDidShow() { 
    const { dispatch } = this.props;
    dispatch({
      type: 'nuclearName/getNuclearName',
      payload: {
        city: "天津",
        word: "同仁吧",
        industry: "科技电子",
        companyType: "有限公司",
        limit: true,
        serialid: "30df600c86f74753bc40adde7763ca6c"
      }
    })
    Taro.cloud
      .callFunction({
        name: "login",
        data: {}
      })
      .then(res => {
        console.dir(res)
      })
  }

  componentDidHide() { }

  render() {
    console.dir(this.props.systemInfo)
    return (
      <View className="home">
        <View>

        </View>
        <View>
          <List title="城    市" content="北京" />
        </View>
      </View>
    )
  }
}


export default Index;
