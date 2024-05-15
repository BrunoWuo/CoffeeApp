import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Initial({navigation}) {
  return (
    <View>
      <Text>Initial</Text>
      <Button title="clique aqui" onPress={()=>navigation.navigate("TabNavigator")}/>
    </View>
  )
}
