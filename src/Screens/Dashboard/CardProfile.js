import { Image, ScrollView, Pressable, Text, View } from "react-native";
import * as Icons from "react-native-heroicons/solid";

import { styles } from "./CardProfile_style";
import Divider from "../../Components/Divider";
import IconPills from "../../Components/Pills/PillsDescWithIcon/IconPills";

export default function CardProfile({
  church,
  name,
  code,
  service,
  homecells,
}) {
  function handleClickProfile() {
    console.log("profile");
  }

  function handleClickQr() {
    console.log("qr");
  }

  function handleClickNotification() {
    console.log("notification");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi! Welcome to {church}</Text>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://via.placeholder.com/50" }} // Replace with your image source
          />
          <Pressable style={styles.nameContainer} onPress={handleClickProfile}>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.code}>{code}</Text>
            </View>
          </Pressable>
          <View style={styles.iconContainer}>
            <Pressable onPress={handleClickQr}>
              <Icons.QrCodeIcon style={styles.icon} size={30} />
            </Pressable>
            <Pressable onPress={handleClickNotification}>
              <Icons.BellIcon style={styles.icon} size={30} />
            </Pressable>
          </View>
        </View>
        <Divider />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.homecellContainer}>
            <IconPills
              key={1}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
            {homecells.map((item) => (
              <IconPills
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
