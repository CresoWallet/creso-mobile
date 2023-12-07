import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  playIconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.05,
    right: sizes.screenWidth * 0.02,
  },

  playIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.075,
  },

  playIconTextContainer: {
    right: sizes.screenWidth * 0.04,
  },

  playIconCresoText: {
    fontWeight: '400',
    color: colors.black,
    fontSize: fontSize.h2,
    right: sizes.screenWidth * 0.005,
    bottom: sizes.screenHeight * 0.005,
  },

  playIconVersionText: {
    fontSize: fontSize.smallm,
    bottom: sizes.screenHeight * 0.009,
    color: colors.disabledBg2,
  },

  warningRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.02,
    marginLeft: sizes.screenWidth * 0.07,
    marginRight: sizes.screenWidth * 0.06,
  },

  warningImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    bottom: sizes.screenHeight * 0.003,
  },

  warningText: {
    color: colors.disabledBg2,
    marginLeft: sizes.screenWidth * 0.02,

    fontSize: fontSize.small,
  },

  updateBottonBgContainer: {
    height: sizes.screenHeight * 0.1,
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.03,
  },

  updateBottonBg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.85,
    height: sizes.screenHeight * 0.065,
    alignItems: 'center',
    justifyContent: 'center',
  },

  updateBottonText: {
    color: Colors.black,
    fontWeight: '500',
  },

  aboutUsbottomRows: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: sizes.screenWidth * 0.05,
    marginRight: sizes.screenWidth * 0.05,
  },

  aboutUsbottomRowText: {
    color: colors.black,
    fontWeight: '600',
  },

  autoLockRowRightArrow: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
  },

  hrRight: {
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.001,
    marginTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.95,
    alignSelf: 'flex-end',
  },
});
