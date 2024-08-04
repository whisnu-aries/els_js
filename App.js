import { SafeAreaView, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { getLocales } from "expo-localization";

import { styles } from "./App_style";
import i18n from "./src/Localizations/i18n";

import Dashboard from "./src/Screens/Dashboard/Index";
import { Colors } from "./src/Constants/Colors";

function App() {
  useEffect(() => {
    // Set the initial language based on device locale
    const locale = getLocales()[0].languageCode;
    // const locale = "id";
    i18n.changeLanguage(locale);
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={{ height: insets.top, backgroundColor: Colors.primary }}>
        <StatusBar style="dark" />
      </View>
      <SafeAreaView
        style={[styles.safeAreaContainer, { paddingTop: insets.top }]}
      >
        <Dashboard />
      </SafeAreaView>
    </View>
  );
}

export default function Root() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}
