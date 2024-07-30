import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { getLocales } from "expo-localization";

import { styles } from "./App_style";
import i18n from "./src/Localizations/i18n";

import Dashboard from "./src/Screens/Dashboard/Index";

export default function App() {
  useEffect(() => {
    // Set the initial language based on device locale
    const locale = getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView>
        <Dashboard />
      </SafeAreaView>
    </View>
  );
}
