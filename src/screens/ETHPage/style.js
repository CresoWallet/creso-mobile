import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
  },
  amountSection: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: sizes.screenWidth * 0.1,
    marginBottom: sizes.screenHeight * 0.05,
  },
  amountText: {
    marginLeft: sizes.screenWidth * 0.05,
    fontSize: fontSize.h5,
    fontWeight: '400',
    color: colors.black,
  },
  amount: {
    fontWeight: '800',
  },
  ethUSD: {
    marginLeft: sizes.screenWidth * 0.03,
    marginTop: sizes.screenWidth * 0.07,
    color: colors.disabledBg2,
  },
  networkSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
  },
  bolderText: {
    color: colors.black,
    fontWeight: '500',
  },
  divider: {
    // backgroundColor:colors.gray,
    marginVertical: sizes.screenHeight * 0.03,
    // width:sizes.screenWidth*0.85,
    // height:sizes.screenWidth*0.002,
    marginLeft: sizes.screenWidth * 0.07,
    borderWidth: 0.2,
    borderColor: colors.disabledBg2,
    width: sizes.screenWidth * 0.97,
  },
  ethPageImg: {
    marginTop: sizes.screenHeight * 0.1,
    marginBottom: sizes.screenHeight * 0.03,
    // width:sizes.screenWidth*0.33,
    // height:sizes.screenHeight*0.15
  },
  buttonField: {
    marginTop: sizes.screenWidth * 0.15,
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: colors.black,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    width: sizes.screenWidth * 0.4,
    height: sizes.screenHeight * 0.073,
    borderRadius: sizes.screenHeight * 0.035,
  },
  BtnText: {
    color: colors.white,
    marginLeft: sizes.screenWidth * 0.02,
  },

  ///////
  textLight: {
    color: colors.disabledBg2,
  },

  transferBtn: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.055,
    width: sizes.screenWidth * 0.06,
  },

  ethImgBorder: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.17,
    width: sizes.screenWidth * 0.17,
  },
});
