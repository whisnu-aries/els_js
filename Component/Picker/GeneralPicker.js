import { Picker } from "@react-native-picker/picker";
import propTypes from "prop-types";

import Styles from "./GeneralPicker.Style";

const GeneralPicker = ({ datalist, selectedValue, onChange, ...props }) => {
  return (
    <Picker
      style={Styles.container}
      selectedValue={selectedValue}
      onValueChange={onChange}
      {...props}
    >
      {datalist.map((data) => (
        <Picker.Item key={data.id} label={data.name} value={data.id} />
      ))}
    </Picker>
  );
};

GeneralPicker.propTypes = {
  datalist: propTypes.array.isRequired,
  selectedValue: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default GeneralPicker;
