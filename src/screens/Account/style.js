import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

export const styles = StyleSheet.create({
  mainContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  emailContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.underlineColor,
    borderRadius: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.9,
    marginLeft: sizes.screenWidth * 0.04,
    alignItems: 'center',
    paddingHorizontal: sizes.screenWidth * 0.04,
  },

  connectedTextStyling: {
    color: colors.black,
  },

  connectedButtonStyling: {
    backgroundColor: colors.connectContainerGreen,
    borderWidth: 2,
    borderRadius: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.04,
    paddingHorizontal: sizes.screenWidth * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    // padding: sizes.screenWidth * 0.1,
    paddingTop: sizes.screenWidth * 0.08,
  },

  informativeParaView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: sizes.screenWidth * 0.09,
    paddingRight: sizes.screenWidth * 0.09,
    paddingTop: sizes.screenWidth * 0.05,
  },

  infoImage: {
    width: sizes.screenWidth * 0.07,
    height: sizes.screenHeight * 0.03,
  },

  infoPara: {
    paddingLeft: sizes.screenWidth * 0.01,
    paddingBottom: sizes.screenWidth * 0.04,
  },

  addPhoneButtonStyling: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: colors.underlineColor,
    borderRadius: sizes.screenWidth * 0.95,
    height: sizes.screenHeight * 0.07,
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    marginLeft: sizes.screenWidth * 0.05,
    backgroundColor: colors.black,
  },
  textColor: {
    color: colors.white,
  },
  textalignment: {
    paddingLeft: sizes.screenWidth * 0.1,
    paddingBottom: sizes.screenWidth * 0.02,
    color: colors.black,
    fontWeight: '600',
  },
  myOwnFacepadding: {
    paddingRight: sizes.screenWidth * 0.1,
  },
  advancedContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.underlineColor,
    borderRadius: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    height: sizes.screenHeight * 0.08,
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    paddingLeft: sizes.screenWidth * 0.07,
    paddingRight: sizes.screenWidth * 0.05,
    margin: sizes.screenWidth * 0.05,
  },
  disconnectButtonStyling: {
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.accountpink,
    borderRadius: sizes.screenWidth * 0.95,
    height: sizes.screenHeight * 0.07,
    alignItems: 'center',
    width: sizes.screenWidth * 0.895,
    marginLeft: sizes.screenWidth * 0.05,
    backgroundColor: colors.accountLightpink,
  },
  textColorPink: {
    color: colors.accountpink,
  },
  arrowImage: {
    width: sizes.screenWidth * 0.027,
    height: sizes.screenHeight * 0.027,
  },

  textColorBlack: {
    color: colors.black,
    fontWeight: '500',
  },
  textColorgrey: {
    color: colors.colorDotDisableText,
    fontSize: fontSize.smallM,
  },
});
