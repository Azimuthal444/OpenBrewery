import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  addressContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  addressText: {fontFamily: fonts.montserratMedium, fontSize: 16},
  linkContainer: {flexDirection: 'row', justifyContent: 'space-evenly'},
  overlayText: {marginBottom: 20},
  closeButtonStyle: {
    width: '50%',
    alignSelf: 'center',
    borderColor: colors.red,
  },
});
