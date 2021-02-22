import {StyleSheet} from 'react-native';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logo: {width: 40, aspectRatio: 1 / 1},
  headerTitle: {fontFamily: fonts.montserratBold, fontSize: 24},
});
