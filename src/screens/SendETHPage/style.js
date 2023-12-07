import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainContainer: {
    marginTop: sizes.screenHeight * 0.04,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.screenWidth * 0.03,
    // paddingRight:sizes.screenWidth*0.0,
    // paddingVertical:sizes.screen*0.03,
    width: sizes.screenWidth * 0.85,
    height: sizes.screenHeight * 0.09,
    borderRadius: sizes.screenHeight * 0.05,
    borderWidth: sizes.screenHeight * 0.001,
    borderColor: colors.gray,
    fontWeight: '500',
    marginBottom: sizes.screenHeight * 0.03,
  },
  fieldHeading: {
    color: colors.black,
    fontWeight: '500',
    marginLeft: sizes.screenWidth * 0.07,
    marginBottom: sizes.screenHeight * 0.01,
  },
  subField: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cresoImg: {
    width: sizes.screenWidth * 0.09,
    height: sizes.screenHeight * 0.045,
    marginHorizontal: sizes.screenWidth * 0.01,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  black: {
    color: colors.black,
    fontWeight: '500',
  },
  EQASideText: {
    fontSize: fontSize.large,
  },
  EQA: {
    paddingHorizontal: sizes.screenWidth * 0.032,
    paddingVertical: sizes.screenHeight * 0.006,
    backgroundColor: colors.ethereumGray,
    borderRadius: sizes.screenHeight * 0.03,
    marginRight: sizes.screenWidth * 0.02,
  },
  subFieldText: {
    marginLeft: sizes.screenWidth * 0.02,
  },
  pasteButton: {
    paddingHorizontal: sizes.screenWidth * 0.032,
    paddingVertical: sizes.screenHeight * 0.007,
    backgroundColor: colors.purple,
    borderRadius: sizes.screenHeight * 0.03,
    marginRight: sizes.screenWidth * 0.02,
    color: colors.white,
  },
  balanceText: {
    paddingRight: sizes.screenWidth * 0.07,
  },
  button: {
    backgroundColor: colors.black,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    marginTop: sizes.screenHeight * 0.13,
    width: sizes.screenWidth * 0.85,
    height: sizes.screenHeight * 0.08,
    borderRadius: sizes.screenHeight * 0.04,
  },
  BtnText: {
    color: colors.white,
    marginLeft: sizes.screenWidth * 0.02,
  },

  //////////////

  searchFields: {
    color: colors.black,
  },

  coinIcons: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.12,
    width: sizes.screenWidth * 0.12,
  },

  transferBtn: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.055,
    width: sizes.screenWidth * 0.06,
  },

  inputAmount: {
    color: colors.black,
  },
});
