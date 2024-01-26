import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
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
import {useDispatch, useSelector} from 'react-redux';

export default function OTP({navigation}) {
  const [value, setValue] = useState('');
  const userToken = useSelector(state => state?.tokenSlice?.token);

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;

  const handleOTP = async () => {
    console.log(value);

    var myHeaders = new Headers();
    myHeaders.append('auth_token', `"auth_token ${userToken}"`);
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Cookie', `auth_token=${userToken}`);
    var raw = JSON.stringify({
      otp: value,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://core.creso.io/api/verifyOTP', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'OTP'} />

        <Text style={styles.bodyText}>
          You would’ve received an OTP on your {'\n'}
          email ***@gmail.com
        </Text>

        <View style={styles.padding}>
          <CodeField
            ref={ref}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>

        <View style={styles.loginTextView}>
          <Text style={styles.loginText}>Didn’t receive the OTP? </Text>
          <TouchableOpacity>
            <Text style={styles.loginLink}>Resend</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.BtnBlack}
          onPress={() => {
            handleOTP();
            // navigation.navigate("ResetPass")
          }}>
          <Text style={styles.BtnBlackText}>Continue</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
