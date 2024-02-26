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

  disabledText: {
    fontSize: fontSize.smallM,
    color: colors.disabledBg2,
    marginRight: 8,
  },

  disabledText2: {
    fontSize: fontSize.smallM,
    color: colors.disabledBg2,
    maxWidth: sizes.screenWidth * 0.9,
    marginVertical: sizes.screenHeight * 0.02,
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

  textBlackBold: {
    fontSize: fontSize.smallM,
    color: colors.black,
    fontWeight: '600',
    maxWidth: sizes.screenWidth * 0.8,
  },

  textBlackBold2: {
    fontSize: fontSize.smallM,
    color: colors.black,
    fontWeight: '600',
    maxWidth: sizes.screenWidth * 0.8,
    marginRight: 8,
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

  learnMoreRow: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    marginBottom: sizes.screenHeight * 0.01,
  },

  heading: {
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '700',
    textAlign: 'center',
  },

  recoveryPhraseContainer: {
    height: sizes.screenHeight * 0.28,
    width: sizes.screenWidth * 0.9,
    overflow: 'hidden',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  recoveryPhraseContainer2: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingVertical: sizes.screenHeight * 0.02,
  },

  phraseImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.9,
    position: 'absolute',
  },

  phraseViewContainer: {
    borderWidth: 1,
    borderColor: colors.cresoPurple,
    borderRadius: sizes.screenHeight * 0.1,
    height: sizes.screenHeight * 0.05,
    justifyContent: 'flex-end',
    width: sizes.screenWidth * 0.26,
  },

  phraseView: {
    backgroundColor: colors.cresoPurple,
    borderRadius: sizes.screenHeight * 0.1,
    height: sizes.screenHeight * 0.044,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
