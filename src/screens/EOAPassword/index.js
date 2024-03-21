import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style';
import images from '../../services/utilities/images';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import { colors, sizes } from '../../services';
import Header from '../../components/Header';
import { selectAuthToken } from '../../store/token';
import formatToJSON from '../../services/utilities/JsonLog';
import { createEOAWallet } from '../../clientApi';
import {
  handleAddWallet,
  handleEmptyWallet,
  selectWallet,
} from '../../store/WalletAddress';
import { handleAddSeedPhrase } from '../../store/seedPhrase';
import { encryptData } from '../../utils/encryption';

export default function EOAPassword({ navigation, route }) {
  const wallet = useSelector(selectWallet);
  console.log(wallet);

  const dispatch = useDispatch();

  const authToken = route?.params?.authToken;
  const authTokenRedux = useSelector(selectAuthToken);

  const [token, setToken] = useState();

  useEffect(() => {
    if (!authToken) {
      setToken(authTokenRedux);
    } else {
      setToken(authToken);
    }
  }, [route, authToken, authTokenRedux]);

  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [confirmPass, setConfirmPass] = useState('');
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const [loader, setLoader] = useState(false);
  const [walletName, setWalletName] = useState('');
  const [error, setError] = useState('');

  const handleCreateNewEOAWallet = async () => {
    if (pass === confirmPass) {
      setError('');
      setLoader(true);
      try {
        const response = await createEOAWallet(token, walletName);
        if (response.status == 200) {
          const seedPhrase = extractWords(response.data.data.seedPhrase);
          const encryptedSeedPhrase = encryptData(
            response.data.data.seedPhrase,
            pass,
          );

          dispatch(handleAddSeedPhrase(encryptedSeedPhrase));

          navigation.navigate('SecureWallet', {
            authToken: token,
            seedPhrase,
            walletPassword: pass,
            walletName,
          });
          setLoader(false);
        } else {
          setError(response?.data?.message);
          setLoader(false);
        }
      } catch (error) {
        setLoader(false);
        console.log(error.message);
        setError(error.message);
      }
    } else {
      setError('*Password not matched');
    }
  };

  function extractWords(seedPhrase) {
    const wordsArray = seedPhrase.split(' ');
    return wordsArray;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}
        >
          <Header title={'Create EOA Wallet'} />
          <View style={styles.EOARow}>
            <Image source={images.EOA1} style={styles.EOA1} />
            <View style={styles.EOATextRow}>
              <Text style={styles.textBlackBold}>Create Password</Text>
              <Text style={styles.disabledText}>Secure Wallet</Text>
              <Text style={styles.disabledText}>Confirm Code</Text>
            </View>
          </View>

          <View style={styles.hr}></View>

          <View style={styles.rowBetween}>
            <Text style={styles.textBlackBold}>Wallet Name</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Please Enter Your Wallet Name"
              placeholderTextColor={colors.disabledBg2}
              onChangeText={(text) => {
                setWalletName(text);
              }}
              style={styles.input}
            />
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.textBlackBold}>New Password</Text>
            <TouchableOpacity
              onPress={() => {
                setShowPass(!showPass);
              }}
            >
              <Text style={styles.textPink}>Show</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Please Enter Your New Password"
              placeholderTextColor={colors.disabledBg2}
              onChangeText={(text) => {
                setPass(text);
              }}
              style={styles.input}
              secureTextEntry={showPass}
            />
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.textBlackBold}>Confirm Password</Text>
            <TouchableOpacity
              onPress={() => {
                setShowConfirmPass(!showConfirmPass);
              }}
            >
              <Text style={styles.textPink}>Show</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Please Enter Your Confirm Password"
              placeholderTextColor={colors.disabledBg2}
              onChangeText={(text) => {
                setConfirmPass(text);
              }}
              style={styles.input}
              secureTextEntry={showConfirmPass}
            />
          </View>
          <Text style={styles.error}>{error}</Text>

          <View style={styles.btnSection}>
            <View style={styles.learnMoreRow}>
              <Image source={images.emailCheck} style={styles.emailCheck} />
              <Text style={styles.textBlackBold}>
                I understand that Creso cannot recover this password for me.
                <Text style={styles.textPink}>Learn more</Text>
              </Text>
            </View>
            {loader ? (
              <View style={styles.button}>
                <ActivityIndicator color={'white'} size={30} />
              </View>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={handleCreateNewEOAWallet}
              >
                <Text style={styles.text}>Create New Password</Text>
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
