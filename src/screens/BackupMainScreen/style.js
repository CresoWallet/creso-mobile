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
    width: sizes.screenWidth * 0.92,
    marginTop: sizes.screenHeight * 0.01,
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
    color: colors.disabledBg2,
    left: sizes.screenWidth * 0.05,
  },

  RecoveryKeyText: {
    color: colors.disabledBg2,
    left: sizes.screenWidth * 0.025,
  },

  BackupText: {
    color: colors.disabledBg2,
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
    marginTop: sizes.screenHeight * 0.1,
  },

  fieldText: {
    fontWeight: '700',
    color: colors.black,
    fontSize: fontSize.smallM,
    marginTop: sizes.screenHeight * 0.007,
    paddingLeft: sizes.screenWidth * 0.06,
  },

  inputField: {
    fontSize: fontSize.h6,
    color: colors.black,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.09,
    marginTop: sizes.screenHeight * 0.002,
    borderWidth: sizes.screenWidth * 0.003,
    paddingLeft: sizes.screenWidth * 0.06,
    borderRadius: sizes.screenWidth * 0.1,
    borderColor: colors.underlineColor,
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
    top: sizes.screenHeight * 0.435,
    backgroundColor: colors.black,
  },

  textColor: {
    color: colors.white,
  },
});
