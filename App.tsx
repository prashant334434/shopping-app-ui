import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigators from './src/navigator/RootNavigators'

const App = () => {
  return (
    
     <NavigationContainer>
      <StatusBar />
      
      <RootNavigators/>
     </NavigationContainer>
   
  )
}

export default App

const styles = StyleSheet.create({})