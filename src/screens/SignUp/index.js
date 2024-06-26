import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import images from '../../services/utilities/images';
import { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './style';
import { colors } from '../../services';
import { signUpAPI } from '../../clientApi';
import formatToJSON from '../../services/utilities/JsonLog';
import { useDispatch } from 'react-redux';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const [handleStatus, setHandleStatus] = useState('Login');
  const [hidePass, setHidePass] = useState(false);
  const [hideSignupPass, setHideSignUpPass] = useState(true);
  const [hideReEnterSignupPass, setHideReEnterSignUpPass] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);

  const [correctFormat, setCorrectFormat] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setCorrectFormat(validateEmail(text));
  };

  const handleSignUp = async () => {
    setLoader(true);
    if (!username) {
      setError('Please enter your Username');
      setLoader(false);
    } else if (email) {
      let updatedEmail = email.toLocaleLowerCase();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(updatedEmail)) {
        setError('Please enter a valid email');
        setLoader(false);
      } else if (!password) {
        setError('Please enter your password');
        setLoader(false);
      } else if (password.length < 8) {
        setError('Password must contain at least 8 digits');
        setLoader(false);
      } else if (!confirmPassword) {
        setError('Please confirm your password');
        setLoader(false);
      } else if (password === confirmPassword) {
        setError('');
        const signUpData = {
          username,
          email: email.toLowerCase(),
          password,
        };
        try {
          const res = await signUpAPI(signUpData);
          console.log('-==-=--==-', formatToJSON(res));
          if (res.status == 200) {
            const token = res?.data?.data?.token;
            navigation.navigate('EmailVerify', { email, authToken: token });
            setLoader(false);
          } else {
            setError(res.data.message);
          }
          setLoader(false);
        } catch (error) {
          setLoader(false);
        } finally {
          setLoader(false);
        }
      } else {
        setError('Password does not match');
        setLoader(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' :'height'}>
        <ScrollView>
        <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Image source={images.landingPageLogo} style={styles.logoImg} />

        <Text style={styles.label}>Username</Text>

        <View style={styles.inputField}>
          <TextInput
            placeholder="Username"
            placeholderTextColor={colors.disabledBg2}
            style={styles.inputFieldText}
            value={username}
            onChangeText={(text) => {
              setUsername(text);
            }}
          />
          <View />
        </View>

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
            onChangeText={(text) => {
              setPassword(text);
            }}
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

        <Text style={styles.label}>Confirm Password</Text>

        <View style={styles.inputField}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={colors.disabledBg2}
            secureTextEntry={hideReEnterSignupPass ? true : false}
            style={styles.inputFieldText}
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
            }}
          />
          <TouchableOpacity
            onPress={() => setHideReEnterSignUpPass(!hideReEnterSignupPass)}
          >
            <Feather
              name={!hideReEnterSignupPass ? 'eye' : 'eye-off'}
              color={colors.disabledBg2}
              size={20}
              style={{
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.errorText}>{error}</Text>
        {loader ? (
          <View style={styles.BtnBlack}>
            <ActivityIndicator color={'white'} size={30} />
          </View>
        ) : (
          <TouchableOpacity style={styles.BtnBlack} onPress={handleSignUp}>
            <Text style={styles.BtnBlackText}>Sign Up</Text>
            <Image source={images.rightArroww} style={styles.rightArroww} />
          </TouchableOpacity>
        )}

        <View style={styles.TandC}>
          <Image source={images.emailCheck} style={styles.emailCheck} />
          <Text style={styles.textBlack}>
            I have agreed to the Creso{' '}
            <Text style={styles.textPink}>Terms and Conditions</Text>
          </Text>
        </View>
      </ImageBackground>
        </ScrollView>
     
      </KeyboardAvoidingView>
      
    </SafeAreaView>
  );
}
