import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => (
  <View>
    <Text>Home</Text>
    <Button
      title="EventDetail"
      onPress={() => navigation.navigate("EventDetail")}
    />
    <Button
      title="EventDetail"
      onPress={() => navigation.navigate("EventDetail")}
    />
    <Button
      title="EventDetail"
      onPress={() => navigation.navigate("EventDetail")}
    />
    <Button
      title="EventDetail"
      onPress={() => navigation.navigate("EventDetail")}
    />
    <Button
      title="EventDetail"
      onPress={() => navigation.navigate("EventDetail")}
    />
  </View>
);
const Bible = () => <Text>Bible</Text>;
const Event = () => <Text>Event</Text>;

const Tabs = () => {
  // <Tab.Navigator
  //   screenOptions={({ route }) => ({
  //     header: (props) => <Header {...props} />,
  //     tabBarShowLabel: false,
  //     tabBarIcon: ({ focused, color, size }) => {
  //       return (
  //         <TabBarIcon
  //           route={route.name}
  //           focused={focused}
  //           color={color}
  //           size={size}
  //         />
  //       );
  //     },
  //     tabBarActiveTintColor: Colors.primary,
  //     tabBarInactiveTintColor: Colors.accent,
  //   })}
  // >
  //   <Tab.Screen name="Dashboard" component={DashboardScreen} />
  //   <Tab.Screen name="Bible" component={BibleScreen} />
  //   <Tab.Screen name="Event" component={EventScreen} />
  // </Tab.Navigator>;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarIcon: ({ focused, color, size }) => {
        //   return (
        //     <TabBarIcon
        //       route={route.name}
        //       focused={focused}
        //       color={color}
        //       size={size}
        //     />
        //   );
        // },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bible" component={Bible} />
      <Tab.Screen name="Event" component={Event} />
    </Tab.Navigator>
  );
};

export default Tabs;
