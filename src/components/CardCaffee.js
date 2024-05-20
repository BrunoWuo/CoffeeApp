import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

export default function CardCaffee() {
  return (
    <TouchableOpacity style={styles.caixas}>
      <View style={styles.desc}>
        <Image
          source={require("../../assets/img/espresso.png")}
          style={styles.fotos}
        />
        <Text style={styles.text}>Espresso</Text>
      </View>
      <View>
        <Image
          source={require("../../assets/img/flecha.png")}
          style={styles.flecha}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  caixas: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 25,
  },
  desc: {
    fontSize: 19,
    flexDirection: "row",
    alignItems: "center",
  },
  fotos: {
    height: 46,
    width: 46,
    resizeMode: "contain",
  },
  flecha: {
    height: 26,
    width: 26,
  },
  text: {
    fontSize: 22,
    marginLeft: 20,
    marginTop: 15,
  },
});
