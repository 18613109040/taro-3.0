import React, { PureComponent } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIndexes } from 'taro-ui'
import Taro, { Config } from '@tarojs/taro';
import { connect } from 'react-redux';
import cityData from './data'
import './index.scss';

type IState = {
  
}
type IProps = {
  dispatch: any;
  list: Array<any>;
}
class City extends PureComponent<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'order/getTaskCountAction',
    //   payload: {
    //   }
    // })
  }

  // 小程序上拉加载
  onReachBottom() {

  }
  onClick=(item)=>{
    console.dir(item)
  }
  render() {
    return (
      <View className="city-page">
        <AtIndexes
          list={cityData}
          isVibrate={false}
          animation={true}
          onClick={this.onClick}
        >
        </AtIndexes>
      </View>
    );
  }
}

export default City ;
