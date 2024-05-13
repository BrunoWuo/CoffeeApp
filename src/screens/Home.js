import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Escolha o Seu Café</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Initial")}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
