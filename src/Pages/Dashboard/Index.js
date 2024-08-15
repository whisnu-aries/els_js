import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "./Dashboard";
import EventDetailScreen from "../Event/Detail/Index";

const DashboardStack = createNativeStackNavigator();

function DashboardStackScreen() {
  return (
    <DashboardStack.Navigator
      screenOptions={{
        headerShown: false, // Hide header for all screens
      }}
    >
      <DashboardStack.Screen name="DashboardTest" component={DashboardScreen} />
      <DashboardStack.Screen name="Details" component={EventDetailScreen} />
    </DashboardStack.Navigator>
  );
}

export default DashboardStackScreen;
