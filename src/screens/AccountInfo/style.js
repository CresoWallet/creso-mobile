import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  accountTopcontainer: {
    // backgroundColor:'red',
    // paddingLeft:sizes.screenWidth * 0.13,
    // paddingTop:sizes.screenHeight * 0.05
  },
  accountTopcontainerText: {
    color: colors.black,
    fontSize: fontSize.h3,
    fontWeight: '700',
  },

  profileMaincontainer: {
    flexDirection: 'column',
    padding: sizes.screenWidth * 0.09,
  },
  profilecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.04,
  },

  profilecontainerText: {
    // paddingTop: sizes.screenHeight * 0.026,
    marginLeft: sizes.screenWidth * 0.03,
  },

  profilecontainerEmail: {
    marginTop: sizes.screenHeight * 0.005,
  },

  profilecontainerLastSeen: {
    marginTop: sizes.screenHeight * 0.03,
  },

  textSamuel: {
    fontSize: fontSize.h6,
    fontWeight: '700',
    color: colors.black,
  },

  textSamuelEmail: {
    fontSize: fontSize.smallM,
    color: colors.textBitcoinColor,
  },
  textSamuelLastSeen: {
    fontSize: fontSize.small,
    color: colors.textBitcoinColor,
  },

  dateColorChange: {
    color: colors.black,
    fontSize: fontSize.smallM,
  },
  accountSection: {
    flexDirection: 'row',
  },
  accountView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: sizes.screenHeight * 0.04,
    alignItems: 'center',
  },
  profileImage: {
    width: sizes.screenWidth * 0.054,
    height: sizes.screenHeight * 0.028,
  },

  userProfileHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: sizes.screenWidth * 0.6,
  },

  userProfilelanguageContainer: {
    paddingRight: sizes.screenWidth * 0.02,
    width: sizes.screenWidth * 0.425,
  },

  userProfileCurrencyContainer: {
    paddingRight: sizes.screenWidth * 0.02,
    width: sizes.screenWidth * 0.47,
  },

  textColorBlue: {
    color: colors.textBlue,
  },

  userProfileHeading: {
    fontSize: fontSize.medium,
    fontWeight: '500',
    color: colors.black,
  },
  arrowImage: {
    width: sizes.screenWidth * 0.027,
    height: sizes.screenHeight * 0.027,
  },
  horizontalLine: {
    marginTop: sizes.screenHeight * 0.03,
    borderBottomColor: colors.underlineColor,
    borderBottomWidth: 2,
    width: sizes.screenWidth * 0.95,
  },
  marginBtm: {
    marginBottom: sizes.screenHeight * 0.12,
  },

  ///////////////

  accountProfilePic: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.15,
    width: sizes.screenHeight * 0.15,
  },
});
