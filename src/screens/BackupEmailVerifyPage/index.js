import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../services/utilities/images';
import {styles} from './style';
import Header from '../../components/Header';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import BtnBlack from '../../components/BtnBlack';
import {useSelector} from 'react-redux';

export default function BackupEmailVerifyPage({navigation, route}) {
  const [value, setValue] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(50);
  const [loader, setLoader] = useState(false);

  const userToken = useSelector(state => state?.tokenSlice?.token);

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;
  const {email} = route.params;
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const handleOTP = async () => {
    setLoader(true);
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

    fetch(
      'https://creso-b02eab9f8c40.herokuapp.com/api/verifyOTP',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        console.log(result);
        navigation.navigate('BackupPrivacyPolicy');
        setLoader(false);
      })
      .catch(error => {
        console.log('error', error);
        setLoader(false);
      });
  };

  return (
    <SafeAreaView>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'Backup'} />
        <Image style={styles.stages} source={images.emailVerifyStage} />
        <View style={styles.stagesText}>
          <Text style={[styles.stagesText1, styles.boldBlack]}>Email</Text>
          <Text style={styles.stagesText2}>FaceMap</Text>
          <Text style={styles.stagesText3}>Recovery Key</Text>
          <Text style={styles.stagesText4}>Backup</Text>
        </View>

        <Text style={[styles.boldBlack, styles.emailVerifyText]}>
          An email with a verication code was just sent to
        </Text>
        <View>
          <Text style={styles.email}>{email}</Text>
        </View>

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
                style={[
                  Platform.OS == 'ios' ? styles.cellIOS : styles.cell,
                  isFocused && styles.focusCell,
                ]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>

        <View style={styles.resendCodeText}>
          <Text style={styles.boldBlack}>Not Recieved? </Text>
          <TouchableOpacity>
            <Text style={styles.link}>Resend code {seconds}s</Text>
          </TouchableOpacity>
        </View>

        {loader ? (
          <View style={styles.buttonField} onPress={handleOTP}>
            <View style={styles.button}>
              <ActivityIndicator
                style={{marginTop: 20}}
                color={'white'}
                size={30}
              />
            </View>
          </View>
        ) : (
          <TouchableOpacity style={styles.buttonField} onPress={handleOTP}>
            <View style={styles.button}>
              <Text style={styles.text}>Next</Text>
            </View>
          </TouchableOpacity>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}
