import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getLocales } from "expo-localization";
import { SafeAreaProvider } from "react-native-safe-area-context";

import i18n from "./src/Locales/i18n";
import { Colors } from "./src/Constants/Colors";

import TabBarIcon from "./src/Components/TabBar/TabBarIcon";

import DashboardScreen from "./src/Pages/Dashboard/Index";
import BibleScreen from "./src/Pages/Bible/Index";
import EventScreen from "./src/Pages/Event/Index";

const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    // Set the initial language based on device locale
    const locale = getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
    // i18n.changeLanguage("id");
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // header: (props) => <Header {...props} />,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabBarIcon
                route={route.name}
                focused={focused}
                color={color}
                size={size}
              />
            );
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.accent,
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Bible" component={BibleScreen} />
        <Tab.Screen name="Event" component={EventScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function Root() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}
