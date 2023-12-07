import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import images from '../../services/utilities/images';
import {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './style';
import {colors} from '../../services';

export default function SignIn({navigation}) {
  const [handleStatus, setHandleStatus] = useState('Login');
  const [hidePass, setHidePass] = useState(false);
  const [hideSignupPass, setHideSignUpPass] = useState(false);
  const [hideReEnterSignupPass, setHideReEnterSignUpPass] = useState(false);

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
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            placeholder="Password"
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
        <TouchableOpacity onPress={() => {
          navigation.navigate("ForgotPass")
        }}>
          <Text style={styles.forgotPass}
           onPress={() => {
            navigation.navigate("ForgotPass")
          }}
          >Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnBlack}
        onPress={() => {
          navigation.navigate("MyTabs")
        }}>
          <Text style={styles.BtnBlackText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.loginTextView}>
          <Text style={styles.loginText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.loginLink}
            onPress={() => {
              navigation.navigate("SignUp")
            }}>Sign Up</Text>
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
