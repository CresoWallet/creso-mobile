import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
  },
  todoImg: {
    // position:"absolute",
    bottom: sizes.screenHeight * 0.05,
    // left:sizes.screenWidth*0.4
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.08,
    width: sizes.screenWidth * 0.08,
  },
  keylessText: {
    alignSelf: 'flex-start',
    paddingLeft: sizes.screenWidth * 0.11,
    bottom: sizes.screenHeight * 0.015,
    fontSize: fontSize.small,
  },
  keylessContainer: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
  },
  ethCard: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.31,
  },
  flexrow: {
    flexDirection: 'row',
  },
  firstCardField: {
    marginTop: sizes.screenHeight * 0.08,
    marginLeft: sizes.screenWidth * 0.07,
  },
  SecondCardField: {
    marginTop: sizes.screenHeight * 0.08,
    marginLeft: sizes.screenWidth * 0.2,
  },
  subHeading: {
    color: colors.black,
  },
  cardIconEye: {
    marginLeft: sizes.screenWidth * 0.02,
    height:sizes.screenHeight* 0.03,
    width:sizes.screenHeight* 0.04,
    resizeMode:'contain',
    // bottom: sizes.screenHeight * 0.0,
  },
  cardIconCopy: {
    marginLeft: sizes.screenWidth * 0.05,
    bottom: sizes.screenHeight * 0.005,
  },
  cardHeading: {
    color: colors.black,
    fontWeight: '500',
    fontSize: fontSize.medium,
  },

  cardHeading2: {
    fontWeight: '700',
    fontSize: fontSize.h7,
  },
  buttonField: {
    marginTop: sizes.screenWidth * 0.11,
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: sizes.screenWidth * 0.03,
  },
  button: {
    backgroundColor: colors.black,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.43,
    height: sizes.screenHeight * 0.07,
    borderRadius: sizes.screenHeight * 0.04,
  },
  BtnText: {
    color: colors.white,
    marginLeft: sizes.screenWidth * 0.02,
  },
  BalanceText: {
    fontSize: fontSize.h4,
    fontWeight: '600',
    color: colors.black,
    marginTop: sizes.screenHeight * 0.03,
    marginLeft: sizes.screenWidth * 0.02,
    marginBottom: sizes.screenHeight * 0.02,
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
    width: sizes.screenWidth * 0.44,
    height: sizes.screenHeight * 0.07,
    borderRadius: sizes.screenHeight * 0.04,
    borderWidth: sizes.screenHeight * 0.001,
    borderColor: colors.gray,
    fontWeight: '500',
    marginBottom: sizes.screenHeight * 0.03,
  },
  neonBtn: {
    backgroundColor: colors.neonGreen,
    borderWidth: sizes.screenHeight * 0.002,
    borderColor: colors.black,
  },
  columnSection: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoText: {
    marginLeft: sizes.screenWidth * 0.02,
    alignSelf: 'center',
    fontSize: fontSize.medium,
    color: colors.disabledBg2,
  },
  divider: {
    // backgroundColor:colors.gray,
    // marginVertical:sizes.screenHeight*0.01,
    // width:sizes.screenWidth*0.85,
    // height:sizes.screenWidth*0.002,
    marginLeft: sizes.screenWidth * 0.13,
    borderWidth: 0.2,
    borderColor: colors.disabledBg2,
    width: sizes.screenWidth * 0.9,
    marginVertical: sizes.screenWidth * 0.02,
  },

  textLight: {
    color: colors.disabledBg2,
  },

  boldText: {
    color: colors.black,
    fontWeight: '700',
    marginLeft: sizes.screenWidth * 0.02,
  },

  //////////////////

  transferBtn: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.055,
    width: sizes.screenWidth * 0.06,
  },

  coinIcons: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.12,
    width: sizes.screenWidth * 0.12,
  },
});
