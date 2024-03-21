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
import Toast from 'react-native-simple-toast';

import { styles } from './style';
import images from '../../services/utilities/images';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../services';
import Header from '../../components/Header';
import { selectAuthToken } from '../../store/token';
import {
  handleAddWalletPassword,
  selectEncryptedSeedPhrase,
  selectWalletPassword,
} from '../../store/seedPhrase';
import { decryptData } from '../../utils/encryption';
import NetworkDropdown from '../../components/dropdown';
import { createEOAWallet } from '../../clientApi';

export default function CreateEOA({ navigation, route }) {
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState();
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const encryptedSeedPhrase = useSelector(selectEncryptedSeedPhrase);
  // const walletPassword = useSelector(selectWalletPassword);

  const authToken = route?.params?.authToken;
  const authTokenRedux = useSelector(selectAuthToken);

  useEffect(() => {
    if (!authToken) {
      setToken(authTokenRedux);
    } else {
      setToken(authToken);
    }
  }, [route, authToken, authTokenRedux]);

  const handleCreateNewEOAWallet = async () => {
    if (inputText === '') {
      setError('Please enter wallet name');
    } else {
      setLoader(true);
      try {
        const response = await createEOAWallet(token, inputText);
        if (response.status == 200) {
          Toast.show('Successful wallet creation.', Toast.LONG);
          navigation.navigate('MyTabs');
          setLoader(false);
        } else {
          setError(response?.data?.message);
          setLoader(false);
        }
      } catch (error) {
        setLoader(false);
        console.log(error.message);
        Toast.show('Something went wrong!', Toast.LONG);
        setError(error.message);
      }
    }
  };

  const handleChange = (e) => {
    const newText = e;

    // Check if the input text exceeds the limit (40 characters)
    if (newText.length <= 40) {
      setInputText(newText);
      setError(''); // Reset error state if within the limit
    } else {
      setError('Max length is 40 characters'); // Set error state if exceeding the limit
    }
  };

  const options = ['Mumbai Testnet'];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}
        >
          <Header title={'Legacy Wallet'} />

          <Text style={styles.ParagText}>
            Compatible with all Dapps, lower Gas fees, only supports paying gas
            with native token, does not support advanced features.
          </Text>

          <View style={styles.rowBetween}>
            <Text style={styles.textBlackBold}>Network</Text>
          </View>
          <NetworkDropdown options={options} />

          <View style={styles.rowBetween}>
            <Text style={styles.textBlackBold}>Wallet Name</Text>
            <Text style={styles.textBlackBold}>{inputText.length}/40</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Please Enter Your Wallet Name"
              placeholderTextColor={colors.disabledBg2}
              onChangeText={handleChange}
              maxLength={40}
              style={styles.input}
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
                <Text style={styles.text}>Create EOA Wallet</Text>
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
