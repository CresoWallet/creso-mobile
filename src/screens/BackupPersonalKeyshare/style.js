import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  bgImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    alignItems: 'center',
  },
  stages: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.09,
    marginTop: sizes.screenHeight * 0.02,
    left: sizes.screenWidth * 0.01,
  },
  stagesText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: sizes.screenWidth * 0.9,
  },

  stagesText1: {
    left: sizes.screenWidth * 0.01,
    color: colors.black,
    fontWeight: '600',
  },
  stagesText2: {
    left: sizes.screenWidth * 0.04,
    color: colors.black,
    fontWeight: '600',
  },
  stagesText3: {
    left: sizes.screenWidth * 0.02,
    color: colors.black,
    fontWeight: '600',
  },

  stagesText4: {
    left: sizes.screenWidth * 0.01,
    color: colors.black,
    fontWeight: '600',
  },
  boldBlack: {
    color: colors.black,
    fontWeight: '500',
  },

  link: {
    color: colors.redLoss,
    fontWeight: '500',
  },

  button: {
    backgroundColor: colors.black,
    color: colors.white,
    width: sizes.screenWidth * 0.93,
    height: sizes.screenHeight * 0.08,
    borderRadius: sizes.screenHeight * 0.04,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    paddingTop: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
  },
  buttonField: {
    position: 'absolute',
    marginTop: sizes.screenHeight * 0.87,
  },
  textHeading: {
    color: colors.black,

    fontSize: fontSize.h4,
    fontWeight: '800',
    marginBottom: sizes.screenHeight * 0.02,
  },
  textBody: {
    width: sizes.screenWidth * 0.85,
    marginBottom: sizes.screenHeight * 0.02,
    textAlign: 'center',
    marginBottom: sizes.screenHeight * 0.05,
    color: colors.disabledBg2,
  },
  image: {
    width: sizes.screenWidth * 0.767,
    height: sizes.screenHeight * 0.29,
    right: sizes.screenWidth * 0.01,
  },

  inputField: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: sizes.screenHeight * 0.1,
    marginVertical: sizes.screenHeight * 0.02,
    height: sizes.screenHeight * 0.07,
    justifyContent: 'center',
  },

  input: {
    color: colors.black,
    fontSize: fontSize.medium,
    marginLeft: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.8,
  },
});
