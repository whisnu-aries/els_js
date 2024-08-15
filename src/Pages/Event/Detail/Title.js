import { Pressable, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { ChevronLeftIcon as Back } from "react-native-heroicons/solid";

import { styles } from "./Title.style";

const Title = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backButtonContainer}
        onPress={() => navigation.goBack()}
      >
        <View>
          <Back style={styles.backButton} name="arrow-back" size={18} />
        </View>
      </Pressable>
      <Text style={styles.titleText}>{t("event.title_detail")}</Text>
    </View>
  );
};

Title.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Title;
