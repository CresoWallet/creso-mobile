import { Dimensions, StyleSheet } from 'react-native';
import { colors, fontFamily, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
  container: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  profileMaincontainer: {
    alignItems: 'center',
  },

  ownerInputContainer: {
    height: sizes.screenHeight * 0.08,
    justifyContent: 'center',
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.07,
    borderWidth: 1,
    borderRadius: sizes.screenHeight * 0.1,
    borderColor: colors.disabledBg,
    marginVertical: sizes.screenHeight * 0.01,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  ParagText: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    color: colors.gray,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  addOwnerBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: colors.black,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 10,
    width: sizes.screenWidth * 0.3,
  },

  isDisabled: {
    backgroundColor: colors.disabledBg,
    color: colors.disabledBg2,
  },

  addOwnerText: {
    color: colors.white,
  },

  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.8,
    marginTop: sizes.screenHeight * 0.01,
  },

  textBlackBold: {
    fontSize: fontSize.smallM,
    color: colors.black,
    fontWeight: '600',
    maxWidth: sizes.screenWidth * 0.8,
  },

  ///////

  btnSection: {
    marginTop: 40,
  },

  eyeBtn: {
    // paddingLeft: 20,
    // marginRight: 20,
    // paddingRight: 10,
  },

  button: {
    backgroundColor: colors.black,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.08,
    borderRadius: sizes.screenHeight * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  text: {
    color: colors.white,
    fontSize: fontSize.medium,
  },

  inputContainer: {
    height: sizes.screenHeight * 0.08,
    justifyContent: 'center',
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderWidth: 1,
    borderRadius: sizes.screenHeight * 0.1,
    borderColor: colors.disabledBg,
    marginVertical: sizes.screenHeight * 0.01,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    color: colors.black,
    fontSize: fontSize.regular,
  },

  learnMoreRow: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    marginBottom: sizes.screenHeight * 0.01,
  },

  textPink: {
    color: colors.cresoPink,
    fontSize: fontSize.smallM,
    fontWeight: '500',
  },

  textBlackBold: {
    fontSize: fontSize.smallM,
    color: colors.black,
    fontWeight: '600',
    maxWidth: sizes.screenWidth * 0.8,
  },

  emailCheck: {
    height: 24,
    width: 24,
    marginRight: 8,
  },

  error: {
    color: colors.redLoss,
    alignSelf: 'flex-start',
    marginLeft: sizes.screenWidth * 0.1,
  },

  marginBtm: {
    marginBottom: sizes.screenHeight * 0.12,
  },
});
