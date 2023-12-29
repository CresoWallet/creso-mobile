import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  logoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.035,
    marginBottom: sizes.screenHeight * 0.035,
    paddingLeft: sizes.screenWidth * 0.08,
    paddingRight: sizes.screenWidth * 0.04,
  },

  logoImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.035,
    width: sizes.screenWidth * 0.25,
    // backgroundColor: colors.disabledBg2,
  },

  logoRowImgRightContainer: {
    flexDirection: 'row',
  },

  logoRowImgRight: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.035,
    width: sizes.screenWidth * 0.07,
    marginRight: sizes.screenWidth * 0.04,
    // backgroundColor: colors.disabledBg2,
  },

  homeCardImg: {
    width: sizes.screenWidth * 0.93,
    height: sizes.screenHeight * 0.256,
  },

  homeCardText1: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    alignSelf: 'flex-start',
    top: sizes.screenHeight * 0.06,
    left: sizes.screenWidth * 0.13,
  },
  homeCardText2: {
    color: colors.black,
    fontSize: fontSize.h7,
    fontWeight: '600',
    alignSelf: 'center',
    top: sizes.screenHeight * 0.164,
    right: sizes.screenWidth * 0.07,
  },

  scrollViewRowContainer: {
    flexDirection: 'row',
    paddingRight: sizes.screenWidth * 0.02,
    paddingLeft: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.04,
  },

  scrollViewAddItemContainer: {
    alignItems: 'center',
    margin: sizes.screenWidth * 0.02,
    marginLeft: sizes.screenWidth * 0.04,
  },

  addIcon: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.17,
    height: sizes.screenWidth * 0.17,
  },

  dottedLine: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.08,
    margin: 3,
    top: 8,
  },

  scrollViewItemContainer: {
    alignItems: 'center',
    margin: sizes.screenWidth * 0.02,
  },

  coinIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.screenWidth * 0.17,
    height: sizes.screenWidth * 0.17,
    borderRadius: sizes.screenWidth * 0.1,
    borderWidth: 1,
    borderColor: colors.disabledBg,
  },

  coinIconContainer2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.screenWidth * 0.17,
    height: sizes.screenWidth * 0.17,
    borderRadius: sizes.screenWidth * 0.1,
    borderWidth: 1,
    borderColor: colors.black,
  },

  tickMarkIcon: {
    position: 'absolute',
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.055,
    bottom: sizes.screenHeight * 0.036,
    left: sizes.screenWidth * 0.11,
  },

  coinIcons: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.08,
  },

  scrollViewItemTextBold: {
    fontSize: fontSize.small,
    fontWeight: '600',
    color: colors.black,
    marginTop: sizes.screenHeight * 0.01,
  },

  scrollViewItemTextLight: {
    fontSize: fontSize.small,
    color: colors.disabledBg2,
    fontWeight: '600',
  },

  rowSeparator: {
    height: 1.5,
    width: sizes.screenWidth * 0.92,
    backgroundColor: colors.disabledBg,
    alignSelf: 'flex-end',
    marginTop: sizes.screenHeight * 0.019,
    marginBottom: sizes.screenHeight * 0.019,
  },

  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: sizes.screenWidth * 0.08,
    paddingLeft: sizes.screenWidth * 0.08,
    marginTop: sizes.screenHeight * 0.03,
  },

  textRowRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textRowBold: {
    fontSize: fontSize.large,
    fontWeight: '700',
    color: colors.black,
  },

  textRowPinkPlus: {
    fontSize: 20,
    fontWeight: '300',
    color: colors.appTextPink,
    marginLeft: sizes.screenWidth * 0.02,
    marginRight: sizes.screenWidth * 0.02,
  },
  textRowPink: {
    fontSize: fontSize.smallM,
    color: colors.appTextPink,
  },

  walletRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: sizes.screenWidth * 0.08,
    paddingRight: sizes.screenWidth * 0.08,
    marginTop: sizes.screenHeight * 0.01,
  },

  walletRowContainerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  walletIconBlack: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.13,
  },

  walletRowLeftTextContainer: {
    marginLeft: sizes.screenWidth * 0.03,
  },

  walletRowTextBold: {
    color: colors.black,
    fontWeight: '700',
  },

  walletRowTextLight: {
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
  },

  walletRowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  folderIcon: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.05,
  },

  iconSeparator: {
    width: 1,
    height: sizes.screenHeight * 0.03,
    backgroundColor: colors.disabledBg,
    marginRight: sizes.screenWidth * 0.04,
    marginLeft: sizes.screenWidth * 0.04,
  },

  rightArrowIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.025,
    // marginRight: sizes.screenWidth * 0.02,
    // marginLeft: sizes.screenWidth * 0.03,
  },

  coinRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: sizes.screenWidth * 0.08,
    marginLeft: sizes.screenWidth * 0.14,
  },

  coinRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ethImg: {
    height: sizes.screenWidth * 0.1,
    width: sizes.screenWidth * 0.1,
    marginRight: sizes.screenWidth * 0.02,
  },

  coinRowLeftText: {
    fontSize: fontSize.smallM,
    color: colors.disabledBg2,
  },

  coinRowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  coinRowRightTextLight: {
    fontSize: fontSize.small,
    color: colors.disabledBg2,
  },

  coinRowRightTextBold: {
    fontSize: fontSize.smallm,
    color: colors.black,
    fontWeight: '700',
    marginLeft: sizes.screenWidth * 0.02,
  },

  ///////////////////////////////////////////////////

  modal: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  modalContent: {
    width: sizes.screenWidth * 1,
    height: sizes.screenHeight * 0.55,
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
    // marginBottom: sizes.screenWidth * 0.06,
    marginTop: sizes.screenWidth * 0.06,
  },

  ethereumMainnetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 2,
    marginBottom: sizes.screenWidth * 0.03,
  },

  ethereumMainnetImg: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.06,
    width: sizes.screenWidth * 0.06,
  },

  ethereumMainnetText: {
    fontSize: fontSize.small,
    marginLeft: sizes.screenWidth * 0.025,
    fontWeight: '600',
    color: colors.black,
  },

  walletSection: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.86,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    borderRadius: sizes.screenWidth * 0.06,
    justifyContent: 'center',
    paddingBottom: sizes.screenWidth * 0.05,
    paddingTop: sizes.screenWidth * 0.05,
    marginTop: sizes.screenWidth * 0.04,
  },

  walletTextSection: {
    width: sizes.screenWidth * 0.64,
    marginLeft: sizes.screenWidth * 0.015,
  },

  walletSectionFirstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  walletSectionFirstRowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  walletTextBold: {
    color: colors.black,
    fontWeight: '700',
  },

  walletTextLight: {
    color: colors.disabledBg2,
    fontSize: fontSize.small,
  },

  walletTextBoldSmall: {
    color: colors.black,
    fontWeight: '700',
    fontSize: fontSize.small,
  },

  walletTextBoldSmallContainer: {
    paddingLeft: sizes.screenWidth * 0.04,
    paddingRight: sizes.screenWidth * 0.04,
    paddingTop: sizes.screenWidth * 0.02,
    paddingBottom: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.06,
    marginRight: sizes.screenWidth * 0.02,
    backgroundColor: colors.disabledBg,
  },

  images: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.1,
    height: sizes.screenWidth * 0.1,
  },

  walletTextSmall: {
    fontSize: fontSize.tiny,
    color: colors.disabledBg2,
    marginTop: sizes.screenWidth * 0.04,
  },

  ///////////////

  modalText: {
    fontSize: fontSize.smallM,
    fontWeight: '500',
    color: colors.disabledBg2,
    textAlign: 'justify',
  },

  modalTextPink: {
    fontSize: fontSize.small,
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

  warningRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.87,
    margin: sizes.screenWidth * 0.04,
  },

  warningImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    marginRight: sizes.screenWidth * 0.01,
  },

  warningText: {
    color: colors.disabledBg2,
    marginLeft: sizes.screenWidth * 0.01,
    fontSize: fontSize.tiny,
    width: sizes.screenWidth * 0.78,
    textAlign: 'justify',
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.74,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.015,
  },

  nameRowText: {
    color: colors.black,
    fontWeight: '700',
    fontSize: fontSize.small,
  },

  nameRowInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.85,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.disabledBg,
    borderRadius: sizes.screenWidth * 0.15,
    paddingTop: sizes.screenHeight * 0.01,
    paddingBottom: sizes.screenHeight * 0.01,
    paddingLeft: sizes.screenWidth * 0.04,
    paddingRight: sizes.screenWidth * 0.05,
  },

  nameRowTextInput: {
    color: colors.black,
    fontWeight: '700',
    fontSize: fontSize.smallM,
    width: sizes.screenWidth * 0.63,
  },

  nameRowTextInputLeft: {
    color: colors.black,
    fontWeight: '700',
    fontSize: fontSize.small,
    backgroundColor: colors.disabledBg,
    paddingTop: sizes.screenHeight * 0.008,
    paddingBottom: sizes.screenHeight * 0.008,
    paddingLeft: sizes.screenWidth * 0.03,
    paddingRight: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenHeight * 0.1,
  },

  modalCheckMarkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.87,
    marginTop: sizes.screenHeight * 0.015,
  },

  modalCheckMark: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.022,
    width: sizes.screenHeight * 0.022,
    marginRight: sizes.screenWidth * 0.02,
  },
  modalCheckText: {
    fontSize: fontSize.small,
    fontWeight: '600',
    color: colors.black,
  },
  backupModalInsideContaienr: {
    backgroundColor: 'rgba(178, 173, 208,.9)',
    height: sizes.screenHeight * 0.17,
    borderTopEndRadius: sizes.screenWidth * 0.13,
    borderTopLeftRadius: sizes.screenWidth * 0.13,
    top: sizes.screenHeight * 0.04,
  },
  backupModalLine: {
    width: sizes.screenWidth * 0.18,
    height: sizes.screenHeight * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    borderWidth: sizes.screenWidth * 0.01,
    borderColor: colors.white,
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.008,
  },
  backupModalImg: {
    width: sizes.screenWidth * 0.25,
    height: sizes.screenHeight * 0.09,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bkUpText1: {
    fontWeight: '600',
    fontSize: fontSize.h6,
    color: colors.black,
  },
  bkUpText2: {
    color: 'red',
    width: sizes.screenWidth * 0.5,
    fontSize: fontSize.small,
    color: colors.gray,
    marginTop: sizes.screenHeight * 0.003,
  },

  popUpBody: {
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.3,
    borderRadius: sizes.screenHeight * 0.03,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: sizes.screenHeight * 0.03,
  },

  checkmark: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.06,
    width: sizes.screenHeight * 0.06,
  },

  popUpText: {
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: '600',
    width: sizes.screenWidth * 0.7,
    textAlign: 'center',
    alignSelf: 'center',
  },

  popUpBtn: {
    backgroundColor: colors.black,
    height: sizes.screenHeight * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.screenWidth * 0.4,
    borderRadius: sizes.screenHeight * 0.1,
  },

  popUpBtnText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: '600',
  },
});
