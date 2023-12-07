import React, {useState} from 'react';
import Header from '../../components/Header';
import {styles} from './style';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../services/utilities/images';
import {colors} from '../../services';

export default function SwapFrom() {
  const [checkedCoin, setCheckedCoin] = useState('coin1');

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={images.landingPageBGImg}>
        <Header title={'Swap From'} />

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.scrollViewRowContainer}>
              <TouchableOpacity
                style={styles.scrollViewItemContainer}
                onPress={() => {
                  setCheckedCoin('coin1');
                }}>
                {checkedCoin === 'coin1' ? (
                  <View style={styles.coinIconContainer2}>
                    <Image
                      style={styles.coinIcons}
                      source={images.ethBaseIcon}
                    />
                    <Image
                      style={styles.tickMarkIcon}
                      source={images.tickMarkIcon}
                    />
                  </View>
                ) : (
                  <View style={styles.coinIconContainer}>
                    <Image
                      style={styles.coinIcons}
                      source={images.ethBaseIcon}
                    />
                  </View>
                )}

                <Text style={styles.scrollViewItemTextBold}>ETH</Text>
                <Text style={styles.scrollViewItemTextLight}>$2,321,79</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollViewItemContainer}
                onPress={() => {
                  setCheckedCoin('coin2');
                }}>
                {checkedCoin === 'coin2' ? (
                  <View style={styles.coinIconContainer2}>
                    <Image
                      style={styles.coinIcons}
                      source={images.bnbBaseIcon}
                    />
                    <Image
                      style={styles.tickMarkIcon}
                      source={images.tickMarkIcon}
                    />
                  </View>
                ) : (
                  <View style={styles.coinIconContainer}>
                    <Image
                      style={styles.coinIcons}
                      source={images.bnbBaseIcon}
                    />
                  </View>
                )}
                <Text style={styles.scrollViewItemTextBold}>BNB</Text>
                <Text style={styles.scrollViewItemTextLight}>$16,32</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollViewItemContainer}
                onPress={() => {
                  setCheckedCoin('coin3');
                }}>
                {checkedCoin === 'coin3' ? (
                  <View style={styles.coinIconContainer2}>
                    <Image
                      style={styles.coinIcons}
                      source={images.usdtBaseIcon}
                    />
                    <Image
                      style={styles.tickMarkIcon}
                      source={images.tickMarkIcon}
                    />
                  </View>
                ) : (
                  <View style={styles.coinIconContainer}>
                    <Image
                      style={styles.coinIcons}
                      source={images.usdtBaseIcon}
                    />
                  </View>
                )}
                <Text style={styles.scrollViewItemTextBold}>USDT</Text>
                <Text style={styles.scrollViewItemTextLight}>$804,94</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.scrollViewItemContainer}
                onPress={() => {
                  setCheckedCoin('coin4');
                }}>
                {checkedCoin === 'coin4' ? (
                  <View style={styles.coinIconContainer2}>
                    <Image
                      style={styles.coinIcons}
                      source={images.ethBaseIcon}
                    />
                    <Image
                      style={styles.tickMarkIcon}
                      source={images.tickMarkIcon}
                    />
                  </View>
                ) : (
                  <View style={styles.coinIconContainer}>
                    <Image
                      style={styles.coinIcons}
                      source={images.ethBaseIcon}
                    />
                  </View>
                )}

                <Text style={styles.scrollViewItemTextBold}>ETH</Text>
                <Text style={styles.scrollViewItemTextLight}>$2,321,79</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollViewItemContainer}
                onPress={() => {
                  setCheckedCoin('coin5');
                }}>
                {checkedCoin === 'coin5' ? (
                  <View style={styles.coinIconContainer2}>
                    <Image
                      style={styles.coinIcons}
                      source={images.bnbBaseIcon}
                    />
                    <Image
                      style={styles.tickMarkIcon}
                      source={images.tickMarkIcon}
                    />
                  </View>
                ) : (
                  <View style={styles.coinIconContainer}>
                    <Image
                      style={styles.coinIcons}
                      source={images.bnbBaseIcon}
                    />
                  </View>
                )}
                <Text style={styles.scrollViewItemTextBold}>BNB</Text>
                <Text style={styles.scrollViewItemTextLight}>$16,32</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollViewItemContainer}
                onPress={() => {
                  setCheckedCoin('coin6');
                }}>
                {checkedCoin === 'coin6' ? (
                  <View style={styles.coinIconContainer2}>
                    <Image
                      style={styles.coinIcons}
                      source={images.usdtBaseIcon}
                    />
                    <Image
                      style={styles.tickMarkIcon}
                      source={images.tickMarkIcon}
                    />
                  </View>
                ) : (
                  <View style={styles.coinIconContainer}>
                    <Image
                      style={styles.coinIcons}
                      source={images.usdtBaseIcon}
                    />
                  </View>
                )}
                <Text style={styles.scrollViewItemTextBold}>USDT</Text>
                <Text style={styles.scrollViewItemTextLight}>$804,94</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Search by token name or address"
            placeholderTextColor={colors.disabledBg2}
          />
          <TouchableOpacity>
            <Image
              style={styles.searchBlackIcon}
              source={images.searchBlackIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.coinRow}>
          <View style={styles.coinRowLeft}>
            <View style={styles.coinRowLeftCoinContainer}>
              <Image style={styles.coinRowLeftCoin} source={images.bv3aIcon} />
            </View>
            <View>
              <Text style={styles.coinRowTextBold}>BV3A</Text>
              <Text style={styles.coinRowTextLight}>BuccaneerV3</Text>
            </View>
          </View>
          <Text style={styles.coinRowTextBold}>$0,0041.66</Text>
        </View>

        <View style={styles.rowSeparator}></View>

        <View style={styles.coinRow}>
          <View style={styles.coinRowLeft}>
            <View style={styles.coinRowLeftCoinContainer}>
              <Image
                style={styles.coinRowLeftCoin}
                source={images.ethBlackIcon}
              />
            </View>
            <View>
              <Text style={styles.coinRowTextBold}>ETH</Text>
              <Text style={styles.coinRowTextLight}>Ethereum</Text>
            </View>
          </View>
          <Text style={styles.coinRowTextBold}>$0.159046</Text>
        </View>

        <View style={styles.rowSeparator}></View>

        <View style={styles.coinRow}>
          <View style={styles.coinRowLeft}>
            <View style={styles.coinRowLeftCoinContainer}>
              <Image style={styles.coinRowLeftCoin} source={images.wethIcon} />
            </View>
            <View>
              <Text style={styles.coinRowTextBold}>WETH</Text>
              <Text style={styles.coinRowTextLight}>WETH</Text>
            </View>
          </View>
          <Text style={styles.coinRowTextBold}></Text>
        </View>

        <View style={styles.rowSeparator}></View>

        <View style={styles.coinRow}>
          <View style={styles.coinRowLeft}>
            <View style={styles.coinRowLeftCoinContainer}>
              <Image style={styles.coinRowLeftCoin} source={images.usdcIcon} />
            </View>
            <View>
              <Text style={styles.coinRowTextBold}>USDC</Text>
              <Text style={styles.coinRowTextLight}>USDC Coin</Text>
            </View>
          </View>
          <Text style={styles.coinRowTextBold}></Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
