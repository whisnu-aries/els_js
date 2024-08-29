import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import propTypes from "prop-types";

const SafeAreaHeader = ({ color }) => {
  const insets = useSafeAreaInsets();

  return <View style={{ backgroundColor: color, height: insets.top }} />;
};

SafeAreaHeader.propTypes = {
  color: propTypes.string,
};

export default SafeAreaHeader;
