import { View, Text  } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import React from "react";

export default function Details({ route }) {
  const { escolha } = route.params;
  return (
    <View>
       <Text style={{ fontSize: 24, fontWeight: "bold" }}>{escolha.titulo}</Text>
    </View>
  );
}
