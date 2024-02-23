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
    borderWidth: sizes.screenWidth * 0.003,
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

  emailCheck: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
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
    marginVertical: sizes.screenHeight * 0.02,
  },

  signInWith: {
    width: sizes.screenWidth * 0.85,
    alignSelf: 'center',
    borderRadius: sizes.screenHeight * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.08,
    marginTop: 10,
    borderWidth: 1,
  },
  neonText: {
    color: colors.black,
    fontSize: fontSize.regular,
    fontWeight: '500',
  },
  twtLogo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: sizes.screenWidth * 0.02,
  },

  BtnBlackText: {
    color: colors.white,
    fontSize: fontSize.medium,
  },

  rightArroww: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 6,
  },

  loginTextView: {
    flexDirection: 'row',
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
    marginVertical: sizes.screenHeight * 0.04,
  },
  divider: {
    backgroundColor: colors.disabledBg,
    height: 1,
    width: sizes.screenWidth * 0.4,
  },

  forgotPassContainer: {
    alignSelf: 'flex-end',
    marginRight: sizes.screenWidth * 0.1,
  },

  forgotPass: {
    color: colors.cresoPink,
    fontSize: fontSize.smallM,
    fontWeight: '500',
  },

  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    left: sizes.screenWidth * 0.1,
  },
});
