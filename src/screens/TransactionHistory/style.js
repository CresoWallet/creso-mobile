import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.white,
  },

  scrollContainer: {
    marginTop: sizes.screenHeight * 0.06,
    height: sizes.screenHeight * 0.86,
  },

  margin: {
    height: sizes.screenHeight * 0.04,
  },

  thRow: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  THImg: {
    resizeMode: 'contain',
    width: 56,
    height: 56,
    backgroundColor: colors.white,
  },

  thRowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: sizes.screenWidth * 0.73,
  },

  disabledText: {
    color: colors.disabledBg2,
    fontSize: fontSize.small,
  },

  textBold: {
    color: colors.black,
    fontWeight: '700',
    marginBottom: 4,
  },

  textPink: {
    color: colors.appTextPink,
    fontSize: fontSize.small,
  },

  textGreen: {
    color: colors.meadowGreenText,
    fontSize: fontSize.small,
  },

  itemsFlexEnd: {
    alignItems: 'flex-end',
  },

  hrRight: {
    backgroundColor: colors.disabledBg,
    height: 1,
    marginVertical: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.85,
    alignSelf: 'flex-end',
  },
});
