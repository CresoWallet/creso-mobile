import { Dimensions, StyleSheet } from 'react-native';
import { colors, fontFamily, fontSize, sizes } from '../../services';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
  },

  EOARow: {
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
  },

  EOA1: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.84,
    height: sizes.screenHeight * 0.1,
  },

  EOATextRow: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logoImg: {
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.03,
    marginTop: sizes.screenHeight * 0.04,
    resizeMode: 'contain',
  },
  text1: {
    fontSize: fontSize.extraLarge,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.04,
    color: colors.black,
  },

  body: {
    width: sizes.screenWidth * 0.9,
  },

  disabledText: {
    fontSize: fontSize.smallM,
    color: colors.disabledBg2,
    marginRight: 8,
  },

  hr: {
    height: 1,
    width: sizes.screenWidth * 0.8,
    backgroundColor: colors.disabledBg,
    marginVertical: 16,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.8,
    marginTop: sizes.screenHeight * 0.01,
  },

  bulbRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: sizes.screenHeight * 0.07,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    borderRadius: sizes.screenHeight * 0.1,
    paddingLeft: sizes.screenWidth * 0.05,
    marginTop: sizes.screenHeight * 0.01,
  },

  bulbGreen: {
    height: 24,
    width: 24,
    marginRight: 6,
  },

  textBlackBold: {
    fontSize: fontSize.smallM,
    color: colors.black,
    fontWeight: '600',
    maxWidth: sizes.screenWidth * 0.8,
  },

  ///////

  btnSection: {
    marginTop: 50,
    // position: 'absolute',
    bottom: sizes.screenHeight * 0.04,
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

  buttonWhite: {
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.08,
    borderRadius: sizes.screenHeight * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.disabledBg,
    marginTop: 10,
  },

  text: {
    color: colors.white,
    fontSize: fontSize.medium,
  },
  TandC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  emailCheck: {
    height: 24,
    width: 24,
    marginRight: 8,
  },

  textBlack: {
    color: '#00000099',
    fontSize: fontSize.regular,
    fontWeight: '500',
  },

  textPink: {
    color: colors.cresoPink,
    fontSize: fontSize.smallM,
    fontWeight: '500',
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

  error: {
    color: colors.redLoss,
    alignSelf: 'flex-start',
    marginLeft: sizes.screenWidth * 0.1,
  },
  transactionModalBody: {
    backgroundColor: colors.white,
    paddingHorizontal: sizes.screenWidth * 0.08,
    paddingVertical: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.9,
    borderRadius: 16,
    alignItems: 'center',
  },
  transactionModalText: {
    color: colors.black,
    fontWeight: '500',
    fontSize: fontSize.medium,
  },

  modalBtn: {
    backgroundColor: colors.black,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 100,
  },
  modalBtnText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: fontSize.medium,
  },
});
