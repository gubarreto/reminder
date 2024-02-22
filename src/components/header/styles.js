import {Dimensions, StyleSheet} from "react-native";
import {styleApp} from "../../assets/styleApp";
import {useGlobal} from "../../context/global";

const {width, height} = Dimensions.get("window");

const styles = () => {
  const {globalProps} = useGlobal();
  return StyleSheet.create({
    safeareaview: {
    },
    container: {
      width: width,
      height: 75,
      paddingHorizontal: 20,
      justifyContent: "center",
      backgroundColor: styleApp[globalProps.theme].background_900
    },
    content: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    buttonMenu: {
      marginLeft: 10
    },
    arrowIcon: {
      color: styleApp[globalProps.theme].font_color
    },
    title: {
      flex: 1,
      fontSize: styleApp.title_size,
      color: styleApp[globalProps.theme].font_color,
    },
    icon: {
      color: styleApp[globalProps.theme].font_color
    },
    separator: {
      height: 1,
      width: width,
      alignSelf: "flex-end",
      backgroundColor: styleApp[globalProps.theme].separator,
    },
  });
};

export default styles;