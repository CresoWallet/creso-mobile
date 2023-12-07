import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  headingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: sizes.screenWidth * 0.07,
  },

  headingText: {
    color: colors.black,
    fontWeight: '900',
    fontSize: fontSize.h5,
  },

  headingRowImagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headingRowImage1: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.07,
    width: sizes.screenWidth * 0.07,
  },

  headingRowImage2: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.07,
    width: sizes.screenWidth * 0.07,
    marginLeft: sizes.screenWidth * 0.045,
  },

  textAboveCoinSwapBtn: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: '500',
    marginLeft: sizes.screenWidth * 0.15,
  },

  coinSwapBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.88,
    alignSelf: 'center',
    borderWidth: 1.5,
    borderColor: colors.disabledBg,
    borderRadius: sizes.screenHeight * 0.15,
    paddingRight: sizes.screenWidth * 0.03,
    margin: sizes.screenWidth * 0.025,
  },

  coinSwapBtnInnerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  coiImgContainer: {
    borderColor: colors.white,
    borderWidth: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenHeight * 0.08,
  },

  coiImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight * 0.055,
  },

  coinSwapBtnInnerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  coinSwapBtnText: {
    color: colors.black,
    fontWeight: '600',
  },

  dropdownIcon: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.025,
    marginLeft: sizes.screenWidth * 0.03,
    marginRight: sizes.screenWidth * 0.03,
  },

  youpayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.7,
    alignSelf: 'center',
    alignItems: 'center',
    top: sizes.screenHeight * 0.005,
  },

  leftTextAboveCoinSwapBtn: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: '500',
  },

  rightTextAboveCoinSwapBtn: {
    color: colors.disabledBg2,
    fontSize: fontSize.small,
  },

  coinYouPlaySwapBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.88,
    alignSelf: 'center',
    borderWidth: 1.5,
    borderColor: colors.disabledBg,
    borderRadius: sizes.screenHeight * 0.15,
    paddingRight: sizes.screenWidth * 0.05,
    paddingBottom: sizes.screenHeight * 0.002,
    margin: sizes.screenWidth * 0.025,
  },

  coinYouPlaySwapBtnInnerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  coiImagesContainer: {
    alignItems: 'flex-end',
    height: sizes.screenHeight * 0.084,
  },

  YouPlayBigImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight * 0.055,
  },

  coiSmallImgContainer: {
    borderColor: colors.white,
    borderWidth: sizes.screenWidth * 0.01,
    borderRadius: sizes.screenHeight * 0.08,
    bottom: sizes.screenWidth * 0.105,
    left: sizes.screenWidth * 0.015,
  },

  YouPlaySmallImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.062,
    height: sizes.screenHeight * 0.031,
    borderRadius: sizes.screenHeight * 0.08,
  },

  coinYouPlaySwapBtnInnerLeftTextContainer: {
    marginLeft: sizes.screenWidth * 0.03,
  },

  coinYouPlaySwapBtnInnerLeftTextBold: {
    fontWeight: '600',
    color: colors.black,
  },

  coinYouPlaySwapBtnInnerLeftTextNormal: {
    color: colors.disabledBg2,
  },

  coinYouPlaySwapBtnInnerRight: {
    backgroundColor: colors.disabledBg,
    // backgroundColor: '#EEEEF1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: sizes.screenWidth * 0.03,
    paddingRight: sizes.screenWidth * 0.03,
    paddingTop: sizes.screenWidth * 0.01,
    paddingBottom: sizes.screenWidth * 0.01,
    borderRadius: sizes.screenWidth * 0.5,
  },

  coinYouPlaySwapBtnInnerRightText: {
    fontWeight: '600',
    color: colors.black,
  },

  youGetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.7,
    alignSelf: 'center',
    alignItems: 'center',
    top: sizes.screenHeight * 0.004,
  },

  youGetText: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: '500',
  },

  showAllText: {
    color: colors.appTextPink,
    fontSize: fontSize.smallM,
  },

  recommendedSection: {
    // alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.88,
    alignSelf: 'center',
    borderWidth: 1.5,
    borderColor: colors.disabledBg,
    borderRadius: sizes.screenHeight * 0.05,
    padding: sizes.screenWidth * 0.035,
    paddingTop: sizes.screenWidth * 0.05,
    paddingBottom: sizes.screenWidth * 0.04,
  },

  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  firstRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bnbAndTImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.053,
    marginRight: sizes.screenWidth * 0.015,
  },

  recommendedSectionInnerLeft: {
    flexDirection: 'column',
  },

  recommendedSectionInnerLeftNormalTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  coinYouPlaySwapBtnInnerLeftTextNormal: {
    color: colors.disabledBg2,
    fontSize: fontSize.small,
  },

  verticalSeparator: {
    width: 1.5,
    backgroundColor: colors.disabledBg,
    marginLeft: sizes.screenWidth * 0.02,
    marginRight: sizes.screenWidth * 0.02,
    height: sizes.screenHeight * 0.017,
  },

  recommendedSectionInnerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  recommendedTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.disabledBg,
    height: sizes.screenWidth * 0.09,
    width: sizes.screenWidth * 0.23,
    paddingRight: sizes.screenWidth * 0.02,
    paddingLeft: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.06,
  },

  recommendedText: {
    color: colors.black,
    fontSize: fontSize.tiny,
    fontWeight: '600',
  },

  dropdownIconRecommendedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.disabledBg,
    height: sizes.screenWidth * 0.09,
    width: sizes.screenWidth * 0.09,
    marginLeft: sizes.screenWidth * 0.02,
    marginRight: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.06,
  },

  dropdownIconRecommended: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.025,
  },

  recommendedSectionSeparator: {
    height: 1.5,
    backgroundColor: colors.disabledBg,
    width: sizes.screenWidth * 0.78,
    alignSelf: 'center',
    margin: sizes.screenWidth * 0.04,
  },

  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  secondRowColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  secondRowColumnImg: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.058,
  },

  secondRowColumnText: {
    fontWeight: '600',
    color: colors.black,
    marginTop: 3,
  },

  secondRowColumnSeparator: {
    width: 1.5,
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.055,
  },

  swapBridgeImgContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    bottom: sizes.screenHeight * 0.545,
    height: sizes.screenHeight * 0.082,
  },

  swapBridgeImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.076,
  },

  swapBtnBlack: {
    width: sizes.screenWidth * 0.85,
    backgroundColor: colors.black,
    alignSelf: 'center',
    borderRadius: sizes.screenHeight * 0.2,
    flexDirection: 'row',
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.08,
    bottom: sizes.screenHeight * 0.056,
  },

  arrowRepeatImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.053,
  },

  swapBtnBlackText: {
    color: colors.white,
    marginLeft: sizes.screenWidth * 0.03,
    marginRight: sizes.screenWidth * 0.03,
    fontSize: fontSize.medium,
  },
});
