import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Clipboard } from 'react-native';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';
import { PermissionsAndroid } from 'react-native';
import Toast from 'react-native-simple-toast';

import { styles } from './style';
import images from '../../services/utilities/images';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import { colors, sizes } from '../../services';
import Header from '../../components/Header';
import { handleAddToken, selectAuthToken } from '../../store/token';
import {
  getDownloadPermissionAndroid,
  downloadFile,
  writeFile,
} from '../../utils';
import { encryptData } from '../../utils/encryption';

export default function RecoveryPhrase({ navigation, route }) {
  const authTokenRedux = useSelector(selectAuthToken);

  const dispatch = useDispatch();

  const authToken = route?.params?.authToken;
  const seedPhrase = route?.params?.seedPhrase;
  const walletPassword = route?.params?.walletPassword;
  const walletName = route?.params?.walletName;

  const [showPhrase, setShowPhrase] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [btnText, setBtnText] = useState('Reveal');

  const handlePhrase = () => {
    if (!confirmed) {
      setConfirmed(true);
      setShowPhrase(!showPhrase);
      setBtnText('Hide');
    } else {
      setShowPhrase(!showPhrase);
      if (btnText === 'Hide') setBtnText('Reveal');
      else setBtnText('Hide');
    }
  };

  const handleConfirm = async () => {
    if (authTokenRedux) {
      navigation.navigate('MyTabs');
    } else {
      dispatch(handleAddToken(authToken));
    }
  };

  const handleDownload = async () => {
    const encryptedData = encryptData(seedPhrase.join(' '), walletPassword);
    if (encryptedData) {
      if (Platform.OS === 'android') {
        getDownloadPermissionAndroid().then((granted) => {
          if (granted) {
            writeFile(encryptedData, `${walletName}_privateKey.txt`);
          }
        });
      } else {
        writeFile(encryptedData, `${walletName}_privateKey.txt`).then((res) => {
          RNFetchBlob.ios.previewDocument(res.path());
        });
      }
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}
        >
          <Header title={'Create EOA Wallet'} />
          <View style={styles.EOARow}>
            <Image
              source={confirmed ? images.EOA3 : images.EOA2}
              style={styles.EOA1}
            />
            <View style={styles.EOATextRow}>
              <Text style={styles.textBlackBold}>Create Password</Text>
              <Text style={styles.textBlackBold2}>Secure Wallet</Text>
              <Text
                style={confirmed ? styles.textBlackBold2 : styles.disabledText}
              >
                Confirm Code
              </Text>
            </View>
          </View>

          <View style={styles.hr}></View>

          <Text style={styles.heading}>
            Write down your Secret Recovery Pharse
          </Text>

          <Text style={styles.disabledText2}>
            Write down this 12-world secret recovery pharse and save it in a
            place that you trust and only you can access.
          </Text>
          <View style={styles.recoveryPhraseContainer}>
            <View style={styles.recoveryPhraseContainer2}>
              {seedPhrase.map((item, index) => {
                return (
                  <View key={index} style={styles.phraseViewContainer}>
                    <View style={styles.phraseView}>
                      <Text style={styles.phraseText}>
                        {index + 1}. {item}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
            {showPhrase ? (
              <Image source={images.phraseImg} style={styles.phraseImg} />
            ) : null}
          </View>

          <View style={styles.iconButton}>
            <TouchableOpacity
              onPress={() => {
                Clipboard.setString(seedPhrase.join(' '));
                Toast.show('Secret key copied ', Toast.LONG);
              }}
            >
              <Feather
                name={'copy'}
                color={colors.black}
                size={20}
                style={{
                  alignSelf: 'flex-end',
                }}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={handleDownload}>
              <Feather
                name={'download'}
                color={colors.black}
                size={20}
                style={{
                  alignSelf: 'flex-end',
                }}
              />
            </TouchableOpacity> */}
          </View>

          <View style={styles.btnSection}>
            {confirmed ? (
              <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                <Text style={styles.text}>Go to Home</Text>
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity style={styles.button} onPress={handlePhrase}>
              <Text style={styles.text}>{btnText} Secret Recovery Phrase</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
