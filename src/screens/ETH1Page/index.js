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

export default function ETH1Page({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'ETH-1'} />
        <View style={styles.keylessContainer}>
          <Text style={styles.keylessText}>Keyless Secure Account</Text>
          <TouchableOpacity>
            <Image style={styles.todoImg} source={images.toDoIcon}></Image>
          </TouchableOpacity>
        </View>

        <ImageBackground style={styles.ethCard} source={images.ETH1Card}>
          <View style={styles.firstCardField}>
            <Text style={styles.subHeading}>EOA</Text>
            <View style={[styles.flexrow]}>
              <Text style={styles.cardHeading}>0xDa3ad22D6604836B...f877</Text>
              <TouchableOpacity>
                <Image style={styles.cardIconCopy} source={images.copyBtn} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.SecondCardField}>
            <Text style={styles.subHeading}>Total Assets:</Text>
            <View style={[styles.flexrow]}>
              <Text style={[styles.cardHeading, styles.cardHeading2]}>
                3,187.99 USD
              </Text>
              <TouchableOpacity>
                <Image source={images.hideBtn} style={styles.cardIconEye} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonField}>
            <TouchableOpacity onPress={() => navigation.navigate('ETHPage')}>
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

          <Text style={styles.BalanceText}>Balance</Text>
          <View style={[styles.flexrow]}>
            <TouchableOpacity>
              <Text style={[styles.balanceType, styles.neonBtn]}>Tokens</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.balanceType]}>NFTs</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.flexrow, styles.columnSection]}>
            <View style={[styles.flexrow]}>
              <Image style={styles.coinIcons} source={images.ethImg}></Image>
              <Text style={styles.logoText}>ETH</Text>
            </View>
            <View style={styles.flexrow}>
              <Text style={styles.textLight}>$1,794.28</Text>
              <Text style={styles.boldText}>0.54</Text>
            </View>
          </View>

          <View style={styles.divider}></View>

          <View style={[styles.flexrow, styles.columnSection]}>
            <View style={[styles.flexrow]}>
              <Image style={styles.coinIcons} source={images.daiIcon}></Image>
              <Text style={styles.logoText}>DAI</Text>
            </View>
            <View style={styles.flexrow}>
              <Text style={styles.boldText}>*****</Text>
            </View>
          </View>

          <View style={styles.divider}></View>

          <View style={[styles.flexrow, styles.columnSection]}>
            <View style={[styles.flexrow]}>
              <Image style={styles.coinIcons} source={images.USDTlogo}></Image>
              <Text style={styles.logoText}>USDT</Text>
            </View>
            <View style={styles.flexrow}>
              <Text style={styles.textLight}>$25.83</Text>
              <Text style={styles.boldText}>25.83</Text>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
}
