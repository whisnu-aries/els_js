import { View } from "react-native";
import { styles } from "./Indicator.component.style";

export default function Indicator({ isActive }) {
  return <View style={isActive ? styles.active : styles.inactive}></View>;
}
