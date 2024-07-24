import { View } from "react-native";
import * as Icons from "react-native-heroicons/solid";

import CardProfile from "./CardProfile";
import CarouselAnnouncement from "./CarouselAnnouncement";
import { styles } from "./Index_style";
import { Colors } from "../../Constants/Colors";

export default function Dashboard() {
  const BuildingIcon = (
    <Icons.BuildingOfficeIcon color={Colors.primary} size={32} />
  );
  const HomeIcon = <Icons.HomeIcon color={Colors.primary} size={32} />;

  const service = {
    icon: BuildingIcon,
    title: "Bridge Jakarta",
    description: "Hello Team",
  };

  const homecells = [
    {
      id: 1,
      icon: HomeIcon,
      title: "South 1",
      description: "Member",
    },
    {
      id: 2,
      icon: HomeIcon,
      title: "Bridge Community College",
      description: "Core Team",
    },
  ];

  return (
    <View style={styles.container}>
      <CardProfile
        church="ECC Jakarta"
        name="John Doe"
        code="ECC-JKT 123QWE"
        service={service}
        homecells={homecells}
      />
      <CarouselAnnouncement />
    </View>
  );
}
