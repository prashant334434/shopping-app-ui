import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { NavigatorScreenParams } from '@react-navigation/native';
import TabsNavigators, { TabStackPramsList } from './TabsNavigators';

export type RootStackPramsList ={
    TabStack:NavigatorScreenParams<TabStackPramsList>;
    Details:undefined;
}

const RootStack =createNativeStackNavigator<RootStackPramsList>()

const RootNavigators = () => {
  return (
  <RootStack.Navigator>
    <RootStack.Screen name='TabStack' component={TabsNavigators} options={{
      headerShown: false
    }}/>
    <RootStack.Screen name='Details' component={DetailsScreen}/>
  </RootStack.Navigator>
  )
}

export default RootNavigators