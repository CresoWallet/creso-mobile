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
import { useDispatch, useSelector } from 'react-redux';
import { colors, sizes } from '../../services';
import Header from '../../components/Header';
import { handleAddToken } from '../../store/token';

export default function RecoveryPhrase({ navigation, route }) {

  const dispatch = useDispatch()

  const authToken = route?.params?.authToken
  const seedPhrase = route?.params?.seedPhrase

  const [showPhrase, setShowPhrase] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [btnText, setBtnText] = useState('Reveal');

  // const [phrase, setPhrase] = useState([
  //   'undefined',
  //   'undefined',
  //   'undefined',
  //   'undefined',
  //   'undefined',
  //   'undefined',
  //   'undefined',
  //   'undefined',
  //   'undefined',
  //   'undefined',
  //   'undefined',
  //   'undefined',
  // ]);

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

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}>
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
                style={confirmed ? styles.textBlackBold2 : styles.disabledText}>
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

          <View style={styles.btnSection}>
            {confirmed ? <TouchableOpacity style={styles.button}
              onPress={() => dispatch(handleAddToken(authToken))}
            >
              <Text style={styles.text}>Go to Home</Text>
            </TouchableOpacity> : null}

            <TouchableOpacity style={styles.button} onPress={handlePhrase}>
              <Text style={styles.text}>{btnText} Secret Recovery Phrase</Text>
            </TouchableOpacity>

          </View>

        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
