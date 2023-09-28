import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'

 
const AVATAR_URL ="https://www.realmenrealstyle.com/wp-content/uploads/2023/03/The-Side-Part.jpg"

const HomeScreen = () => {
  const {colors}= useTheme()
  return (
    <ScrollView>
      <SafeAreaView>
       <View
       style={{
        paddingHorizontal:24,
        paddingVertical:24,
        flexDirection:'row',
        alignItems: 'center',
        gap:8,
       }}
       >
        <Image
        source={{
          uri: AVATAR_URL,
        }}
         style={{width:52 , aspectRatio:1 , borderRadius:52}}
         resizeMode="cover"
         />
         <View style={{flex:1}}>
          <Text
          style={{fontSize:18 ,fontWeight:700 , marginBottom:8 ,color:colors.text}}
          numberOfLines={1}>Hi ,James 👋🏻</Text>
          <Text style={{color:colors.text , opacity:0.5 ,}}
          numberOfLines={1}>Discover Fashion that suits your style</Text>
         </View>
       </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default HomeScreen