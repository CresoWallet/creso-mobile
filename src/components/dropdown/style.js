import { StyleSheet } from 'react-native';
import { colors, fontFamily, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
  container: {
    height: sizes.screenHeight * 0.08,
    justifyContent: 'center',
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderWidth: 1,
    borderRadius: sizes.screenHeight * 0.1,
    borderColor: colors.disabledBg,
    marginVertical: sizes.screenHeight * 0.01,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  option: {
    padding: 10,
  },
});
