import { fromJS } from 'immutable';
import { nuclearName } from './service'

type InitStateProps = {

}
const initState:InitStateProps = {
 

}
export default {
  namespace: 'nuclearName',
  state: fromJS(initState).toJS(),

  effects: {
    *getNuclearName({payload}, { call, put }) {
      const res = yield call(nuclearName,payload)
      console.dir(res)
      return res;
    },
  },

  reducers: {

  },
};
