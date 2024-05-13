import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Initial({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgInitial}
        source={require("../../assets/img/initial.png")}
      />

      <View style={styles.caixaTitulo}>
        <Text style={styles.Titulo}>
          O Melhor <Text style={styles.tituloDestaque}>Café</Text>{" "}
        </Text>
        <Text style={styles.Titulo}>na cidade!</Text>
      </View>
      <View style={styles.caixaBotoes}>
        <TouchableOpacity style={styles.btnCadastro}>
          {" "}
          Cadastrar
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnEntrar}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          Entrar
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgInitial: {
    width: 431,
    height: 412,
  },
  caixaTitulo: {
    alignItems: "center",
    padding: 15,
  },
  Titulo: {
    fontSize: 30,
  },
  tituloDestaque: {
    color: "#B98875",
    fontWeight: "bold",
  },
  caixaBotoes: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 30,
    paddingHorizontal: 35,
  },
  btnCadastro: {
    backgroundColor: "#B98875",
    borderRadius: 24,
    color: "white",
    width: 135,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  btnEntrar: {
    width: 135,
    height: 45,
    borderRadius: 24,
    borderColor: "#B98875",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    color: "#B98875",
    fontSize: 20,
  },
});
