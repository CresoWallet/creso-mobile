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
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import { colors, sizes } from '../../services';
import Header from '../../components/Header';
import { handleAddToken, selectAuthToken } from '../../store/token';
import formatToJSON from '../../services/utilities/JsonLog';
import { createEOAWallet, importEOAWallet } from '../../clientApi';
import {
  handleAddWallet,
  handleEmptyWallet,
  selectWallet,
} from '../../store/WalletAddress';

export default function ImportEOAWallet({ navigation, route }) {
  const wallet = useSelector(selectWallet);
  const dispatch = useDispatch();
  const authToken = route?.params?.authToken;
  const authTokenRedux = useSelector(selectAuthToken);
  const [token, setToken] = useState();
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [confirmPass, setConfirmPass] = useState('');
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const [loader, setLoader] = useState(false);
  const [walletName, setWalletName] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [showResModal, setShowResModal] = useState(false);
  const [error, setError] = useState('');
  const [resMsg, setResMsg] = useState('');

  useEffect(() => {
    if (!authToken) {
      setToken(authTokenRedux);
    } else {
      setToken(authToken);
    }
  }, [route, authToken, authTokenRedux]);

  function extractWords(seedPhrase) {
    const wordsArray = seedPhrase.split(' ');
    return wordsArray;
  }

  const handleImportEOAWallet = async () => {
    if (walletName === '') {
      setError('Please enter wallet name');
    } else if (walletAddress === '') {
      setError('Please enter wallet address');
    } else {
      setLoader(true);

      const body = {
        walletName: walletName,
        walletAddress: walletAddress,
      };
      try {
        const response = await importEOAWallet(token, body);
        console.log(formatToJSON(response));
        if (response.status == 200) {
          console.log(response.data.data);
          Toast.show('Wallet import successful!', Toast.LONG);
          // setResMsg('Your EOA Wallet Has Been Imported Successfully');
          setLoader(false);
          handleConfirm();
          // modalBtn(true);
          // setShowResModal(true);
        } else {
          console.log(response.data.message);
          // setError(response.data.message);
          Toast.show(response.data.message, Toast.LONG);
          setLoader(false);
        }
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }
  };

  const handleConfirm = async () => {
    if (authTokenRedux) {
      navigation.navigate('MyTabs');
    } else {
      dispatch(handleAddToken(authToken));
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}
        >
          <Header title={'Import Existing EOA Wallet'} />

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
            <Text style={styles.textBlackBold}>Wallet Address</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Please Enter Your Wallet Address"
              placeholderTextColor={colors.disabledBg2}
              onChangeText={(text) => {
                setWalletAddress(text);
              }}
              style={styles.input}
            />
          </View>
          {/* <View style={styles.rowBetween}>
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
          </View> */}

          {/* <View style={styles.rowBetween}>
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
          </View> */}
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
                onPress={() => {
                  handleImportEOAWallet();
                }}
              >
                <Text style={styles.text}>Import Existing Wallet</Text>
              </TouchableOpacity>
            )}
          </View>
          <Modal isVisible={showResModal} backdropOpacity={0.5}>
            <View style={styles.transactionModalBody}>
              <Text style={styles.transactionModalText}>{resMsg}</Text>
              <TouchableOpacity
                style={styles.modalBtn}
                onPress={() => {
                  setShowResModal(false);
                  handleConfirm();
                }}
              >
                <Text style={styles.modalBtnText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
