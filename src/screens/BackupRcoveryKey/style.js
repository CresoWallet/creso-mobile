import {StyleSheet} from 'react-native';
import {sizes, colors, fontSize} from '../../services';

export const styles = StyleSheet.create({
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  topContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  mainContainer: {
    // marginTop: sizes.screenHeight * 0.04,
  },

  imagesView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.95,
  },
  TextView: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.84,
    marginTop: sizes.screenHeight * 0.01,

    alignSelf: 'center',
    justifyContent: 'space-between',
  },

  emilText: {
    color: colors.black,
    fontWeight: '600',
  },

  FaceMapText: {
    color: colors.black,
    fontWeight: '600',
    left: sizes.screenWidth * 0.05,
  },

  RecoveryKeyText: {
    left: sizes.screenWidth * 0.025,
    color: colors.black,
    fontWeight: '600',
  },

  BackupText: {
    color: colors.black,
    fontWeight: '600',
  },

  greenImage: {
    marginTop: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.87,
    height: sizes.screenHeight * 0.0747,
  },

  Network: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.03,
    alignContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontSize: fontSize.h4,
    fontWeight: '700',
    color: colors.black,
    marginTop: sizes.screenHeight * 0.05,
  },
  content: {
    fontSize: fontSize.smallM,
    marginTop: sizes.screenHeight * 0.015,
    lineHeight: 20,
    paddingHorizontal: sizes.screenWidth * 0.006,
    color: colors.disabledBg2,
  },

  addPhoneButtonStyling: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: colors.underlineColor,
    borderRadius: sizes.screenWidth * 0.95,
    height: sizes.screenHeight * 0.077,
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    marginLeft: sizes.screenWidth * 0.02,
    backgroundColor: colors.black,
    top: sizes.screenHeight * 0.105,
  },

  textColor: {
    color: colors.white,
  },

  cloudContent: {
    paddingLeft: sizes.screenHeight * 0.04,
    marginTop: sizes.screenHeight * 0.05,
    color: colors.disabledBg2,
  },

  buttonsTopView: {
    marginTop: sizes.screenHeight * 0.03,
  },

  textColorBulb: {
    color: colors.black,
    fontWeight: '600',
    paddingLeft: sizes.screenWidth * 0.03,
  },

  bulbButton: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: colors.underlineColor,
    borderWidth: 1,
    borderRadius: sizes.screenWidth * 0.95,
    height: sizes.screenHeight * 0.077,
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    marginLeft: sizes.screenWidth * 0.02,
    marginTop: sizes.screenWidth * 0.03,
    paddingLeft: sizes.screenWidth * 0.06,
  },

  bulbImagesStyling: {
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.03,
  },
  baiduImagesStyling: {
    width: sizes.screenWidth * 0.047,
    height: sizes.screenHeight * 0.02,
  },
});
