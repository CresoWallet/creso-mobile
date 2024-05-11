import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {colors} from '../../services';

export default function ForgotPass({navigation}) {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ImageBackground
            source={images.landingPageBGImg}
            style={styles.bgImage}>
            <Header title={'Forgot Password'} />

            <Image source={images.forgotPassImg} style={styles.forgotPassImg} />

            <Text style={styles.bodyText}>
              Please enter your email to receive a verification code
            </Text>

            <View style={styles.inputField}>
              <TextInput
                placeholder="Email"
                placeholderTextColor={colors.disabledBg2}
                style={styles.inputFieldText}
              />
            </View>
            <TouchableOpacity
              style={styles.BtnBlack}
              onPress={() => {
                navigation.navigate('OTP');
              }}>
              <Text style={styles.BtnBlackText}>Send</Text>
            </TouchableOpacity>
          </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
