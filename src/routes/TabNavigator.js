import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Initial from "../screens/Initial"
import Home from "../screens/Home"
import Details from "../screens/Details"

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Initial" component={Initial} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
  );
}