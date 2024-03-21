import React, { useEffect, useState } from 'react';
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
import { styles } from './style';
import Header from '../../components/Header';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import BtnBlack from '../../components/BtnBlack';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { resendOTP, verifyEmail } from '../../clientApi';
import formatToJSON from '../../services/utilities/JsonLog';
import { handleAddToken } from '../../store/token';

export default function VerifyEmail({ navigation, route }) {
  const dispatch = useDispatch();

  const authToken = route?.params?.authToken;

  const { email } = route.params;
  const [value, setValue] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [err, setErr] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;

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
    try {
      if (value.length !== 6) {
        setErrorMsg('*Please enter the OTP.');
        setLoader(false);
      } else {
        const data = { email: email, otp: value };
        const res = await verifyEmail(data);
        if (res.status == 200) {
          // setAuthToken(res.data.data.token);
          setErrorMsg('');
          setLoader(false);
          // setShowModal(true);
          navigation.navigate('LetsGetStarted', { authToken });
        } else {
          setErrorMsg(res.data.message);
          setLoader(false);
        }
        setLoader(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoader(false);
    }
  };

  const handleResend = async () => {
    try {
      const response = await resendOTP(email);
      console.log('-=-=-=-=-=-=>', formatToJSON(response));
      if (response.status == 200) {
        setSeconds(50);
      } else {
        setErrorMsg(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleHome = () => {
    // dispatch(handleAddToken(authToken))
    navigation.navigate('LetsGetStarted', { authToken });
  };

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
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[
                  Platform.OS == 'ios' ? styles.cellIOS : styles.cell,
                  isFocused && styles.focusCell,
                ]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>

        <View style={styles.resendCodeText}>
          <Text style={styles.boldBlack}>Not Recieved? </Text>
          {seconds > 0 ? (
            <View>
              <Text style={styles.link}>Resend code {seconds}s</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.link}>Resend code</Text>
            </TouchableOpacity>
          )}
        </View>

        {errorMsg && <Text style={styles.errorMsg}>{errorMsg}</Text>}

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
        }}
      >
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
