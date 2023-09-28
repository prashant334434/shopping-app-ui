import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Feather';

export type TabStackPramsList={
    Home:undefined;
    Cart:undefined;
    Payment:undefined;
    Profile:undefined;
}


const TabStack=createBottomTabNavigator<TabStackPramsList>();

const TabsNavigators = () => {
  return (
    <TabStack.Navigator screenOptions={{
        tabBarShowLabel:false
    }}>
    <TabStack.Screen name='Home' component={HomeScreen}
    options={{
        headerShown:false,
        tabBarIcon(props) {
            return<Icon
            name="home"
           
            
            {...props}
          />;
        },
      
    }}/>
    <TabStack.Screen name='Cart' component={Example}/>
    <TabStack.Screen name='Payment' component={Example}/>
    <TabStack.Screen name='Profile' component={Example}/>
    </TabStack.Navigator>
  )
}

export default TabsNavigators



const Example=()=>{
    return(
        <View>
            <Text>Example</Text>
        </View>
    )
}