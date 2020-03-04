import React, { PureComponent } from 'react'
import Taro, { Config } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { connect } from 'react-redux';
import './index.scss';

type IState = {
  [key: string]: string | boolean | Array<any> | number;
}
type IProps = {
  dispatch: any;
  systemInfo: any;
  common: any;
  taskList: any;
  taskCount: number|string;
}
@connect(({ common, order }) => ({
  systemInfo: common.systemInfo,
  taskList: order.taskList,
  taskCount: common.taskCount
}))
class Home extends PureComponent<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: 'order/getTaskCountAction',
      payload: {
      }
    })
    
  }

  // 小程序上拉加载
  onReachBottom() {

  }
  addApply = () => {
    Taro.navigateTo({
      url: '/pages/prepare/index'
    })
  }
  infoSupplement = () => {
    Taro.switchTab({
      url: '/pages/infoSupplement/index'
    })
  }
  bigControl = () => {
    Taro.switchTab({
      url: '/pages/bigControl/index'
    })
  }
  render() {
    const { taskCount } = this.props;
    return (
      <View className="home-page">
        <View className="card-content" onClick={this.addApply}>
          <View>
            <Image className="left-images" src={require("assets/images/home/sheng.png")} />
          </View>
          <View className="right-content">
            <View className="main-text"><Text>进件申请</Text></View>
            <View className="sub-text"><Text>大数据风控 快速审批</Text></View>
          </View>
        </View>

        <View className="card-content" onClick={this.bigControl}>
          <View>
            <Image className="left-images" src={require("assets/images/home/bulv.png")} />
          </View>
          <View className="right-content">
            <View className="main-text"><Text>信息补录</Text></View>
            <View className="sub-text"><Text>申请通过 填写信息</Text></View>
          </View>
          {/* <View className="badge">{taskCount}</View> */}
        </View>

        <View className="card-content" onClick={this.infoSupplement}>
          <View>
            <Image className="left-images" src={require("assets/images/home/task.png")} />
          </View>
          <View className="right-content">
            <View className="main-text"><Text>待办任务</Text></View>
            <View className="sub-text"><Text>补充进件材料</Text></View>
          </View>
          {taskCount && <View className="badge">{taskCount}</View> }
        </View>
      </View>
    );
  }
}

export default Home ;
