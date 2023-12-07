import React, {useState} from 'react';
import {ImageBackground, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export default function OTP({navigation}) {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;
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
            <Text style={styles.loginLink}
           >Resend</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.BtnBlack}
        onPress={() => {
            navigation.navigate("ResetPass")
          }}
        >
          <Text style={styles.BtnBlackText}>Continue</Text>
        </TouchableOpacity>


      </ImageBackground>
    </SafeAreaView>
  );
}
