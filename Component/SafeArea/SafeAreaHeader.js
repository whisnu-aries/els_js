import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import propTypes from "prop-types";
import { Colors } from "../../Constants/Colors";

const SafeAreaHeader = ({ color }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ backgroundColor: color ?? Colors.primary, height: insets.top }}
    />
  );
};

SafeAreaHeader.propTypes = {
  color: propTypes.string,
};

export default SafeAreaHeader;
