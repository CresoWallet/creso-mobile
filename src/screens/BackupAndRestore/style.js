import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.white,
  },

  securityBgImgContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.4,
  },

  securityBgImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.3,
    backgroundColor: colors.white,
  },

  bottomSection: {
    flexDirection: 'column',
  },

  autoLockRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  autoLockRowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  autoLockImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.053,
  },

  autoLockText: {
    color: colors.black,
    fontWeight: '600',
    marginLeft: sizes.screenHeight * 0.01,
  },

  autoLockRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  autoLockNeverText: {
    fontWeight: '600',
    color: colors.textBlue,
  },

  autoLockRowRightArrow: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
  },

  hrRight: {
    backgroundColor: colors.disabledBg,
    height: 1,
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.85,
    alignSelf: 'flex-end',
  },
});
