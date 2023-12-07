import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../services/utilities/images';
import {styles} from './style';
import Header from '../../components/Header';
import BtnBlack from '../../components/BtnBlack';

export default function NetworkSettings({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'Network Settings'} />

        <View style={styles.mainSection}>
          <TouchableOpacity
            onPress={() => navigation.navigate('BitcoinMainnetScreen')}>
            <View style={styles.networkOption}>
              <View style={styles.subcontainer}>
                <Image style={styles.coinIcon} source={images.bitcoinImg} />
                <Text style={styles.optionTitle}>Bitcoin</Text>
              </View>
              <View style={styles.subcontainer}>
                <Text style={styles.optionSubtext}>Bitcoin Mainnet</Text>
                <Image source={images.rightArrowIcon} style={styles.arrow} />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.divider}></View>

          <TouchableOpacity>
            <View style={styles.networkOption}>
              <View style={styles.subcontainer}>
                <Image style={styles.coinIcon} source={images.EthereumImg} />
                <Text style={styles.optionTitle}>Ethereum</Text>
              </View>
              <View style={styles.subcontainer}>
                <Text style={styles.optionSubtext}>Ethereum Mainnet</Text>
                <Image source={images.rightArrowIcon} style={styles.arrow} />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.divider}></View>

          <TouchableOpacity>
            <View style={styles.networkOption}>
              <View style={styles.subcontainer}>
                <Image style={styles.coinIcon} source={images.BSCImg} />
                <Text style={styles.optionTitle}>BSC</Text>
              </View>
              <View style={styles.subcontainer}>
                <Text style={styles.optionSubtext}>BNB Smartchain Mainnet</Text>
                <Image source={images.rightArrowIcon} style={styles.arrow} />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.divider}></View>

          <TouchableOpacity>
            <View style={styles.networkOption}>
              <View style={styles.subcontainer}>
                <Image style={styles.coinIcon} source={images.PolygonImg} />
                <Text style={styles.optionTitle}>Polygon</Text>
                <View>
                  <Text style={styles.greenBtn}>TEST</Text>
                </View>
              </View>
              <View style={styles.subcontainer}>
                <Text style={styles.optionSubtext}>Polygon Mainnet</Text>
                <Image source={images.rightArrowIcon} style={styles.arrow} />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.divider}></View>

          <TouchableOpacity>
            <View style={styles.networkOption}>
              <View style={styles.subcontainer}>
                <Image style={styles.coinIcon} source={images.AvalancheImg} />
                <Text style={styles.optionTitle}>Avalanche C</Text>
              </View>
              <View style={styles.subcontainer}>
                <Text style={styles.optionSubtext}>Avalanche COChain</Text>
                <Image source={images.rightArrowIcon} style={styles.arrow} />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.divider}></View>

          <TouchableOpacity>
            <View style={styles.networkOption}>
              <View style={styles.subcontainer}>
                <Image style={styles.coinIcon} source={images.OptimismImg} />
                <Text style={styles.optionTitle}>Optimism</Text>
              </View>
              <View style={styles.subcontainer}>
                <Text style={styles.optionSubtext}>OP Mainnet</Text>
                <Image source={images.rightArrowIcon} style={styles.arrow} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <BtnBlack title={'Add Network'} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
