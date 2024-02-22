import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  logoImg: {
    width: sizes.screenWidth * 0.18,
    height: sizes.screenHeight * 0.024,
    marginTop: sizes.screenHeight * 0.06,
    marginBottom: sizes.screenHeight * 0.08,
  },
  text1: {
    fontSize: fontSize.h3,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.03,
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.07,
  },
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
  },

  label: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: sizes.screenWidth * 0.14,
    marginTop: sizes.screenHeight * 0.01,
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.85,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    borderRadius: sizes.screenWidth * 0.1,
    padding: sizes.screenWidth * 0.01,
    paddingHorizontal: sizes.screenWidth * 0.05,
    marginVertical: sizes.screenHeight * 0.01,
  },

  inputFieldText: {
    width: sizes.screenWidth * 0.66,
    color: colors.black,
    fontSize: fontSize.medium,
  },

  BtnBlack: {
    width: sizes.screenWidth * 0.85,
    backgroundColor: colors.black,
    alignSelf: 'center',
    borderRadius: sizes.screenHeight * 0.2,
    flexDirection: 'row',
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.08,
    position: 'absolute',
    bottom: sizes.screenHeight * 0.04,
  },

  rightArroww: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 6,
  },

  neon: {
    width: sizes.screenWidth * 0.85,
    backgroundColor: colors.neonGreen,
    alignSelf: 'center',
    borderRadius: sizes.screenHeight * 0.2,
    flexDirection: 'row',
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.08,
    marginTop: sizes.screenHeight * 0.02,
    borderWidth: sizes.screenWidth * 0.003,
  },
  neonText: {
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.03,
    marginRight: sizes.screenWidth * 0.03,
    fontSize: fontSize.medium,
  },
  twtLogo: {
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.025,
  },

  BtnBlackText: {
    color: colors.white,
    fontSize: fontSize.medium,
  },
  loginTextView: {
    flexDirection: 'row',
    // backgroundColor:'red',
    marginTop: sizes.screenHeight * 0.02,
  },
  loginText: {
    color: colors.disabledBg2,
  },
  loginLink: {
    color: colors.textBlue,
  },

  orView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: sizes.screenWidth * 0.85,
    marginTop: sizes.screenHeight * 0.02,
  },

  divider: {
    backgroundColor: colors.disabledBg,
    height: sizes.screenWidth * 0.005,
    width: sizes.screenWidth * 0.35,
  },

  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    left: sizes.screenWidth * 0.1,
  },

  TandC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: sizes.screenHeight * 0.15,
  },

  emailCheck: {
    height: 24,
    width: 24,
    marginRight: 8,
  },

  textBlack: {
    color: colors.black,
    fontSize: fontSize.regular,
    fontWeight: '500',
  },

  textPink: {
    color: colors.cresoPink,
    fontSize: fontSize.regular,
    fontWeight: '500',
  },
});
