import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { getLocales } from "expo-localization";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import i18n from "./src/Locales/i18n";
import { styles } from "./App.Style";
import { Colors } from "./src/Constants/Colors";

import Dashboard from "./src/Pages/Dashboard/Dashboard";

function App() {
  useEffect(() => {
    // Set the initial language based on device locale
    const locale = getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
    // i18n.changeLanguage("id");
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={{ height: insets.top, backgroundColor: Colors.primary }}>
        <StatusBar style="light" />
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
