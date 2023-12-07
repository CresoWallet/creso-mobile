import React, {useState} from 'react';
import Header from '../../components/Header';
import {styles} from './style';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../services/utilities/images';
import {colors} from '../../services';

export default function AboutUs2() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={images.landingPageBGImg}>
        <Header title={'About Us'} />
        <View style={styles.body}>
          <View style={styles.rowContainer}>
            <Text style={styles.rowLeftTextBold}>Balance Auto Hide</Text>
            <TouchableOpacity
              onPress={() => {
                setToggle1(!toggle1);
              }}>
              <Image
                style={styles.toggleOn}
                source={toggle1 ? images.toggleOn : images.toggleOff}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.rowSeparator}></View>

          <View style={styles.rowContainer}>
            <Text style={styles.rowLeftTextBold}>RPC Fallback</Text>
            <TouchableOpacity
              onPress={() => {
                setToggle2(!toggle2);
              }}>
              <Image
                style={styles.toggleOn}
                source={toggle2 ? images.toggleOn : images.toggleOff}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.warningRow}>
            <View>
              <Image
                style={styles.warningImg}
                source={images.securityWarningImg}
              />
            </View>
            <Text style={styles.warningText}>
              Automatically Switch PRC nodes when the current RPC is unavailable{' '}
            </Text>
          </View>

          <TouchableOpacity style={styles.clearCacheBotton}>
            <Text style={styles.clearCacheBottonText}>Clear Cache</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
