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
import Feather from 'react-native-vector-icons/Feather';
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

export default function UnlockWallet({ navigation, route }) {
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState();
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
    if (pass === '') {
      setError('Please enter wallet password');
    } else {
      setError('');
      setLoader(true);
      const value = decryptData(encryptedSeedPhrase, pass);
      if (value) {
        Toast.show('Wallet unlocked', Toast.LONG);
        dispatch(handleAddWalletPassword(pass));
        navigation.navigate('CreateEOA');
      } else {
        setError('Invalid Password');
      }
      setLoader(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}
        >
          <Header title={'Unlock Wallet'} />

          <Text style={styles.ParagText}>
            Your ownership of the wallet entails the responsibility of unlocking
            it, requiring you to enter the designated password so as to unlock
            and enable further actions or functionalities associated with it!
          </Text>

          <View style={styles.rowBetween}>
            <Text style={styles.textBlackBold}>Wallet Password</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Please Enter Your Wallet Password"
              placeholderTextColor={colors.disabledBg2}
              onChangeText={(text) => {
                setPass(text);
              }}
              style={styles.input}
              secureTextEntry={showPass}
            />
            <TouchableOpacity
              style={styles.eyeBtn}
              onPress={() => {
                setShowPass(!showPass);
              }}
            >
              <Feather
                name={showPass ? 'eye-off' : 'eye'}
                color={colors.disabledBg2}
                size={20}
                style={{
                  alignSelf: 'flex-end',
                }}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.error}>{error}</Text>

          <View style={styles.btnSection}>
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
