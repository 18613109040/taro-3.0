import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Config } from '@tarojs/taro'
import { connect } from 'react-redux';

import { AtButton } from 'taro-ui'


import './index.scss'
type IState = {
}
type IProps= {
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

  componentDidShow() { }

  componentDidHide() { }

  render() {
    console.dir(this.props.systemInfo)
    return (
      <View className='index'>
        <View><Text>hello world</Text></View>
        <AtButton type='primary'>nihaa</AtButton>
      </View>
    )
  }
}


export default Index;
