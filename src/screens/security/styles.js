import {StyleSheet, Dimensions} from 'react-native';

import {styleApp} from '../../assets/styleApp';
import {useGlobal} from '../../context/global';

const {width, height} = Dimensions.get('window');

const styles = () => {
  const {globalProps} = useGlobal();
  return StyleSheet.create({
    safeareaview: {
      flex: 1,
      backgroundColor: styleApp[globalProps.theme].background_900,
    },
    container: {
      flex: 1,
    },
    content: {
    },
    title: {
      fontSize: styleApp.title_size,
      color: styleApp[globalProps.theme].font_color,
    },
    text: {
      fontSize: styleApp.text_size,
      color: styleApp[globalProps.theme].font_color,
    },
  });
};
export default styles;