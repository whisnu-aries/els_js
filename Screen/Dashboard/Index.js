import DashboardScreen from "./Dashboard";
import EventDetail from "../Event/Detail/Index";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Dashboard = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: "Dashboard" }}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{ title: "Event Detail app", tabBarVisible: false }}
      />
    </Stack.Navigator>
  );
};

export default Dashboard;
