import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
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
    marginTop: sizes.screenHeight * 0.13,
    fontWeight: '600',
  },
  email: {
    color: colors.white,
    backgroundColor: colors.textBlue,
    paddingVertical: sizes.screenHeight * 0.015,
    paddingHorizontal: sizes.screenWidth * 0.05,
    borderRadius: sizes.screenWidth * 0.06,
    borderWidth: sizes.screenWidth * 0.001,
    marginVertical: sizes.screenHeight * 0.02,
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
    // marginBottom: sizes.screenHeight * 0.1,
    // bottom: sizes.screenHeight * 0.02,
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
  button: {
    backgroundColor: colors.black,
    color: colors.white,
    width: sizes.screenWidth * 0.93,

    height: sizes.screenHeight * 0.08,
    borderRadius: sizes.screenHeight * 0.04,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    paddingTop: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
  },
  buttonField: {
    position: 'absolute',
    marginTop: sizes.screenHeight * 0.87,
  },
});
