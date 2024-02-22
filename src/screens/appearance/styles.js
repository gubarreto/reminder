import {Dimensions, StyleSheet} from "react-native";
import {useGlobal} from "../../context/global";
import {styleApp} from "../../assets/styleApp";

const {width, height} = Dimensions.get("window");

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
      marginTop: 10,
      paddingHorizontal: 10,
    },
    title: {
      fontSize: styleApp.title_size,
      color: styleApp[globalProps.theme].font_color,
    },
    themeButton: {
      width: 70,
      height: 70,
      borderRadius: 35,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: styleApp[globalProps.theme].background_700,
    },
    themeButtonIcon: {
      color: styleApp[globalProps.theme].font_color,
    },
    buttonName: {
      fontSize: styleApp.text_size,
      marginTop: 3,
      textAlign: "center",
      color: styleApp[globalProps.theme].font_color,
    },
  });
};

export default styles;