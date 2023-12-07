import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {styles} from '../AboutUs/style';
import images from '../../services/utilities/images';

export default function AboutUs({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={images.landingPageBGImg}>
        <Header title={'About Us'} />

        <View style={styles.playIconSection}>
          <View>
            <Image style={styles.playIcon} source={images.aboutUsPlayIcon} />
          </View>
          <View style={styles.playIconTextContainer}>
            <Text style={styles.playIconCresoText}>creso</Text>
            <Text style={styles.playIconVersionText}>Version1.1.0</Text>
          </View>
        </View>
        <View style={styles.warningRow}>
          <View>
            <Image
              style={styles.warningImg}
              source={images.securityWarningImg}
            />
          </View>
          <Text style={styles.warningText}>
            Automatically Switch RPC nodes when the current RPC is unavailable{' '}
          </Text>
        </View>
        <TouchableOpacity style={styles.updateBottonBgContainer}>
          <ImageBackground
            style={styles.updateBottonBg}
            source={images.updateBottonBg}>
            <Text style={styles.updateBottonText}>Update</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.aboutUsbottomRows}>
          <Text style={styles.aboutUsbottomRowText}>User Agreement</Text>
          <View>
            <Image
              source={images.securityRightArrowImg}
              style={styles.autoLockRowRightArrow}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.hrRight}></View>

        <TouchableOpacity style={styles.aboutUsbottomRows}
         onPress={() => {
          navigation.navigate("PrivacyPolicy")
        }}
        >
          <Text style={styles.aboutUsbottomRowText}
          >Privacy Policy</Text>
          <View>
            <Image
              source={images.securityRightArrowImg}
              style={styles.autoLockRowRightArrow}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.hrRight}></View>

        <TouchableOpacity style={styles.aboutUsbottomRows}>
          <Text style={styles.aboutUsbottomRowText}>Official Website</Text>
          <View>
            <Image
              source={images.securityRightArrowImg}
              style={styles.autoLockRowRightArrow}
            />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
