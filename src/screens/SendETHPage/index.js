import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../services/utilities/images';
import {styles} from './style';
import Header from '../../components/Header';
import {colors} from '../../services';

export default function SendETHPage({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'Send ETH'} />
        <View style={styles.mainContainer}>
          <Text style={styles.fieldHeading}>Network</Text>
          <View style={styles.field}>
            <Image style={styles.coinIcons} source={images.ethImg} />
            <Text style={[styles.black, styles.subFieldText]}>
              Ethereum Mainnet
            </Text>
          </View>

          <Text style={styles.fieldHeading}>From</Text>
          <View style={[styles.field, styles.spaceBetween]}>
            <View style={styles.subField}>
              <Image source={images.cresoLogo} style={styles.coinIcons} />
              <Text style={[styles.black, styles.subFieldText]}>ETH-1</Text>
            </View>
            <View style={styles.subField}>
              <Text style={[styles.black, styles.EQA]}>EQA</Text>
              <Text style={[styles.black, styles.EQASideText]}>
                0x53A...e4af
              </Text>
            </View>
          </View>

          <Text style={styles.fieldHeading}>To</Text>
          <View style={[styles.field, styles.spaceBetween]}>
            <TextInput
              style={styles.searchFields}
              placeholder="Enter wallet address or ENS,NNS"
              placeholderTextColor={colors.disabledBg1}></TextInput>
            <TouchableOpacity>
              <Text style={styles.pasteButton}>Paste</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.subField, styles.spaceBetween]}>
            <Text style={styles.fieldHeading}>Amount</Text>
            <Text style={[styles.fieldHeading, styles.balanceText]}>
              Balance: 0 ETH
            </Text>
          </View>
          <View style={styles.field}>
            <TextInput
              style={styles.inputAmount}
              placeholder="Input Amount"
              placeholderTextColor={colors.disabledBg1}></TextInput>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('WalletAddressPage');
            }}>
            <View style={styles.button}>
              <Image
                style={styles.transferBtn}
                source={images.TransferBtn}></Image>
              <Text style={styles.BtnText}>Send</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
