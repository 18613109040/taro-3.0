import React, { Component } from 'react'
import { Provider } from 'react-redux'
import dva from './libs/dva';
import Taro from '@tarojs/taro';
import models from './models';

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

import './app.scss'

class App extends Component {
  componentDidMount () {
    if (!Taro.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      if (process.env.TARO_ENV === 'weapp') {
        Taro.cloud.init({
          traceUser: true,

        })
      }
    }
      
    
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
