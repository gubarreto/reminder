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
    },
    content: {
      marginTop: 10,
      paddingHorizontal: 10,
    },



    title: {
      fontSize: styleApp.title_size,
      marginTop: 20,
      marginBottom: 5,
      color: styleApp[globalProps.theme].font_color,
    },
    item: {
      width: width - 30,
      paddingVertical: 15,
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 10,
      justifyContent: "space-between",
      backgroundColor: styleApp[globalProps.theme].background_700
    },
    itemFirst: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    itemLast: {
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    itemName: {
      fontSize: styleApp.text_size,
      color: styleApp[globalProps.theme].font_color,
    },
    arrowIcon: {
      transform: [{rotate: "270deg"}],
      color: styleApp[globalProps.theme].font_color,
    },
    separatorInitial: {
      backgroundColor: styleApp[globalProps.theme].background_700,
    },
    separatorEnd: {
      height: 1,
      width: width - 40,
      alignSelf: "flex-end",
      backgroundColor: styleApp[globalProps.theme].separator,
    },
  });
};

export default styles;