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

export default function SwapAndBridgeScr2({navigation}) {
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
            <View>
              <Image
                style={styles.headingRowImage2}
                source={images.deliveryCheckImg}
              />
            </View>
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
                  800.23
                </Text>
                <Text style={styles.coinYouPlaySwapBtnInnerLeftTextNormal}>
                  $23.02
                </Text>
              </View>
            </View>
            <View style={styles.coinYouPlaySwapBtnInnerRight}>
              <Text style={styles.coinYouPlaySwapBtnInnerRightText}>Max</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.youGetRow}>
            <Text style={styles.youGetText}>You Get</Text>
            <TouchableOpacity>
              <Text style={styles.showAllText}>Show all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.recommendedSection}>
            <View style={styles.firstRow}>
              <View style={styles.firstRowLeft}>
                <View>
                  <Image style={styles.bnbAndTImg} source={images.bnbAndTImg} />
                </View>
                <View style={styles.recommendedSectionInnerLeft}>
                  <Text style={styles.coinYouPlaySwapBtnInnerLeftTextBold}>
                    270.6598
                  </Text>
                  <View
                    style={
                      styles.recommendedSectionInnerLeftNormalTextContainer
                    }>
                    <Text style={styles.coinYouPlaySwapBtnInnerLeftTextNormal}>
                      $270.66
                    </Text>
                    <View style={styles.verticalSeparator}></View>
                    <Text style={styles.coinYouPlaySwapBtnInnerLeftTextNormal}>
                      Across
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.recommendedSectionInnerRight}>
                <View style={styles.recommendedTextContainer}>
                  <Text style={styles.recommendedText}>Recommended</Text>
                </View>

                <TouchableOpacity
                  style={styles.dropdownIconRecommendedContainer}>
                  <Image
                    style={styles.dropdownIconRecommended}
                    source={images.dropdownIconReverse}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.recommendedSectionSeparator}></View>
            <View style={styles.secondRow}>
              <View style={styles.secondRowColumn}>
                <View>
                  <Image
                    style={styles.secondRowColumnImg}
                    source={images.gasStationImg}
                  />
                </View>
                <Text style={styles.secondRowColumnText}>$0.37</Text>
              </View>
              <View style={styles.secondRowColumnSeparator}></View>
              <View style={styles.secondRowColumn}>
                <View>
                  <Image
                    style={styles.secondRowColumnImg}
                    source={images.dollarPaymentsConversion}
                  />
                </View>
                <Text style={styles.secondRowColumnText}>$0.00</Text>
              </View>
              <View style={styles.secondRowColumnSeparator}></View>
              <View style={styles.secondRowColumn}>
                <View>
                  <Image
                    style={styles.secondRowColumnImg}
                    source={images.clockTimeImg}
                  />
                </View>
                <Text style={styles.secondRowColumnText}>3 min</Text>
              </View>
              <View style={styles.secondRowColumnSeparator}></View>
              <View style={styles.secondRowColumn}>
                <View>
                  <Image
                    style={styles.secondRowColumnImg}
                    source={images.layersImg}
                  />
                </View>
                <Text style={styles.secondRowColumnText}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.swapBridgeImgContainer}>
          <Image style={styles.swapBridgeImg} source={images.swapBridgeImg} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.swapBtnBlack}>
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
