import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../../Constants/Colors";

const CustomHeader = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ height: insets.top, backgroundColor: Colors.primary }} />
  );
};

export default CustomHeader;
