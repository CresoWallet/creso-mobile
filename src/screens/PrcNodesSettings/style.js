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
    fontSize: fontSize.smallM,
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.04,
  },

  rowRightTextBoldPink: {
    fontWeight: '600',
    fontSize: fontSize.smallM,
    color: colors.appTextPink,
    marginLeft: sizes.screenWidth * 0.04,
  },

  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowRightBoxesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowRightBoxLight: {
    height: sizes.screenWidth * 0.015,
    width: sizes.screenWidth * 0.015,
    borderWidth: 1.5,
    borderRadius: 1.5,
    borderColor: colors.purple,
    marginLeft: sizes.screenWidth * 0.007,
  },

  rowRightBoxDark: {
    height: sizes.screenWidth * 0.015,
    width: sizes.screenWidth * 0.015,
    borderWidth: 1.5,
    borderRadius: 1.5,
    borderColor: colors.darkBlue,
    marginLeft: sizes.screenWidth * 0.007,
  },

  rowRightTextContainer: {
    alignItems: 'flex-end',
  },

  rowRightTextBold: {
    fontWeight: '600',
    color: colors.meadowGreenText,
  },

  rowRightTextNormal: {
    fontSize: fontSize.small,
    color: colors.disabledBg2,
  },

  rightArrowIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.025,
    marginRight: sizes.screenWidth * 0.02,
    marginLeft: sizes.screenWidth * 0.03,
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
