import React from 'react';
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
import Header from '../../components/Header';

export default function Account({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}>
          <Header title={'Account'} />
          <View style={styles.topContainer}>
            <Text style={styles.textalignment}>Email/Phone</Text>
            <View style={styles.emailContainer}>
              <View>
                <Text style={styles.textColorBlack}>Samuel.HK6@gmail.com</Text>
              </View>
              <View style={styles.connectedButtonStyling}>
                <Text style={styles.connectedTextStyling}>Connected</Text>
              </View>
            </View>
            <View style={styles.informativeParaView}>
              <View>
                <Image source={images.Info} style={styles.infoImage}></Image>
              </View>
              <View style={styles.infoPara}>
                <Text style={styles.textColorgrey}>
                  Either email or phone can be used to access your wallet. It is
                  recommended to add both in case either of them is lost.
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.addPhoneButtonStyling}>
              <Text style={styles.textColor}>Add Photo</Text>
            </TouchableOpacity>
            <View style={styles.topContainer}>
              <Text style={styles.textalignment}>FaceMap</Text>
              <View style={styles.emailContainer}>
                <View style={styles.myOwnFacepadding}>
                  <Text style={styles.textColorBlack}>My own Face Map</Text>
                </View>
                <View style={styles.connectedButtonStyling}>
                  <Text style={styles.connectedTextStyling}>Connected</Text>
                </View>
              </View>
              <View style={styles.informativeParaView}>
                <View>
                  <Image source={images.Info} style={styles.infoImage}></Image>
                </View>
                <View style={styles.infoPara}>
                  <Text style={styles.textColorgrey}>
                    You can use a trusted family member of friend to restore
                    your wallet, just in case something happens to your own
                    face. It is only used to restore your account as an
                    alternative.
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.addPhoneButtonStyling}>
              <Text style={styles.textColor}>Add Another Trusted FaceMap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.advancedContainer} onPress={() => navigation.navigate('Advanced')}>
              <Text style={styles.textColorBlack}>Advanced</Text>
              <Image source={images.ArrowBitcoin} style={styles.arrowImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.disconnectButtonStyling}>
              <Text style={styles.textColorPink}>Disconnect</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
