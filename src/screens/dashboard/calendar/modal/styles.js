import {StyleSheet, Dimensions} from 'react-native';

import {styleApp} from '../../../../assets/styleApp';
import {useGlobal} from '../../../../context/global';

const {width, height} = Dimensions.get("window");

const styles = () => {
  const {globalProps} = useGlobal();
  return StyleSheet.create({
    container: {
      width: width,
      height: height,
      paddingVertical: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: styleApp[globalProps.theme].background_900,
    },
    nav: {
      flexDirection: "row",
      paddingHorizontal: 10,
      justifyContent: "space-between",
    },
    content: {
      flex: 1,
      padding: 10,
    },
    closeModalIcon: {
      transform: [{rotate: "90deg"}],
    },
    closeModalText: {
      fontSize: styleApp.text_size,
      color: "rgba(256, 40, 40, 1)",
    },
    addButtonText: {
      fontSize: styleApp.text_size,
      color: "rgba(40, 40, 256, 1)",
    },
    box: {
      padding: 10,
      borderRadius: 15,
      marginVertical: 5,
      backgroundColor: styleApp[globalProps.theme].background_700,
    },
    text: {
      fontSize: styleApp.text_size,
      color: styleApp[globalProps.theme].font_color,
    },

    
    separator: {
      height: 1,
      right: -9,
      width: width - 35,
      alignSelf: "flex-end",
      backgroundColor: styleApp[globalProps.theme].separator,
    },
  });
};

export default styles;