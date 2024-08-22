import { SafeAreaView, Button, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import PropTypes from "prop-types";

import Styles from "./Dashboard.Style";

const Dashboard = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={{ backgroundColor: "#ccc", height: insets.top }}>
        <StatusBar style="dark" />
      </View>
      <SafeAreaView>
        <View style={Styles.container}>
          <Text>dashboard</Text>
          <Button
            title="event"
            onPress={() => navigation.navigate("EventDetail")}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

Dashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Dashboard;
