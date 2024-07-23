import { Pressable, Text, View } from "react-native";
import { styles } from "./IconPills_style";

export default function IconPills({ icon, title, description }) {
  return (
    <Pressable onPress={() => console.log("Service / Homecell")}>
      <View style={styles.pillContainer}>
        {icon}
        <View style={styles.textContainer}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </Pressable>
  );
}
