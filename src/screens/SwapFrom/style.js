import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  scrollViewRowContainer: {
    flexDirection: 'row',
    padding: sizes.screenWidth * 0.04,
    // paddingRight: sizes.screenWidth * 0.04,
    // paddingLeft: sizes.screenWidth * 0.04,
    // paddingTop: sizes.screenWidth * 0.04,
    // paddingBottom: sizes.screenWidth * 0.04,
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

  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: sizes.screenWidth * 0.02,
    width: sizes.screenWidth * 0.88,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.15,
    borderWidth: 1.5,
    borderColor: colors.disabledBg,
    marginBottom: sizes.screenWidth * 0.05,
    marginTop: sizes.screenWidth * 0.02,
  },

  textInput: {
    borderRadius: sizes.screenWidth * 0.15,
    width: sizes.screenWidth * 0.68,
    color: colors.black,
  },

  searchBlackIcon: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.14,
    height: sizes.screenWidth * 0.14,
  },

  rowSeparator: {
    height: 1.5,
    width: sizes.screenWidth * 0.83,
    backgroundColor: colors.disabledBg,
    alignSelf: 'flex-end',
    marginBottom: sizes.screenHeight * 0.01,
  },

  coinRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: sizes.screenWidth * 0.01,
    marginRight: sizes.screenWidth * 0.05,
    marginLeft: sizes.screenWidth * 0.05,
  },

  coinRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  coinRowLeftCoinContainer: {
    padding: 1,
    borderRadius: sizes.screenWidth * 0.15,
    borderWidth: 1.5,
    borderColor: colors.disabledBg,
    marginRight: sizes.screenWidth * 0.03,
  },

  coinRowLeftCoin: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.1,
    height: sizes.screenWidth * 0.1,
  },

  coinRowTextBold: {
    fontWeight: '700',
    color: colors.black,
    fontSize: fontSize.smallM,
  },

  coinRowTextLight: {
    color: colors.disabledBg2,
    fontSize: fontSize.small,
  },
});
