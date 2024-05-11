import {StyleSheet} from 'react-native';
import { sizes } from '../../services';

export const styles = StyleSheet.create({
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    marginTop: sizes.screenHeight * 0.15,
  },
  mainImage: {
    width: sizes.screenWidth * 0.54,
    height: sizes.screenHeight * 0.33,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  subText: {
    color: '#00000066',
    marginTop: sizes.screenWidth * 0.15,
    marginHorizontal: sizes.screenWidth * 0.25,
    textAlign: 'center',
    fontWeight: '600',
  },
});
