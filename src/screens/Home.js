import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import CardCaffee from "../components/CardCaffee";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.caixaTitulo}>
        <Text style={styles.Titulo}> Escolha o seu Café </Text>
      </View>
      <View>
        <CardCaffee />
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

});
