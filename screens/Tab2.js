import React from 'react';
import { View, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';


Tab2 = () => {

  const isFocused = useIsFocused();

  console.log(isFocused);

  return <View >
  <Text>Tab 2</Text>
</View>

}



export default Tab2;