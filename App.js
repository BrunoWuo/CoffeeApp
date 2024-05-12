import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/routes/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
