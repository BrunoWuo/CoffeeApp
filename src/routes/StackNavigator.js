import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigator";
import Initial from "../screens/Initial";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Initial" component={Initial} />
      
    </Stack.Navigator>
  );
}
