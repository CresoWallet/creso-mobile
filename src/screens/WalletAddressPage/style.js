import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
  },
  walletAddrBg: {
    marginTop: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.75,
    height: sizes.screenHeight * 0.695,
  },
  mainContainer: {
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.015,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ethMainnet: {
    width: sizes.screenWidth * 0.65,
  },
  ethMainnetImg: {
    width: sizes.screenHeight * 0.05,
    height: sizes.screenHeight * 0.05,
  },
  ethMainnetText: {
    paddingHorizontal: sizes.screenWidth * 0.03,
    color: colors.white,
    fontWeight: '500',
    fontSize: fontSize.large,
  },
  qrcode: {
    marginVertical: sizes.screenHeight * 0.075,
    width: sizes.screenWidth * 0.4,
    height: sizes.screenHeight * 0.2,
  },
  walletAddr: {
    marginTop: sizes.screenHeight * 0.01,
    color: colors.black,
    fontWeight: '500',
    fontSize: fontSize.large,
    marginBottom: sizes.screenHeight * 0.05,
  },
  copyButton: {
    backgroundColor: colors.neonGreen,
    paddingHorizontal: sizes.screenWidth * 0.06,
    width: sizes.screenWidth * 0.42,
    paddingVertical: sizes.screenWidth * 0.03,
    borderColor: colors.black,
    borderWidth: sizes.screenWidth * 0.003,
    borderRadius: sizes.screenWidth * 0.08,
    justifyContent: 'center',
  },
  copytext: {
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.02,
  },
  warningText: {
    color: colors.white,
    textAlign: 'center',
    width: sizes.screenWidth * 0.6,
    fontSize: fontSize.small,
    marginTop: sizes.screenHeight * 0.02,
    fontWeight: '500',
  },

  //////////////
  textLight: {
    color: colors.disabledBg2,
  },

  coinIcons: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.12,
    width: sizes.screenWidth * 0.12,
    backgroundColor: colors.disabledBg1,
    borderRadius: sizes.screenHeight * 0.1,
  },

  folderIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.06,
    width: sizes.screenWidth * 0.055,
  },
});
