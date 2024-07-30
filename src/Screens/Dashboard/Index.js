import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import * as Icons from "react-native-heroicons/solid";

import { styles } from "./Index_style";
import { Colors } from "../../Constants/Colors";

import CardProfile from "./CardProfile";
import CarouselAnnouncement from "./CarouselAnnouncement";

export default function Dashboard() {
  const { t } = useTranslation();

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
        church="ECC Bandung"
        name="John Doe"
        code="ECC-JKT 123QWE"
        service={service}
        homecells={homecells}
      />
      <CarouselAnnouncement />
    </View>
  );
}
