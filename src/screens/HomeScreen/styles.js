import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  screenContainer: {backgroundColor: colors.white, flex: 1},
  flatListContainer: {flex: 1},
  flatListContent: {flexGrow: 1},
  emptyComponentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  emptyListText: {
    fontSize: 40,
    fontFamily: fonts.montserratSemiBold,
    textAlign: 'center',
  },
});
