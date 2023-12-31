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
import backendURL from '../../services/config/backendURL';
import {useDispatch} from 'react-redux';
import {handleTrue} from '../../store/isSignedInSlice';
import formatToJSON from '../../services/utilities/JsonLog';
import {handleAddToken} from '../../store/token';
import {loginApi} from '../../clientApi';

export default function SignIn({navigation}) {
  const dispatch = useDispatch();
  const [handleStatus, setHandleStatus] = useState('Login');
  const [hidePass, setHidePass] = useState(false);
  const [hideSignupPass, setHideSignUpPass] = useState(true);
  const [hideReEnterSignupPass, setHideReEnterSignUpPass] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const [error, setError] = useState('');

  const handleSignIn = async () => {
    setLoader(true);
    if (email) {
      let updatedEmail = email.toLocaleLowerCase();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(updatedEmail)) {
        setError('Please enter a valid email');
        setLoader(false);
      } else if (!password) {
        setError('Please enter your password');
        setLoader(false);
      } else if (email && password) {
        setError('');
        const data = {
          email,
          password,
        };
        try {
          const res = await loginApi(data);
          console.log(formatToJSON(res));
          dispatch(handleTrue());
          const tk = res?.data?.token;
          dispatch(handleAddToken(tk));
          // localStorage.setItem(AUTH_TOKEN, tk);
          // authenticate();
          // setLoading(false);
          // handleAuthentication();
        } catch (err) {
          console.log(err);
          setLoader(false);
        }
      } else {
        setError('*Incorrect email or password');
        setLoader(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Image source={images.landingPageLogo} style={styles.logoImg} />

        <Text style={styles.text1}>Sign In</Text>

        <View style={styles.inputField}>
          <TextInput
            placeholder="Your email"
            placeholderTextColor={colors.disabledBg2}
            secureTextEntry={hidePass ? true : false}
            style={styles.inputFieldText}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.disabledBg2}
            secureTextEntry={hideSignupPass ? true : false}
            style={styles.inputFieldText}
            value={password}
            onChangeText={text => setPassword(text)}
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
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPass');
          }}>
          <Text
            style={styles.forgotPass}
            onPress={() => {
              navigation.navigate('ForgotPass');
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {loader ? (
          <View style={styles.BtnBlack} onPress={handleSignIn}>
            <ActivityIndicator color={'white'} size={30} />
          </View>
        ) : (
          <TouchableOpacity style={styles.BtnBlack} onPress={handleSignIn}>
            <Text style={styles.BtnBlackText}>Sign In</Text>
          </TouchableOpacity>
        )}
        <View style={styles.loginTextView}>
          <Text style={styles.loginText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text
              style={styles.loginLink}
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              Sign Up
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
