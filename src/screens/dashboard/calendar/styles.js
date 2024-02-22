import {StyleSheet, Dimensions} from 'react-native';

import {styleApp} from "../../../assets/styleApp";
import {useGlobal} from "../../../context/global";

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
      paddingVertical: 15,
    },
    content: {
      flex: 1,
    },
    contentTitle: {
      marginLeft: 15,
      borderRadius: 20,
      width: width - 30,
      backgroundColor: styleApp[globalProps.theme].background_700,
    },
    button: {
      paddingVertical: 15,
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 15,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      justifyContent: "space-between",
      // backgroundColor: "blue"
    },
    title: {
      fontSize: styleApp.text_size,
      color: styleApp[globalProps.theme].font_color,
    },
    arrowIcon: {
      color: styleApp[globalProps.theme].font_color,
    },
    invertY: {
      transform: [{rotate: "180deg"}],
    },
    separatorInitial: {
      backgroundColor: styleApp[globalProps.theme].background_700,
    },
    separatorEnd: {
      height: 1,
      width: width - 50,
      alignSelf: "flex-end",
      backgroundColor: styleApp[globalProps.theme].separator,
    },
  });
};

export default styles;