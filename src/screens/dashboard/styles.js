import {StyleSheet} from "react-native";
import {styleApp} from "../../assets/styleApp";
import {useGlobal} from "../../context/global";

const styles = () => {
  const {globalProps} = useGlobal();
  return StyleSheet.create({
    safeareaview: {
      flex: 1,
      backgroundColor: styleApp[globalProps.theme].background_900
    },
    container: {
      flex: 1,
    },
    content: {
      flex: 1
    },
    buttonItem: {
      width: 120,
      height: 120,
      // elevation: 10,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: styleApp[globalProps.theme].background_700
    },
    buttonIcon: {
    },
    buttonTitle: {
      flex: 1,
      fontSize: styleApp.title_size,
      color: styleApp[globalProps.theme].font_color,
    },
  });
};

export default styles;