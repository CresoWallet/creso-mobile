import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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

  btnView: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.23,
    bottom: sizes.screenHeight * 0.03,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.11,
    borderRadius: sizes.screenWidth * 0.45,

    backgroundColor: 'rgba(242, 241, 241 , 0.8)',
    alignItems: 'left',
    justifyContent: 'center',
  },
  btnImg: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.107,
    borderRadius: sizes.screenWidth * 0.45,
  },
  btnContnt: {
    // backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: sizes.screenWidth * 0.08,
  },
  addImg: {
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.06,
  },
  text2: {
    fontWeight: '600',
    fontSize: fontSize.h6,
    color: colors.black,
  },
  text3: {
    fontSize: fontSize.regular,
    color: 'gray',
  },
  btnContentView: {
    marginLeft: sizes.screenWidth * 0.03,
  },

  modal: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  modalContent: {
    width: sizes.screenWidth * 1,
    height: sizes.screenHeight * 0.45,
    backgroundColor: colors.white,
    borderTopLeftRadius: sizes.screenWidth * 0.12,
    borderTopRightRadius: sizes.screenWidth * 0.12,
    padding: sizes.screenWidth * 0.05,
    justifyContent: 'space-between',
  },

  modalBody: {
    alignItems: 'center',
  },

  horizontalLine: {
    height: sizes.screenHeight * 0.0057,
    width: sizes.screenWidth * 0.27,
    backgroundColor: colors.disabledBg1,
    borderRadius: 2,
  },

  modalHeading: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '700',
    marginBottom: sizes.screenWidth * 0.06,
    marginTop: sizes.screenWidth * 0.06,
  },

  modalText: {
    fontSize: fontSize.smallM,
    fontWeight: '500',
    color: colors.disabledBg2,
    textAlign: 'justify',
  },

  modalTextPink: {
    fontSize: fontSize.smallM,
    fontWeight: '500',
    color: colors.appTextPink,
  },

  bottonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: sizes.screenHeight * 0.016,
  },

  bottonWhite: {
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.08,
    width: sizes.screenHeight * 0.218,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: sizes.screenHeight * 0.1,
    fontWeight: '700',
    color: colors.black,
  },

  bottonWhiteText: {
    fontWeight: '500',
    color: colors.black,
  },

  bottonBlack: {
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.08,
    width: sizes.screenHeight * 0.218,
    backgroundColor: colors.black,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: sizes.screenHeight * 0.1,
  },

  bottonBlackText: {
    fontWeight: '500',
    color: colors.white,
  },

  ///////

  btnSection: {
    position: 'absolute',
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
});
