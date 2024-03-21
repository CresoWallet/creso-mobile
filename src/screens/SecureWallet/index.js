import React, { useState } from 'react';
import {
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
import { useSelector } from 'react-redux';
import { colors, sizes } from '../../services';
import Header from '../../components/Header';
import { selectWallet } from '../../store/WalletAddress';
import { selectEncryptedSeedPhrase } from '../../store/seedPhrase';

export default function SecureWallet({ navigation, route }) {
  // const wallet = useSelector(selectEncryptedSeedPhrase);
  // console.log('encrpted seed : ', wallet);

  const authToken = route.params.authToken;
  const seedPhrase = route.params.seedPhrase;
  const walletPassword = route?.params?.walletPassword;
  const walletName = route?.params?.walletName;

  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [confirmPass, setConfirmPass] = useState('');
  const [showConfirmPass, setShowConfirmPass] = useState(true);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}
        >
          <Header title={'Create EOA Wallet'} />
          <View style={styles.EOARow}>
            <Image source={images.EOA2} style={styles.EOA1} />
            <View style={styles.EOATextRow}>
              <Text style={styles.textBlackBold}>Create Password</Text>
              <Text style={styles.textBlackBold2}>Secure Wallet</Text>
              <Text style={styles.disabledText}>Confirm Code</Text>
            </View>
          </View>

          <View style={styles.hr}></View>

          <Text style={styles.heading}>Secure My Wallet</Text>

          <Text style={styles.disabledText2}>
            Before getting started, watch this short video to learn about your
            Secret Recovery Pharse and how to keep your wallet safe
          </Text>
          <View style={styles.videoContainer}>
            <Image
              source={images.secureWalletImg}
              style={styles.secureWalletImg}
            />
          </View>

          <View style={styles.btnSection}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('RecoveryPhrase', {
                  authToken,
                  seedPhrase,
                  walletPassword,
                  walletName,
                })
              }
            >
              <Text style={styles.text}>Secure My Wallet</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonWhite}>
              <Text
                style={styles.textBlack}
                onPress={() => navigation.navigate('MyTabs')}
              >
                Remind me later
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
