import {Dimensions, Platform, StatusBar} from 'react-native';
import {totalSize} from 'react-native-dimension';

const {width, height} = Dimensions.get('window');

const statusBarHeight = Platform.select({
  ios: height * 0.05,
  android: StatusBar.currentHeight,
});
const headerHeight = Platform.select({
  ios: height * 0.08,
  android: height * 0.1,
});
const tabBarHeight = Platform.select({
  ios: height * 0.07,
  android: height * 0.07,
});

// Used via Metrics.baseMargin
const sizes = {
  marginBottom: height * 0.025,
  marginTop: height * 0.025,
  marginHorizontal: width * 0.05,
  marginVertical: height * 0.025,
  TinyMargin: totalSize(0.5),
  smallMargin: totalSize(1),
  baseMargin: totalSize(2),
  doubleBaseMargin: totalSize(5),

  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  buttonRadius: 100,
  modalRadius: 15,
  cardRadius: 15,
  inputRadius: 15,
  wrapperRadius: 25,

  icons: {
    xxlSmall: totalSize(0.5),
    extraSmall: totalSize(1),
    tiny: totalSize(1.5),
    small: totalSize(2),
    medium: totalSize(2.5),
    large: totalSize(3),
    xl: totalSize(4),
    xxl: totalSize(5),
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 100,
  },
};

export {sizes};
