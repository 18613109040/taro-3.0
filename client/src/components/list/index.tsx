import React from 'react'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import "./index.scss"
type ListProps = {
  title: string;
  content: string;
  arrow?: boolean;
}
const List: React.FC<ListProps> = React.memo((props:ListProps) => {
  const { title,content, arrow=true } = props;
  return (
    <View className="list">
      <View className="title"><Text>{title}</Text></View>
      <View className="content"><Text>{content}</Text></View>
      {arrow && <View className="icon"><AtIcon value='chevron-right' size='26' /></View>}
    </View>
  );
})

export default List;