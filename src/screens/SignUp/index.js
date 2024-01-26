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
} from 'react-native';
import images from '../../services/utilities/images';
import {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './style';
import {colors} from '../../services';
import axios from 'axios';
import backendURL from '../../services/config/backendURL';
import {signUpAPI} from '../../clientApi';
import formatToJSON from '../../services/utilities/JsonLog';
import {useDispatch} from 'react-redux';
import {handleTrue} from '../../store/isSignedInSlice';

export default function SignUp({navigation}) {
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

  const handleSignUp = async () => {
    setLoader(true);
    if (!username) {
      setError('Please enter your name');
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
          email: email.toLowerCase(),
          username,
          password,
        };
        try {
          const res = await signUpAPI(signUpData);
          if (res) {
            console.log(res);
            console.log(formatToJSON(res));
            dispatch(handleTrue());
          }

          setLoading(false);
        } catch (error) {
          console.log(error);
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
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Image source={images.landingPageLogo} style={styles.logoImg} />

        <Text style={styles.text1}>Sign Up</Text>
        <View style={styles.inputField}>
          <TextInput
            placeholder="Your name"
            placeholderTextColor={colors.disabledBg2}
            style={styles.inputFieldText}
            value={username}
            onChangeText={text => {
              setUsername(text);
            }}
          />
          <View />
        </View>
        <View style={styles.inputField}>
          <TextInput
            placeholder="Your email"
            placeholderTextColor={colors.disabledBg2}
            style={styles.inputFieldText}
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.disabledBg2}
            secureTextEntry={hideSignupPass ? true : false}
            style={styles.inputFieldText}
            value={password}
            onChangeText={text => {
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
            {/* </TouchableOpacity> */}
          </TouchableOpacity>
        </View>
        <View style={styles.inputField}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={colors.disabledBg2}
            secureTextEntry={hideReEnterSignupPass ? true : false}
            style={styles.inputFieldText}
            value={confirmPassword}
            onChangeText={text => {
              setConfirmPassword(text);
            }}
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
        <Text style={styles.errorText}>{error}</Text>
        {loader ? (
          <View style={styles.BtnBlack} onPress={handleSignUp}>
            <ActivityIndicator color={'white'} size={30} />
          </View>
        ) : (
          <TouchableOpacity style={styles.BtnBlack} onPress={handleSignUp}>
            <Text style={styles.BtnBlackText}>Sign Up</Text>
          </TouchableOpacity>
        )}

        <View style={styles.loginTextView}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity>
            <Text
              style={styles.loginLink}
              onPress={() => {
                navigation.navigate('SignIn');
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orView}>
          <View style={styles.divider} />
          <Text style={styles.orViewText}>OR</Text>
          <View style={styles.divider} />
        </View>

        <TouchableOpacity style={styles.neon}>
          <Text style={styles.neonText}>Sign up with twitter</Text>
          <Image source={images.twtLogo} style={styles.twtLogo} />
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
