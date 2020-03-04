import Taro from "@tarojs/taro";
import { fromJS } from "immutable";
const systemInfo = Taro.getSystemInfoSync();
type ISearchQuery = {
  city: string;
  word: string;
  industry: string;
  companyType: string;
  limit: boolean;
  serialid: string;
};
type InitStateProps = {
  systemInfo: object,
  searchQuery: ISearchQuery
};
const initState: InitStateProps = {
  systemInfo: systemInfo,
  searchQuery: {}
};
export default {
  namespace: "common",
  state: fromJS(initState).toJS(),

  effects: {},

  reducers: {}
};
