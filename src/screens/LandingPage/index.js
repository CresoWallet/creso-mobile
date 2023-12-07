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

export default function LandingPage({navigation}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Text>LandingPage</Text> */}
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}>
          <Image source={images.landingPageLogo} style={styles.logoImg} />
          <Text style={styles.text1}>Keyless{'\n'} No risk of leakage</Text>
          <View style={styles.dotView}>
            <View style={styles.dotViewChild}></View>
            <View style={styles.dotViewChildBlack}></View>
            <View style={styles.dotViewChild}></View>
            <View style={styles.dotViewChild}></View>
          </View>
          <Image
            source={images.landingPageSliderImg}
            style={styles.sliderImg}
          />
          <View style={styles.btnView}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setModalShow(!modalShow);
              }}>
              <View style={styles.btnContnt}>
                <Image source={images.add} style={styles.addImg} />
                <View style={styles.btnContentView}>
                  <Text style={styles.text2}>Create</Text>
                  <Text style={styles.text3}>New Account</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
            onPress={() => {
              navigation.navigate("SignIn")
            }}>
              <View style={styles.btnContnt}>
                <Image source={images.restore} style={styles.addImg} />
                <View style={styles.btnContentView}
                >
                  <Text style={styles.text2}>Restore</Text>
                  <Text style={styles.text3}>Existing Account</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <Modal
            isVisible={modalShow}
            backdropOpacity={0.5}
            onBackdropPress={() => {
              setModalShow(!modalShow);
            }}
            // transparent={true}
          >
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
                      navigation.navigate("SignUp")
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
