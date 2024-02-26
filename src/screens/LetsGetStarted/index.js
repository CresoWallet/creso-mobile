import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';

export default function LetsGetStarted({navigation}) {
  const [modalShow, setModalShow] = useState(false);
  const data = useSelector(state => state);
  console.log(data);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}>
          <Image source={images.landingPageLogo} style={styles.logoImg} />
          <Text style={styles.text1}>Let's Get Started</Text>
          <View style={styles.dotView}>
            <View style={styles.dotViewChildBlack}></View>
            <View style={styles.dotViewChild}></View>
            <View style={styles.dotViewChild}></View>
          </View>
          <Image
            source={images.landingPageSliderImg}
            style={styles.sliderImg}
          />

          <View style={styles.btnSection}>
            <View style={styles.TandC}>
              <Image source={images.emailCheck} style={styles.emailCheck} />
              <Text style={styles.textBlack}>
                I have agreed to the Creso{' '}
                <Text style={styles.textPink}>Terms and Conditions</Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Create New Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWhite}>
              <Text style={styles.textBlack}>Import an existing wallet</Text>
            </TouchableOpacity>
          </View>

          <Modal
            isVisible={modalShow}
            backdropOpacity={0.5}
            onBackdropPress={() => {
              setModalShow(!modalShow);
            }}>
            <View style={styles.modal}>
              <View style={styles.modalContent}>
                <View style={styles.modalBody}>
                  <View style={styles.horizontalLine}></View>
                  <Text style={styles.modalHeading}>
                    Welcome to Creso Wallet
                  </Text>
                  <Text style={styles.modalText}>
                    We take your personal information and privacy protection
                    very seriously. To help you better use the Creso Wallet.
                    Please read to the end and make sure you understand the{' '}
                    <Text style={styles.modalTextPink}>“User Agreement”</Text>{' '}
                    and{' '}
                    <Text style={styles.modalTextPink}>“Privacy Policy”</Text>{' '}
                    so you can start using wallet after you agree and accept all
                    them terms.
                  </Text>
                </View>
                <View style={styles.bottonsContainer}>
                  <TouchableOpacity
                    style={styles.bottonWhite}
                    onPress={() => {
                      setModalShow(!modalShow);
                    }}>
                    <Text style={styles.bottonWhiteText}>Disagree</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.bottonBlack}
                    onPress={() => {
                      setModalShow(!modalShow);
                      navigation.navigate('SignUp');
                    }}>
                    <Text style={styles.bottonBlackText}>Agree</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
