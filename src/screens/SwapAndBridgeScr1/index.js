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

export default function SwapAndBridgeScr1({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={images.landingPageBGImg}>
        <View style={styles.headingRow}>
          <Text style={styles.headingText}>Swap & Bridge</Text>
          <View style={styles.headingRowImagesContainer}>
            <TouchableOpacity>
              <Image
                style={styles.headingRowImage1}
                source={images.settingsImg}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.headingRowImage2}
                source={images.deliveryCheckImg}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.textAboveCoinSwapBtn}>From</Text>
          <View style={styles.coinSwapBtn}>
            <TouchableOpacity
              style={styles.coinSwapBtnInnerLeft}
              onPress={() => navigation.navigate('SwapFrom')}>
              <View style={styles.coiImgContainer}>
                <Image style={styles.coiImg} source={images.bnbImg} />
              </View>
              <Text style={styles.coinSwapBtnText}>BNB</Text>
              <View>
                <Image
                  style={styles.dropdownIcon}
                  source={images.dropdownIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.coinSwapBtnInnerRight}>
              <Text style={styles.coinSwapBtnText}>0x53A...e4af</Text>
              <View>
                <Image
                  style={styles.dropdownIcon}
                  source={images.dropdownIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.textAboveCoinSwapBtn}>To</Text>
          <View style={styles.coinSwapBtn}>
            <TouchableOpacity style={styles.coinSwapBtnInnerLeft}>
              <View style={styles.coiImgContainer}>
                <Image style={styles.coiImg} source={images.ethImg} />
              </View>
              <Text style={styles.coinSwapBtnText}>ETH</Text>
              <View>
                <Image
                  style={styles.dropdownIcon}
                  source={images.dropdownIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.coinSwapBtnInnerRight}>
              <Text style={styles.coinSwapBtnText}>0x53A...e4af</Text>
              <View>
                <Image
                  style={styles.dropdownIcon}
                  source={images.dropdownIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.youpayRow}>
            <Text style={styles.leftTextAboveCoinSwapBtn}>YouPay</Text>
            <Text style={styles.rightTextAboveCoinSwapBtn}>
              Balance: 7,432 USD
            </Text>
          </View>
          <View style={styles.coinYouPlaySwapBtn}>
            <View style={styles.coinYouPlaySwapBtnInnerLeft}>
              <View style={styles.coiImagesContainer}>
                <View style={styles.coiImgContainer}>
                  <Image style={styles.YouPlayBigImg} source={images.ethImg} />
                </View>
                <View style={styles.coiSmallImgContainer}>
                  <Image
                    style={styles.YouPlaySmallImg}
                    source={images.bnbImg}
                  />
                </View>
              </View>
              <View style={styles.coinYouPlaySwapBtnInnerLeftTextContainer}>
                <Text style={styles.coinYouPlaySwapBtnInnerLeftTextBold}>
                  0
                </Text>
                <Text style={styles.coinYouPlaySwapBtnInnerLeftTextNormal}>
                  $0.00
                </Text>
              </View>
            </View>
            <View style={styles.coinYouPlaySwapBtnInnerRight}>
              <Text style={styles.coinYouPlaySwapBtnInnerRightText}>Max</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.swapBridgeImgContainer}>
          <Image style={styles.swapBridgeImg} source={images.swapBridgeImg} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.swapBtnBlack}
          onPress={() => navigation.navigate('SwapAndBridgeScr2')}>
          <View style={styles.arrowRepeatImgContainer}>
            <Image
              style={styles.arrowRepeatImg}
              source={images.arrowRepeatImg}
            />
          </View>
          <Text style={styles.swapBtnBlackText}>Swap</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
