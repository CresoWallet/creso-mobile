import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
    // marginBottom:sizes.screenHeight*0.5,
    resizeMode: 'repeat',
  },
  mainContainer: {
    width: sizes.screenWidth * 0.85,
  },
  headerHeadingText: {
    fontSize: fontSize.h5,
    fontWeight: '800',
    color: colors.black,
    // marginLeft: sizes.screenWidth * 0.05,
  },
  headerContainer: {
    height: sizes.screenHeight * 0.07,
    marginTop: sizes.screenHeight * 0.01,
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingLeft: sizes.screenWidth * 0.06,
  },
  headerImgField: {
    flexDirection: 'row',
  },
  icon: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.07,
    height: sizes.screenHeight * 0.04,
    marginLeft: sizes.screenWidth * 0.04,
  },
  smartWalletImg: {
    height: sizes.screenHeight * 0.251,
    width: sizes.screenWidth * 0.84,
    alignSelf: 'center',
  },

  capView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal:sizes.screenWidth*0.02,
    marginVertical: sizes.screenHeight * 0.03,
  },
  capViewSubSection: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.4,
    justifyContent: 'space-between',
    backgroundColor: colors.black,
    borderTopEndRadius: sizes.screenWidth * 0.1,
    borderTopStartRadius: sizes.screenWidth * 0.05,
  },
  capBox: {
    borderWidth: sizes.screenWidth * 0.001,
    borderRadius: sizes.screenWidth * 0.05,
    borderColor: colors.gray,
  },
  capMoneyText: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: '500',
    marginLeft: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.01,
  },
  capText: {
    color: colors.white,
    margin: sizes.screenWidth * 0.04,
    fontSize: fontSize.small,
    alignSelf: 'center',
    marginVertical: sizes.screenHeight * 0.02,
  },
  percentage: {
    flexDirection: 'row',
    marginLeft: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.01,
  },
  secondSection: {
    borderWidth: sizes.screenWidth * 0.001,
    borderColor: colors.gray,
    borderRadius: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.25,
    height: sizes.screenHeight * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondSectionIcon: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.07,
    height: sizes.screenHeight * 0.035,
    marginBottom: sizes.screenHeight * 0.01,
  },
  secondSectionText: {
    color: colors.black,
    fontWeight: '700',
  },
  textLoser: {
    color: colors.redLoss,
  },
  textGainer: {
    color: colors.greenGain,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topNFTtext: {
    color: colors.black,
    fontWeight: '500',
    fontSize: fontSize.large,
    bottom: sizes.screenHeight * 0.005,
    marginRight: sizes.screenWidth * 0.02,
    // marginBottom:sizes.screenWidth*0.5
  },
  topNFTSection: {
    // height:sizes.screenWidth*0.2,
    width: sizes.screenWidth * 0.8,
    justifyContent: 'space-between',
    marginVertical: sizes.screenWidth * 0.07,
  },
  thirdSectionImg: {
    width: sizes.screenWidth * 0.4,
    height: sizes.screenHeight * 0.2975,
    marginTop: sizes.screenHeight * 0.03,
  },
  boldText: {
    color: colors.black,
    fontWeight: '500',
    textAlign: 'center',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  NFTsection: {
    width: sizes.screenWidth * 0.2,
    marginVertical: sizes.screenHeight * 0.02,
    marginRight: sizes.screenWidth * 0.01,
  },
  nftIcon: {
    borderWidth: sizes.screenWidth * 0.002,
    borderRadius: sizes.screenWidth * 0.2,
    borderColor: colors.gray,
    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight * 0.06,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.01,
    padding: sizes.screenWidth * 0.05,
  },
  gasBurnBox: {
    marginLeft: sizes.screenWidth * 0.04,
  },
  whiteCorner: {
    // position: 'absolute',
    // left: sizes.screenWidth * 0.308,
    right: sizes.screenWidth * 0.068,
  },
  balanceType: {
    // backgroundColor:colors.black,
    color: colors.black,
    // justifyContent:'center',

    // flexDirection:'row',
    textAlign: 'center',
    paddingTop: sizes.screenWidth * 0.04,
    // justifyContent:"center",
    marginRight: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.405,
    height: sizes.screenHeight * 0.07,
    borderRadius: sizes.screenHeight * 0.04,
    borderWidth: sizes.screenHeight * 0.001,
    borderColor: colors.gray,
    fontWeight: '500',
    marginVertical: sizes.screenHeight * 0.015,
    marginBottom: sizes.screenHeight * 0.04,
  },
  neonBtn: {
    backgroundColor: colors.neonGreen,
    borderWidth: sizes.screenHeight * 0.002,
    borderColor: colors.black,
  },
  heading: {
    color: colors.black,
    fontWeight: '500',
  },

  leftPadding: {
    paddingLeft: sizes.screenWidth * 0.02,
  },
  divider: {
    // backgroundColor:colors.gray,
    marginBottom: sizes.screenHeight * 0.02,
    // width:sizes.screenWidth*0.85,
    // height:sizes.screenWidth*0.002,
    marginLeft: sizes.screenWidth * 0.15,
    borderWidth: 0.2,
    borderColor: colors.disabledBg2,
    width: sizes.screenWidth * 0.65,
    marginVertical: 0,
  },
  //   grayDot:{
  //     width:sizes.screenWidth*0.05,
  //     Height:sizes.screenHeight*0.001,
  //     borderRadius:sizes.screenWidth*0.03,
  //     borderRadius:sizes.screenHeight*0.03,
  //     backgroundColor:colors.gray,
  //     marginHorizontal:sizes.screenWidth*0.01
  //   },
  //   scrollThing:{
  //     flexDirection:'row',

  //   }

  marginBtn: {
    marginBottom: sizes.screenHeight * 0.2,
  },

  textLight: {
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
  },
});
