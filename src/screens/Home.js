import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  
} from "react-native";
import CardCaffee from "../components/CardCaffee";

import tiposCafes from "../data/dbcafe";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
<SafeAreaView>
      <View style={styles.caixaTitulo}>
        <Text style={styles.Titulo}> Escolha o seu Café </Text>
      </View>
      <View>
        <FlatList
          data={tiposCafes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { escolha: item })}
            >
              <CardCaffee escolha={item} />
            </TouchableOpacity>
          )}
        />
      </View>
      </SafeAreaView>
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
