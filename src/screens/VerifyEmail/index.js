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
import Modal from 'react-native-modal';
import {verifyEmail} from '../../clientApi';

export default function VerifyEmail({navigation, route}) {
  // const {email} = route.params;
  const [value, setValue] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(50);
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [err, setErr] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const userToken = useSelector(state => state?.tokenSlice?.token);

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;
  const email = 'example@gmail.com';

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
    try {
      setLoader(true);
      const data = {email: email, otp: value};
      const res = await verifyEmail(data);
      console.log(formatToJSON(res));
    } catch (error) {
      console.log(error.message);
      setLoader(false);
    }
  };

  // const handleOTP = async () => {
  //   setLoader(true);
  //   console.log(value);

  //   var myHeaders = new Headers();
  //   myHeaders.append('auth_token', `"auth_token ${userToken}"`);
  //   myHeaders.append('Content-Type', 'application/json');
  //   myHeaders.append('Cookie', `auth_token=${userToken}`);
  //   var raw = JSON.stringify({
  //     email: email,
  //     otp: value,
  //   });

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow',
  //   };

  //   fetch(
  //     'https://creso-api-aea7820ba236.herokuapp.com/api/verify_email',
  //     requestOptions,
  //   )
  //     .then(response => response.text())
  //     .then(result => {
  //       console.log(result);
  //       // navigation.navigate('Home');
  //       setLoader(false);
  //     })
  //     .catch(error => {
  //       console.log('error', error);
  //       setErr(true);
  //       setErrorMsg(error);
  //       setLoader(false);
  //     });
  // };

  const handleHome = () => {};

  return (
    <SafeAreaView>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Image source={images.landingPageLogo} style={styles.logoImg} />

        <Text style={[styles.boldBlack, styles.emailVerifyText]}>
          An email with a verication code was just sent to
        </Text>
        <View style={styles.emailContainer}>
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
        {err ? <Text style={styles.errorMsg}>*{errorMsg}</Text> : null}

        {loader ? (
          <View style={styles.buttonField} onPress={handleOTP}>
            <View style={styles.button}>
              <ActivityIndicator color={'white'} size={30} />
            </View>
          </View>
        ) : (
          <TouchableOpacity style={styles.buttonField} onPress={handleOTP}>
            <Text style={styles.text}>Verify</Text>
            <Image source={images.rightArroww} style={styles.rightArroww} />
          </TouchableOpacity>
        )}
      </ImageBackground>
      <Modal
        isVisible={showModal}
        backdropOpacity={0.5}
        onBackButtonPress={() => {
          setShowModal(false);
        }}
        onBackdropPress={() => {
          setShowModal(false);
        }}>
        <View style={styles.modalCOntainer}>
          <View style={styles.modalBody}>
            <View style={styles.modalHr}></View>
            <Image
              source={images.verificationModalImg}
              style={styles.verificationModalImg}
            />
            <Text style={styles.textBold}>Email Verification Completed</Text>
            <TouchableOpacity style={styles.buttonField} onPress={handleHome}>
              <Text style={styles.text}>Go To Home Screen</Text>
              <Image source={images.rightArroww} style={styles.rightArroww} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
