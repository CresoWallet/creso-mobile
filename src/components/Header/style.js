import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  headerContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.07,
    marginTop: sizes.screenHeight * 0.01,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: sizes.screenWidth * 0.06,
  },

  headerBackArrowImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.045,
  },

  headerHeadingText: {
    fontSize: fontSize.h5,
    fontWeight: '800',
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.05,
  },
});
