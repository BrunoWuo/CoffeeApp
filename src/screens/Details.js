import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";

export default function Details({ route }) {
  const { escolha } = route.params;
  return (
    <View style={styles.container}>
     
        <View style={styles.container1}>
        <ImageBackground
        source={require("../../assets/img/fundo.png")}
        style={styles.fundo}
      >
          <View style={styles.titfle}>
            <TouchableOpacity onPress={() => navigation.navigate("goBack")}>
              <Image
                style={styles.flecha}
                source={require("../../assets/img/flecha2.png")}
              />
            </TouchableOpacity>
            <Text style={styles.titulo}> {escolha.titulo} </Text>
          </View>
          <View style={styles.caixaproduto}>
            <Image source={{ uri: escolha.imagem }} style={styles.produto} />
          </View>
          </ImageBackground>
        </View>
        <View style={styles.container2}>
          <View style={styles.caixainfo}>
            <Text style={styles.nomeprod}>{escolha.titulo}</Text>
            <Text style={styles.valorprod}>R$ {escolha.valor}</Text>
          </View>
          <View style={styles.caixatamanho}>
            <Text style={styles.tittam}>Tamanhos</Text>
            <View style={styles.fototam}>
              <Image
                style={styles.produtot}
                source={require("../../assets/img/tam1.png")}
              />
              <Image
                style={styles.produtot}
                source={require("../../assets/img/tam2.png")}
              />
              <Image
                style={styles.produtot}
                source={require("../../assets/img/tam3.png")}
              />
            </View>
          </View>
          <View style={styles.caixabotao}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.textbtn}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 0,
  },
  container1: {
    flex: 1,
    // backgroundColor: "red",
    
  },
  container2: {
    flex: 1,
    backgroundColor: "#FFF",
    
    
  },
  fundo: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
    width:"auto",
    height:"auto"
  },

  titfle: {
    
    flexDirection: "row",
    justifyContent: "center",
  },
  caixaTitulo: {
    paddingTop: 25,
    paddingStart: 15,
  },
  titulo: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "700",
  },
  flecha: {
    height: 26,
    width: 26,
    resizeMode: "contain",
  },
  ImageBackground: {
    flex: 1,
  },
  caixaproduto: {
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  produto: {
    width: 65,
    height: 65,
    resizeMode: "contain",
  },
  caixainfo: {
    alignItems: "flex-end",
    padding: 15,
  },
  nomeprod: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "500",
  },
  valorprod: {
    fontSize: 25,
    color: "#B98875",
    fontWeight: "700",
  },
  fototam: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  produtot: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  tittam: {
    fontSize: 20,
    padding: 20,
  },
  caixabotao: {
    alignItems: "center",
    marginVertical:10
  },
  btn: {
    backgroundColor: "#B98875",
    borderRadius: 41,
    color: "white",
    width: 200,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
  },
  textbtn: {
    fontSize: 15,
    color: "white",
    fontWeight: "500",
  },
});
