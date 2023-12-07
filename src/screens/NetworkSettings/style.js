import {StyleSheet} from 'react-native';
import {sizes, colors, fontSize} from '../../services';

export const styles = StyleSheet.create({
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
  },
  networkOption: {
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: sizes.screenWidth * 0.03,
    marginLeft: sizes.screenWidth * 0.1,
  },
  optionTitle: {
    color: colors.black,
    fontSize: fontSize.medium,
    marginLeft: sizes.screenWidth * 0.03,
    fontWeight: '500',
  },
  optionSubtext: {
    // marginLeft:sizes.screenWidth*0.3,
    // marginTop:sizes.screenHeight*0.01,
    textAlign: 'left',
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
  },
  arrow: {
    marginTop: sizes.screenHeight * 0.004,
    marginLeft: sizes.screenHeight * 0.015,
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.025,
    height: sizes.screenWidth * 0.025,
  },
  divider: {
    // backgroundColor:colors.gray,
    marginVertical: sizes.screenHeight * 0.01,
    // width:sizes.screenWidth*0.85,
    // height:sizes.screenWidth*0.002,
    marginLeft: sizes.screenWidth * 0.2,
    borderWidth: 0.2,
    borderColor: colors.disabledBg2,
    width: sizes.screenWidth * 0.9,
  },
  mainSection: {
    marginTop: sizes.screenHeight * 0.1,
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginTop: sizes.screenHeight * 0.16,
  },
  greenBtn: {
    backgroundColor: colors.neonGreen,
    paddingTop: sizes.screenHeight * 0.003,
    paddingHorizontal: sizes.screenHeight * 0.015,
    borderRadius: sizes.screenHeight * 0.03,
    marginLeft: sizes.screenHeight * 0.01,
    borderWidth: 1.5,
    borderColor: colors.black,
    color: colors.black,
    fontWeight: '500',
  },

  //////////////

  coinIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.05,
    width: sizes.screenHeight * 0.05,
  },
});
