import { View } from "react-native";
import { styles } from "./Indicator_style";

export default function Indicator({ isActive }) {
  return <View style={isActive ? styles.active : styles.inactive}></View>;
}
