import { View } from "react-native";
import PropTypes from "prop-types";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from "../../Constants/Colors";

const CustomHeader = ({ color }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{ height: insets.top, backgroundColor: color && Colors[color] }}
    />
  );
};

CustomHeader.propTypes = {
  color: PropTypes.string,
};

export default CustomHeader;
