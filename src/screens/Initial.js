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
        <Text style={styles.txtMelhor}>O Melhor <Text style={styles.txtCafe}> Café</Text></Text>
        
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
    backgroundColor:"#FFF",
    justifyContent: "space-around",
    
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
    justifyContent:"space-evenly"    ,
    
  },
  btnCadastrar: {
    borderRadius: 24,
    backgroundColor: "#B98875",
    borderStyle: "solid",
    borderColor: "#B98875",
    borderWidth: 2,
    paddingHorizontal: 40,
    paddingVertical: 10,

    
  },
  txtCadastrar: {
    color: "#fff",
    fontSize: 22,
  },
  btnEntrar: {
    borderRadius: 24,
    borderStyle: "solid",
    borderColor: "#B98875",
    borderWidth: 2,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  txtEntrar: {
    color: "#B98875",
    fontSize: 22,
  },
});
