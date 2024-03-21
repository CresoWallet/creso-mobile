import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style';
import images from '../../services/utilities/images';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import { sizes } from '../../services';

export default function CresoPrivacyPolicy({ navigation, route }) {
  const authToken = route?.params?.authToken;

  const [modalShow, setModalShow] = useState(false);
  const data = useSelector((state) => state);
  console.log(data);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}
        >
          <Image source={images.landingPageLogo} style={styles.logoImg} />
          <Text style={styles.text1}>Let's Get Started</Text>
          <View style={styles.body}>
            <Text style={styles.disabledText}>
              Creso would like to gather usage data to better understand how our
              users interact with Creso. This data will be used to provide the
              service, which includes improving the service based on your use.
            </Text>

            <View style={styles.bulbRow}>
              <Image source={images.bulbGreen} style={styles.bulbGreen} />
              <Text style={styles.textBlackBold}>
                Always allow you to opt out via Settings
              </Text>
            </View>

            <View style={styles.bulbRow}>
              <Image source={images.bulbGreen} style={styles.bulbGreen} />
              <Text style={styles.textBlackBold}>
                Send anonymized click and pageview events
              </Text>
            </View>

            <View style={styles.bulbRow}>
              <Image source={images.bulbPink} style={styles.bulbGreen} />
              <Text style={styles.textBlackBold}>
                Never collect your full IP address
              </Text>
            </View>

            <View style={styles.bulbRow}>
              <Image source={images.bulbPink} style={styles.bulbGreen} />
              <Text style={styles.textBlackBold}>Never sell data. Ever!</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text style={styles.disabledText}>
                This data is aggregated and is therefore anonymous for the
                purposes of General Data Protection Regulation (EU) 2016/679.
                {'\n'}
                When you use Infura as your default RPC provider in Creso,
                Infura will collect your IP address and your Ethereum wallet
                address when you send a transaction. We don't store this
                information in a way that allows our systems to associate those
                two pieces of data. For more information on our privacy
                practices in general, see our
              </Text>
              <TouchableOpacity
                style={{
                  top: sizes.screenHeight * 0.08,
                  right: sizes.screenWidth * 0.35,
                }}
              >
                <Text style={styles.textPink}>Privacy Policy here.</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.btnSection}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('EOAPassword', { authToken })}
            >
              <Text style={styles.text}>I Agree</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonWhite}
              onPress={() =>
                navigation.navigate('LetsGetStarted', { authToken })
              }
            >
              <Text style={styles.textBlack}>No thanks</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
