import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    // backgroundColor:'red'
  },
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoImg: {
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.03,
    marginTop: sizes.screenHeight * 0.04,
    resizeMode: 'contain',
  },
  text1: {
    fontSize: fontSize.h3,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.06,
    color: colors.black,
  },
  dotView: {
    width: sizes.screenWidth * 0.2,
    // height:sizes.screenHeight * 0.05,
    // backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: sizes.screenHeight * 0.03,
  },
  dotViewChild: {
    width: 6,
    height: 6,
    backgroundColor: colors.sliderDotBG,
    borderRadius: 8,
  },
  dotViewChildBlack: {
    width: sizes.screenWidth * 0.07,
    height: 6,
    backgroundColor: colors.black,
    borderRadius: 8,
  },
  sliderImg: {
    width: sizes.screenWidth * 0.7,
    height: sizes.screenHeight * 0.4,
    resizeMode: 'contain',
    marginTop: sizes.screenHeight * 0.05,
  },
  btnView: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.23,
    // backgroundColor:'red',
    bottom: sizes.screenHeight * 0.03,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.11,
    borderRadius: sizes.screenWidth * 0.45,
    // backgroundColor:'rgba(228, 228, 233,0.8)', //original
    // backgroundColor:'rgba(255, 255, 255 , 0.9)', //white
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
    borderColor: colors.black,
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
