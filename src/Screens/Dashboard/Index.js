import * as Icons from "react-native-heroicons/solid";

import { Colors } from "../../Constants/Colors";

import CardProfile from "./CardProfile";
import CarouselAnnouncement from "./CarouselAnnouncement";

/**
 * This is the dummy data for card profile.
 */
const BuildingIcon = (
  <Icons.BuildingOfficeIcon color={Colors.primary} size={32} />
);

const service = {
  id: 3,
  icon: BuildingIcon,
  title: "Bridge Jakarta",
  description: "Hello Team",
};

const HomeIcon = <Icons.HomeIcon color={Colors.primary} size={32} />;

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
/**
 * End dummy data.
 */

const Dashboard = () => {
  return (
    <>
      <CardProfile
        church="ECC Bandung"
        name="John Doe"
        code="ECC-JKT 123QWE"
        service={service}
        homecells={homecells}
      />
      <CarouselAnnouncement />
    </>
  );
};

export default Dashboard;
