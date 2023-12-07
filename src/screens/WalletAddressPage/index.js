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

export default function WalletAddressPage() {
  return (
    <SafeAreaView>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'Wallet Address'} />

        <ImageBackground
          source={images.walletAddrImg}
          style={styles.walletAddrBg}>
          <View style={styles.mainContainer}>
            <View style={[styles.flexRow, styles.ethMainnet]}>
              <Image style={styles.coinIcons} source={images.ethImg} />
              <Text style={styles.ethMainnetText}>Ethereum Mainnet</Text>
            </View>
            <Image source={images.walletAddrQr} style={styles.qrcode} />
            <Text style={styles.textLight}>Wallet Address:</Text>
            <Text style={styles.walletAddr}>0xDa3ad22D6604836B...f877</Text>
            <TouchableOpacity>
              <View style={[styles.flexRow, styles.copyButton]}>
                <Image
                  style={styles.folderIcon}
                  source={images.folderIcon}></Image>
                <Text style={styles.copytext}>Copy</Text>
              </View>
            </TouchableOpacity>

            <Text style={styles.warningText}>
              Please do not desposit any assets that are not from Ethereum or
              EVM compatiblity chain, otherwise the assets will be lost
            </Text>
          </View>
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
}
