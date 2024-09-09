import { useEffect } from "react";
import { getLocales } from "expo-localization";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import i18n from "./Locales/i18n";

import TabBar from "./Component/TabBar/TabBar";
import SignIn from "./Screen/Authentication/SignIn";
import SignUp from "./Screen/Authentication/SignUp";
import OTP from "./Screen/Authentication/OTP";
import ForgotPassword from "./Screen/Authentication/ForgotPassword";
import SuccessForgotPassword from "./Screen/Authentication/SuccessForgotPassword";
import EventDetail from "./Screen/Event/Detail/Index";
import ProfileEdit from "./Screen/Profile/Edit/Index";

import { Button } from "react-native";
import { Colors } from "./Constants/Colors";

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    // Set the initial language based on device locale
    const locale = getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SuccessForgotPassword"
          component={SuccessForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={TabBar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EventDetail"
          component={EventDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEdit}
          options={{
            headerShown: true,
            headerTitle: "Profile Edit",
            headerStyle: { backgroundColor: Colors.primary },
            headerLeft: () => (
              <Button title="Back" onPress={() => console.log("a")} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
