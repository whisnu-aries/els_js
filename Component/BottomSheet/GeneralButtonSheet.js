import propTypes from "prop-types";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import Styles from "./GeneralButtonSheet.Style";

const GeneralButton = ({ children, isOpen, onClose }) => {
  const snapPoints = ["50%", "100%"];

  return (
    <BottomSheet
      style={Styles.container}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={onClose}
      index={isOpen}
      backgroundStyle={Styles.innerContainer}
      enableDynamicSizing={true}
    >
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheet>
  );
};

GeneralButton.propTypes = {
  children: propTypes.element.isRequired,
  isOpen: propTypes.number.isRequired,
  onClose: propTypes.func.isRequired,
};

export default GeneralButton;
