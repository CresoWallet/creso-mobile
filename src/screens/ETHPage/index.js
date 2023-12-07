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
import images from '../../services/utilities/images';
import {styles} from './style';

export default function ETHPage({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'ETH'} />
        <View style={styles.amountSection}>
          <Image style={styles.ethImgBorder} source={images.ethImgBorder} />
          <View>
            <Text style={styles.amountText}>Ethereum</Text>
            <Text style={[styles.amountText, styles.amount]}>3,187.99 ETH</Text>
          </View>
          <Text style={styles.ethUSD}>$100.89</Text>
        </View>

        <View style={styles.networkSection}>
          <Text style={styles.textLight}>Network</Text>
          <Text style={styles.bolderText}>Ethereum Mainnet</Text>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.networkSection}>
          <Text style={styles.textLight}>Standard</Text>
          <Text style={styles.bolderText}>Native Token</Text>
        </View>

        <Image source={images.ETHPageImg} style={styles.ethPageImg} />
        <Text style={styles.textLight}>No Transaction Record</Text>
        <View style={styles.buttonField}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SendETHPage');
            }}>
            <View style={styles.button}>
              <Image
                style={styles.transferBtn}
                source={images.TransferBtn}></Image>
              <Text style={styles.BtnText}>Send</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Image
                style={styles.transferBtn}
                source={images.RecieveBtn}></Image>
              <Text style={styles.BtnText}>Recieve</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
