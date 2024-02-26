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
    marginTop: sizes.screenHeight * 0.01,
  },

  field: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.screenWidth * 0.03,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.08,
    borderRadius: sizes.screenHeight * 0.05,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },

  subField: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  subField2: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    maxWidth: sizes.screenWidth * 0.5,
    justifyContent: 'flex-end',
  },

  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: sizes.screenWidth * 0.07,
    marginVertical: 6,
  },

  typeText: {
    fontWeight: '500',
    fontSize: fontSize.regular,
    color: colors.disabledBg2,
  },

  typeTextBlack: {
    fontWeight: '500',
    fontSize: fontSize.medium,
    color: colors.black,
  },

  modalBodey: {
    backgroundColor: colors.white,
    paddingHorizontal: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.9,
    paddingVertical: sizes.screenHeight * 0.05,
    borderRadius: 16,
    maxHeight: sizes.screenHeight * 0.5,
  },

  modalHeading: {
    fontWeight: '600',
    fontSize: fontSize.large,
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.02,
    alignSelf: 'center',
  },

  modalHeading2: {
    fontWeight: '600',
    fontSize: fontSize.large,
    color: colors.black,
    alignSelf: 'center',
    width: sizes.screenWidth * 0.8,
  },

  typeOptionContainer: {
    width: sizes.screenWidth * 0.8,
    borderColor: colors.disabledBg,
    borderWidth: 1,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingVertical: sizes.screenHeight * 0.01,
    borderRadius: 8,
    marginVertical: sizes.screenHeight * 0.01,
  },

  typeOption: {
    fontWeight: '500',
    fontSize: fontSize.medium,
    color: colors.black,
  },

  fieldHeading: {
    color: colors.black,
    fontWeight: '500',
    marginLeft: sizes.screenWidth * 0.07,
    marginVertical: 12,
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
    flexWrap: 'nowrap',
    width: sizes.screenWidth * 0.26,
    height: sizes.screenHeight * 0.03,
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
    paddingHorizontal: sizes.screenWidth * 0.03,
    paddingVertical: 3,
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
    width: sizes.screenWidth * 0.85,
    height: sizes.screenHeight * 0.08,
    borderRadius: sizes.screenHeight * 0.04,
    position: 'absolute',
    bottom: sizes.screenHeight * 0.04,
  },
  BtnText: {
    color: colors.white,
    marginLeft: sizes.screenWidth * 0.02,
  },

  //////////////

  searchFields: {
    color: colors.black,
    width: sizes.screenWidth * 0.6,
    fontSize: fontSize.medium,
  },

  coinIcons: {
    resizeMode: 'contain',
    height: 36,
    width: 36,
  },

  transferBtn: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.055,
    width: sizes.screenWidth * 0.06,
  },

  inputAmount: {
    color: colors.black,
    fontSize: fontSize.medium,
  },

  textBold: {
    color: colors.black,
    fontWeight: '500',
    marginVertical: 10,
  },
});
