import Taro from '@tarojs/taro';
import { fromJS } from 'immutable';
const systemInfo = Taro.getSystemInfoSync();
type InitStateProps = {
  systemInfo: object;
}
const initState:InitStateProps = {
  systemInfo: systemInfo
}
export default {
  namespace: 'common',
  state: fromJS(initState).toJS(),

  effects: {
    
  },

  reducers: {
 
  },
};
