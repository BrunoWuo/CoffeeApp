import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.caixaTitulo}>
          <Text style={styles.Titulo}> Escolha o seu Café </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.caixas}>
            <View style={styles.desc}>
              <Image
                source={require("../../assets/img/espresso.png")}
                style={styles.fotos}
              />
              <Text style={styles.text}>Espresso</Text>
            </View>
            <View>
              <Image source={require("../../assets/img/flecha.png")} style={styles.flecha} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.caixas}>
            <View style={styles.desc}>
              <Image
                source={require("../../assets/img/cappuccino.png")}
                style={styles.fotos}
              />
              <Text style={styles.text}>Cappuccino</Text>
            </View>
            <View>
            <Image source={require("../../assets/img/flecha.png")} style={styles.flecha} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.caixas}>
            <View style={styles.desc}>
              <Image
                source={require("../../assets/img/macciato.png")}
                style={styles.fotos}
              />
              <Text style={styles.text}>Macchiato</Text>
            </View>
            <View>
            <Image source={require("../../assets/img/flecha.png")} style={styles.flecha} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.caixas}>
            <View style={styles.desc}>
              <Image
                source={require("../../assets/img/mocha.png")}
                style={styles.fotos}
              />
              <Text style={styles.text}>Mocha</Text>
            </View>
            <View>
            <Image source={require("../../assets/img/flecha.png")} style={styles.flecha} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.caixas}>
            <View style={styles.desc}>
              <Image
                source={require("../../assets/img/latte.png")}
                style={styles.fotos}
              />
              <Text style={styles.text}>Latte</Text>
            </View>
            <View>
            <Image source={require("../../assets/img/flecha.png")} style={styles.flecha} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF4EE",
    padding: 0,
  },
  caixaTitulo: {
    paddingTop: 25,
    paddingStart: 15,
  },
  Titulo: {
    color: "#B98875",
    fontSize: 28,
    fontWeight: "700",
  },
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
    height:46,
    width: 46,
    resizeMode: 'contain'
    
  },
  flecha: {
    height:26,
    width: 26,
  },
  text: {
    fontSize: 22,
    marginLeft: 20,
    marginTop: 15,
  },
  caixaf: {
    backgroundColor: "white",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    borderStartEndRadius: 30,
    borderTopStartRadius: 30,
    alignItems: "center",
  },
  caixasf: {
    // padding:18
  },
  ftfoo: {
    width: 25,
  },
  ftfoo2: {
    width: 19,
  },
});
