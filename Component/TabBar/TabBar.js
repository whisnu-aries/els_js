import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import TabBarIcon from "./TabBarIcon";

import { Colors } from "../../Constants/Colors";

import HomeScreen from "../../Screen/Home/Index";

const Tab = createBottomTabNavigator();

const Bible = () => <Text>Bible</Text>;
const Event = () => <Text>Event</Text>;

const RenderTabBarIcon = (routeName, focused, color, size) => {
  return (
    <TabBarIcon route={routeName} focused={focused} color={color} size={size} />
  );
};

const GetScreenOptions = (route) => {
  return {
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) =>
      RenderTabBarIcon(route.name, focused, color, size),
    tabBarActiveTintColor: Colors.primary,
    tabBarInactiveTintColor: Colors.accent,
  };
};

const TabBar = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => GetScreenOptions(route)}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bible" component={Bible} />
      <Tab.Screen name="Event" component={Event} />
    </Tab.Navigator>
  );
};

export default TabBar;
