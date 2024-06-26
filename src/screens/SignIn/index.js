import React, { useEffect } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import images from '../../services/utilities/images';
import { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './style';
import { colors } from '../../services';
import backendURL, { BASE_URL } from '../../services/config/backendURL';
import { useDispatch } from 'react-redux';
import { handleTrue } from '../../store/isSignedInSlice';
import formatToJSON from '../../services/utilities/JsonLog';
import { handleAddToken } from '../../store/token';
import { googleLogin, loginApi, resendOTP } from '../../clientApi';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const [handleStatus, setHandleStatus] = useState('Login');
  const [hidePass, setHidePass] = useState(false);
  const [hideSignupPass, setHideSignUpPass] = useState(true);
  const [hideReEnterSignupPass, setHideReEnterSignUpPass] = useState(false);

  const [correctFormat, setCorrectFormat] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setCorrectFormat(validateEmail(text));
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const [authToken, setAuthToken] = useState('');

  const [error, setError] = useState('');

  const sendEmail = async () => {
    try {
      const res = await resendOTP(email);
      if (res) {
        navigation.navigate('EmailVerify', { email, authToken });
      }
    } catch (error) {
      setError('*Oops! Retry, please.');
    }
  };

  const handleSignIn = async () => {
    setLoader(true);
    if (email) {
      let updatedEmail = email.toLocaleLowerCase();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(updatedEmail)) {
        setError('*Please enter a valid email');
        setLoader(false);
      } else if (!password) {
        setError('*Please enter your password');
        setLoader(false);
      } else if (email && password) {
        setError('');
        const data = {
          email: email.toLowerCase(),
          password,
        };
        try {
          const res = await loginApi(data);
          if (res.status == 200) {
            const token = res?.data?.data?.token;
            setAuthToken(token);
            if (res?.data?.data?.isEmailVerified) {
              dispatch(handleAddToken(token));
            } else {
              await sendEmail();
            }
          } else {
            setError(res.data.message);
            setLoader(false);
          }
          setLoader(false);
        } catch (error) {
          console.log('error : ', error);
          setLoader(false);
        }
      } else {
        setError('*Incorrect email or password');
        setLoader(false);
      }
    } else {
      setError('*All fields are required');
    }
    setLoader(false);
  };

  const handleGoogleLogin = async () => {
    try {
      // const response = await googleLogin();
      // window.open(BASE_URL + '/api/auth/google');
      // console.log('response : ', response);
      // Linking.openURL(BASE_URL + '/api/auth/google');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS  === 'ios' ? 'padding' :'height' }>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Image source={images.landingPageLogo} style={styles.logoImg} />
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputField}>
          <TextInput
            placeholder="Your email"
            placeholderTextColor={colors.disabledBg2}
            secureTextEntry={hidePass ? true : false}
            style={styles.inputFieldText}
            value={email}
            onChangeText={(text) => handleEmailChange(text)}
          />
          {correctFormat ? (
            <Image source={images.emailCheck} style={styles.emailCheck} />
          ) : null}
        </View>
        <Text style={styles.label}>Password</Text>

        <View style={styles.inputField}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.disabledBg2}
            secureTextEntry={hideSignupPass ? true : false}
            style={styles.inputFieldText}
            value={password}
            onChangeText={(text) => setPassword(text)}
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
          </TouchableOpacity>
        </View>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.forgotPassContainer}>
          <Text
            style={styles.forgotPass}
            onPress={() => {
              navigation.navigate('ForgotPass');
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {loader ? (
          <View style={styles.BtnBlack}>
            <ActivityIndicator color={'white'} size={30} />
          </View>
        ) : (
          <TouchableOpacity style={styles.BtnBlack} onPress={handleSignIn}>
            <Text style={styles.BtnBlackText}>Login</Text>
            <Image source={images.rightArroww} style={styles.rightArroww} />
          </TouchableOpacity>
        )}

        <View style={styles.orView}>
          <View style={styles.divider} />
        </View>

        <TouchableOpacity style={styles.signInWith} onPress={handleGoogleLogin}>
          <Image source={images.signInG} style={styles.twtLogo} />
          <Text style={styles.neonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInWith}>
          <Image source={images.signInT} style={styles.twtLogo} />
          <Text style={styles.neonText}>Sign in with Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInWith}>
          <Image source={images.signInA} style={styles.twtLogo} />
          <Text style={styles.neonText}>Sign in with Apple</Text>
        </TouchableOpacity>
      </ImageBackground>
      </KeyboardAvoidingView>
      
    </SafeAreaView>
  );
}
