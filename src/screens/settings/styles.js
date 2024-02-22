import {Dimensions, StyleSheet} from "react-native";
import {styleApp} from "../../assets/styleApp";
import {useGlobal} from "../../context/global";

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
      paddingHorizontal: 20,
    },
    content: {
    },
    settingsItem: {
      width: width - 40,
      paddingVertical: 15,
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 20,
      justifyContent: "space-between",
      backgroundColor: styleApp[globalProps.theme].background_700
    },
    settingsItemFirst: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    settingsItemLast: {
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    icon: {
      color: styleApp[globalProps.theme].font_color,
    },
    settingsItemTitle: {
      fontSize: styleApp.text_size,
      marginLeft: 15,
      color: styleApp[globalProps.theme].font_color,
    },
    buttonItem: {
    },
    arrowIcon: {
      transform: [{ rotate: "270deg"}],
      color: styleApp[globalProps.theme].font_color,
    },
    separatorInitial: {
      backgroundColor: styleApp[globalProps.theme].background_700,
    },
    separatorEnd: {
      height: 1,
      width: width - 100,
      alignSelf: "flex-end",
      backgroundColor: styleApp[globalProps.theme].separator,
    },
    sectionItemTitle: {
      fontSize: styleApp.title_size,
      marginTop: 20,
      marginBottom: 8,
      color: styleApp[globalProps.theme].font_color,
    }
  });
};

export default styles;