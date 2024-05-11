import React, {useState} from 'react';
import {Image, ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Feather from 'react-native-vector-icons/Feather';

import { colors } from '../../services';

export default function ResetPass({navigation}) {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [hidePass, setHidePass] = useState(false);
  const [hideSignupPass, setHideSignUpPass] = useState(false);
  const [hideReEnterSignupPass, setHideReEnterSignUpPass] = useState(false);
  const CELL_COUNT = 6;
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'Reset Password'} />

     

        <Text style={styles.bodyText}>
        Enter a new password to reset the
password on your account.
        </Text>

       

        <View style={styles.inputField}>
          <TextInput
            placeholder="Enter New Password"
            placeholderTextColor={colors.disabledBg2}
            secureTextEntry={hideSignupPass ? true : false}
            style={styles.inputFieldText}
          />
          <TouchableOpacity onPress={() => setHideSignUpPass(!hideSignupPass)}>
            <Feather
              name={!hideSignupPass ? 'eye' : 'eye-off'}
              color={colors.disabledBg2}
              size={20}
              style={{
                alignSelf: 'flex-end',
              }}
            />
            {/* </TouchableOpacity> */}
          </TouchableOpacity>
        </View>
        <View style={styles.inputField}>
          <TextInput
            placeholder="Re-enter Password"
            placeholderTextColor={colors.disabledBg2}
            secureTextEntry={hideReEnterSignupPass ? true : false}
            style={styles.inputFieldText}
          />
          <TouchableOpacity
            onPress={() => setHideReEnterSignUpPass(!hideReEnterSignupPass)}>
            <Feather
              name={!hideReEnterSignupPass ? 'eye' : 'eye-off'}
              color={colors.disabledBg2}
              size={20}
              style={{
                alignSelf: 'flex-end',
              }}
            />
            {/* </TouchableOpacity> */}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.BtnBlack}
        onPress={() => {
            navigation.navigate("MyTabs")
          }}
        >
          <Text style={styles.BtnBlackText}>Submit</Text>
        </TouchableOpacity>


      </ImageBackground>
      </KeyboardAvoidingView>
     
    </SafeAreaView>
  );
}
