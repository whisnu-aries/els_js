import {
  HomeIcon as homeInactive,
  BookOpenIcon as bookInactive,
  CalendarDaysIcon as eventInactive,
} from "react-native-heroicons/outline";
import {
  HomeIcon as homeActive,
  BookOpenIcon as bookActive,
  CalendarDaysIcon as eventActive,
} from "react-native-heroicons/solid";

const iconMap = {
  Dashboard: {
    outline: homeInactive,
    solid: homeActive,
  },
  Bible: {
    outline: bookInactive,
    solid: bookActive,
  },
  Event: {
    outline: eventInactive,
    solid: eventActive,
  },
};

export default TabBarIcon = ({ route, focused, color, size }) => {
  const iconType = focused ? "solid" : "outline";
  const IconComponent = iconMap[route]?.[iconType];

  return <IconComponent size={size} color={color} />;
};
