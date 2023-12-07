import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  onChangeText,
} from 'react-native';
import {styles} from '../../screens/BitcoinMainnetScreen/style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';

export default function BitcoinMainnetScreen({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}>
          <Header />
          <Image source={images.bitcoinImg} style={styles.bitcoinLogoImage} />
          <Text style={styles.bitcoinText}>Bitcoin</Text>
          <View style={styles.bitcoinMainColumn}>
            <TouchableOpacity  onPress={() => navigation.navigate('RfcNodesSettings')}>
              <View style={styles.fieldColumn}>
                <View>
                  <Text style={styles.fieldTextTop}>RPC URL</Text>
                  <Text style={styles.inputFieldTop}>Blockstream.info</Text>
                </View>
                <View>
                  <Image
                    source={images.ArrowBitcoin}
                    style={styles.ArrowBitcoinImage}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.Network}>
              <Text style={styles.fieldText}>Network Name</Text>
              <TextInput
                style={styles.inputField}
                onChangeText={onChangeText}
                placeholder="Bitcoin Mainnet"
                value='Bitcoin Mainnet'
              />
            </View>
            <View style={styles.Network}>
              <Text style={styles.fieldText}>Symbol</Text>
              <TextInput
                style={styles.inputField}
                onChangeText={onChangeText}
                placeholder="BTC"
                value='BTC'
              />
            </View>
            <View style={styles.block}>
              <Text style={styles.fieldText}>Block Explorer URL</Text>
              <TextInput
                style={styles.inputField}
                onChangeText={onChangeText}
                placeholder="Blockstream.info"
                value='Blockstream.info'
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
