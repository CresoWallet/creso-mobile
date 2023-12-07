import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import {width} from 'react-native-dimension';

export const styles = StyleSheet.create({
  container: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    alignItems: 'center',
  },

  bitcoinLogoImage: {
    width: sizes.screenWidth * 0.16,
    height: sizes.screenHeight * 0.08,
    marginTop: sizes.screenHeight * 0.06,
  },
  bitcoinText: {
    fontSize: fontSize.h4,
    fontWeight: '800',
    color: colors.black,
    marginTop: sizes.screenHeight * 0.02,
    paddingBottom:sizes.screenHeight*0.03
  },
  bitcoinMainColumn: {
    flexDirection: 'column',
    width: sizes.screenWidth * 1,
    marginTop: sizes.screenHeight * 0.02,
  },

  fieldColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: sizes.screenWidth * 0.08,
    borderBottomColor: colors.underlineColor,
    borderBottomWidth: 2,
  },
  ArrowBitcoinImage: {
    width: sizes.screenWidth * 0.08,
    height: sizes.screenHeight * 0.02,
    marginRight: sizes.screenWidth * 0.08,
    marginTop: sizes.screenHeight * 0.02,
  },
  Network: {
    marginLeft: sizes.screenWidth * 0.08,
    borderBottomColor: colors.underlineColor,
    borderBottomWidth: 2,
  },
  block: {
    marginLeft: sizes.screenWidth * 0.08,
  },
  fieldText: {
    fontWeight: '900',
    color: colors.black,
    fontSize: fontSize.h6,
    marginTop: sizes.screenHeight * 0.02,
    paddingLeft: sizes.screenWidth * 0.01,
  },
  inputField: {
    fontSize: fontSize.h6,
    color: colors.textBitcoinColor,
  },
  fieldTextTop: {
    fontWeight: '900',
    color: colors.black,
    fontSize: fontSize.h6,
    paddingLeft: sizes.screenWidth * 0.01,
  },
  inputFieldTop: {
    fontSize: fontSize.h6,
    paddingLeft: sizes.screenWidth * 0.01,
    marginBottom: sizes.screenHeight * 0.01,
    marginTop: sizes.screenHeight * 0.01,
    color: colors.textBitcoinColor,
  },
});
