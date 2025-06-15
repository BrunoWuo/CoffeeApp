import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Initial({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgInitial}
        source={require("../../assets/img/initial.png")}
      />

      <View style={styles.txtTitulo}>
        <Text style={styles.txtMelhor}>O Melhor</Text>
        <Text style={styles.txtCafe}> Café</Text>
        <Text style={styles.txtMelhor}> na cidade!</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnCadastrar}>
          <Text style={styles.txtCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnEntrar}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          <Text style={styles.txtEntrar}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "Center",
  },
  imgInitial: {
    width: 431,
    height: 412,
  },
  txtTitulo: {
    alignItems: "center",
  },
  txtMelhor: {
    color: "#000000",
    fontSize: 32,
  },
  txtCafe: {
    fontWeight: "700",
    fontSize: 32,
    color: "#B98875",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btnCadastrar: {
    borderRadius: 30,
    backgroundColor: "#B98875",
    borderStyle: "solid",
    borderColor: "#B98875",
    borderWidth: 2,
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  txtCadastrar: {
    color: "#fff",
    fontSize: 22,
  },
  btnEntrar: {
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "#B98875",
    borderWidth: 2,
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  txtEntrar: {
    color: "#B98875",
    fontSize: 22,
  },
});
