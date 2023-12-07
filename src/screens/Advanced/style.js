import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  body: {
    marginTop: sizes.screenHeight * 0.07,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  rowLeftTextBold: {
    fontWeight: '600',
    fontSize: fontSize.regular,
    color: colors.black,
  },

  toggleOn: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.13,
    height: sizes.screenHeight * 0.03,
  },

  toggleOff: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.13,
    height: sizes.screenHeight * 0.03,
  },

  rowSeparator: {
    height: 1.5,
    width: sizes.screenWidth * 0.92,
    backgroundColor: colors.disabledBg,
    alignSelf: 'flex-end',
    marginTop: sizes.screenHeight * 0.022,
    marginBottom: sizes.screenHeight * 0.022,
  },

  warningRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.87,
    margin: sizes.screenWidth * 0.04,
  },

  warningImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    marginRight: sizes.screenWidth * 0.01,
  },

  warningText: {
    color: colors.disabledBg2,
    marginLeft: sizes.screenWidth * 0.01,
    fontSize: fontSize.small,
  },

  clearCacheBotton: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.066,
    backgroundColor: colors.backgroundPink,
    borderWidth: 1,
    borderRadius: sizes.screenHeight * 0.05,
    borderColor: colors.appTextPink,
  },

  clearCacheBottonText: {
    color: colors.appTextPink,
  },
});
