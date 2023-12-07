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
    marginTop: sizes.screenHeight * 0.06,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  checkedIconContainer: {},

  checkedIcon: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenWidth * 0.06,
  },

  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowLeftTextBold: {
    fontWeight: '600',
    fontSize: fontSize.medium,
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.04,
  },

  rowSeparator: {
    height: 1.5,
    width: sizes.screenWidth * 0.92,
    backgroundColor: colors.disabledBg,
    alignSelf: 'flex-end',
    marginTop: sizes.screenHeight * 0.019,
    marginBottom: sizes.screenHeight * 0.019,
  },
});
