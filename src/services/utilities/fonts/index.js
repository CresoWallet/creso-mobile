import {Platform} from 'react-native';
import {totalSize} from 'react-native-dimension';

const fontFamily = {
  appTextRegular: Platform.OS !== 'ios' ? 'sans-serif' : 'Arial',
  appTextHeading: Platform.OS !== 'ios' ? 'Roboto' : 'Arial',
  appTextLight: Platform.OS !== 'ios' ? 'sans-serif-light' : 'Arial',
  appTextMedium: Platform.OS !== 'ios' ? 'sans-serif-medium' : 'Arial',
  appTextCondensed: Platform.OS !== 'ios' ? 'sans-serif-condensed' : 'Arial',
};
const fontSize = {
  h1: totalSize(4.5),
  h2: totalSize(4),
  h3: totalSize(3.5),
  h4: totalSize(3),
  h5: totalSize(2.5),
  h7: totalSize(2.2),
  h6: totalSize(2),
  input: totalSize(1.75),
  extraLarge: totalSize(2.2),
  large: totalSize(2),
  medium: totalSize(1.75),
  regular: totalSize(1.6),
  smallM: totalSize(1.5),
  small: totalSize(1.25),
  tiny: totalSize(1),
  extraSmall: totalSize(0.8),
  xxsmall: totalSize(0.5),
};

export {fontFamily, fontSize};
