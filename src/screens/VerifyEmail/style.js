import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
  },

  logoImg: {
    width: sizes.screenWidth * 0.18,
    height: sizes.screenHeight * 0.024,
    marginTop: sizes.screenHeight * 0.06,
    marginBottom: sizes.screenHeight * 0.08,
  },

  stages: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.09,
    marginTop: sizes.screenHeight * 0.02,
  },

  stagesText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: sizes.screenWidth * 0.9,
  },

  stagesText1: {
    left: sizes.screenWidth * 0.01,
  },

  stagesText2: {
    left: sizes.screenWidth * 0.04,
    color: colors.disabledBg2,
  },

  stagesText3: {
    left: sizes.screenWidth * 0.02,
    color: colors.disabledBg2,
  },

  stagesText4: {
    left: sizes.screenWidth * 0.01,
    color: colors.disabledBg2,
  },

  boldBlack: {
    color: colors.black,
    fontWeight: '600',
  },

  emailVerifyText: {
    fontWeight: '500',
    color: colors.black,
    fontSize: fontSize.smallM,
  },

  emailContainer: {
    backgroundColor: colors.textBlue,
    height: sizes.screenHeight * 0.05,
    paddingHorizontal: 16,
    borderRadius: sizes.screenHeight * 0.1,
    borderWidth: 1,
    marginVertical: sizes.screenHeight * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },

  email: {
    color: colors.white,
    fontSize: fontSize.smallM,
    fontWeight: '500',
  },

  codeField: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.04,
  },

  codeFieldText: {
    paddingVertical: sizes.screenHeight * 0.02,
    paddingHorizontal: sizes.screenHeight * 0.027,
    borderWidth: sizes.screenWidth * 0.001,
    borderColor: colors.gray,
    borderRadius: sizes.screenWidth * 0.1,
    color: colors.black,
    fontWeight: '500',
    fontSize: fontSize.extraLarge,
  },

  resendCodeText: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: sizes.screenWidth * 0.85,
    marginTop: sizes.screenHeight * 0.02,
  },

  link: {
    color: colors.redLoss,
    fontWeight: '500',
  },

  codeFieldRoot: {
    width: sizes.screenWidth,
    paddingHorizontal: sizes.screenWidth * 0.05,
    paddingTop: sizes.screenWidth * 0.1,
    alignSelf: 'center',
  },

  cell: {
    width: sizes.screenHeight * 0.07,
    height: sizes.screenHeight * 0.07,
    lineHeight: sizes.screenHeight * 0.07,
    fontSize: fontSize.h5,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: colors.disabledBg,
    textAlign: 'center',
    color: colors.black,
    borderRadius: sizes.screenWidth * 0.5,
  },

  cellIOS: {
    width: sizes.screenHeight * 0.05,
    height: sizes.screenHeight * 0.05,
    lineHeight: sizes.screenHeight * 0.05,
    fontSize: fontSize.h5,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: colors.disabledBg,
    textAlign: 'center',
    color: colors.black,
    borderRadius: sizes.screenWidth * 0.06,
  },

  focusCell: {
    borderColor: '#000',
  },

  text: {
    color: colors.white,
    fontSize: fontSize.medium,
  },

  rightArroww: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 6,
  },

  buttonField: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.04,
    backgroundColor: colors.black,
    width: sizes.screenWidth * 0.93,
    height: sizes.screenHeight * 0.08,
    borderRadius: sizes.screenHeight * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
