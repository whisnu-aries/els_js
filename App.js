import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text } from "react-native";

import Tabs from "./Components/Tab";

const Stack = createNativeStackNavigator();

const EventDetail = () => <Text>EventDetail</Text>;

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Dashboard" component={Tabs} />
        <Stack.Screen name="EventDetail" component={EventDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
