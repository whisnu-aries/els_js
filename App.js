import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { styles } from "./App_style";
import Dashboard from "./src/Screens/Dashboard/Index";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView>
        <Dashboard />
      </SafeAreaView>
    </View>
  );
}
