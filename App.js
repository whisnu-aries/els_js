import { useEffect } from "react";
import { getLocales } from "expo-localization";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import i18n from "./Locales/i18n";

import TabBar from "./Component/TabBar/TabBar";
import EventDetail from "./Screen/Event/Detail/Index";
import AuthenticationScreen from "./Screen/Authentication/Index";

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    // Set the initial language based on device locale
    const locale = getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Registration" component={AuthenticationScreen} />
        <Stack.Screen name="Dashboard" component={TabBar} />
        <Stack.Screen name="EventDetail" component={EventDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
