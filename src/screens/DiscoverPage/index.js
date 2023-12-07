import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../services/utilities/images';
import {styles} from './style';

export default function DiscoverPage() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={images.landingPageBGImg}
        style={[styles.bgImage]}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerHeadingText}>Discover</Text>
            <View style={styles.headerImgField}>
              <TouchableOpacity>
                <Image source={images.star} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={images.clock} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={images.playlistPlus} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground
              source={images.smartWalletImg}
              style={styles.smartWalletImg}></ImageBackground>

            {/* <View style={styles.scrollThing}>
            <View style={styles.grayDot}>
              <Text></Text>
            </View>
            <View style={styles.grayDot}>
              <Text></Text>
            </View>
            <View style={styles.grayDot}>
              <Text></Text>
            </View>
            <View style={styles.grayDot}>
              <Text></Text>
            </View>
          </View> */}

            <View style={styles.capView}>
              <View style={styles.capBox}>
                <View style={styles.capViewSubSection}>
                  <Text style={styles.capText}>Market Cap</Text>
                  <Image source={images.whiteCorner} />
                </View>
                <Text style={styles.capMoneyText}>$1,312.6B</Text>
                <View style={styles.percentage}>
                  <Image source={images.arrowRed} />
                  <Text style={styles.textLoser}>9.93%</Text>
                </View>
              </View>

              <View style={styles.capBox}>
                <View style={styles.capViewSubSection}>
                  <Text style={styles.capText}>NFT Cap</Text>
                  <Image source={images.whiteCorner} />
                </View>
                <Text style={styles.capMoneyText}>$2,16B</Text>
                <View style={styles.percentage}>
                  <Image source={images.arrowGreen} />
                  <Text style={styles.textGainer}>2.91%</Text>
                </View>
              </View>
            </View>

            <View style={styles.flexRow}>
              <TouchableOpacity>
                <View style={styles.secondSection}>
                  <Image
                    source={images.joystick}
                    style={styles.secondSectionIcon}
                  />
                  <Text style={styles.secondSectionText}>Games</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.secondSection}>
                  <Image
                    source={images.shop}
                    style={styles.secondSectionIcon}
                  />
                  <Text style={styles.secondSectionText}>MarketPlace</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.secondSection}>
                  <Image
                    source={images.dollarIcon}
                    style={styles.secondSectionIcon}
                  />
                  <Text style={styles.secondSectionText}>DeFi</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.flexRow}>
              <TouchableOpacity>
                <Image
                  style={styles.thirdSectionImg}
                  source={images.cryptoNews}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.thirdSectionImg}
                  source={images.discoverDapps}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.topNFTSection}>
              <View style={styles.flexRow}>
                <View style={styles.flexRow}>
                  <Text style={styles.topNFTtext}>Top NFTs</Text>
                  <Text>(24h)</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.textLoser}>See more</Text>
                </TouchableOpacity>
              </View>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.NFTsection}>
                  <View>
                    <Image source={images.degods} style={styles.nftIcon} />
                  </View>
                  <Text style={styles.boldText}>Degods</Text>
                  <Text style={styles.textAlignCenter}>3.141 ETH</Text>
                </View>

                <View style={styles.NFTsection}>
                  <View>
                    <Image source={images.azuki} style={styles.nftIcon} />
                  </View>
                  <Text style={styles.boldText}>Azuki</Text>
                  <Text style={styles.textAlignCenter}>3.141 ETH</Text>
                </View>

                <View style={styles.NFTsection}>
                  <View>
                    <Image source={images.potatoz} style={styles.nftIcon} />
                  </View>
                  <Text style={styles.boldText}>The Potatoz</Text>
                  <Text style={styles.textAlignCenter}>3.141 ETH</Text>
                </View>

                <View style={styles.NFTsection}>
                  <View>
                    <Image source={images.hvmtl} style={styles.nftIcon} />
                  </View>
                  <Text style={styles.boldText}>HV-MTL</Text>
                  <Text style={styles.textAlignCenter}>3.141 ETH</Text>
                </View>

                <View style={styles.NFTsection}>
                  <View>
                    <Image source={images.degods} style={styles.nftIcon} />
                  </View>
                  <Text style={styles.boldText}>Degods</Text>
                  <Text style={styles.textAlignCenter}>3.141 ETH</Text>
                </View>

                <View style={styles.NFTsection}>
                  <View>
                    <Image source={images.degods} style={styles.nftIcon} />
                  </View>
                  <Text style={styles.boldText}>Degods</Text>
                  <Text style={styles.textAlignCenter}>3.141 ETH</Text>
                </View>
              </ScrollView>

              <View style={[styles.capView]}>
                <View style={styles.capBox}>
                  <View style={styles.capViewSubSection}>
                    <Text style={styles.capText}>24H Volume</Text>
                    <Image source={images.whiteCorner} />
                  </View>
                  <Text style={styles.capMoneyText}>$125.6B</Text>
                  <View style={styles.percentage}>
                    <Image source={images.arrowRed} />
                    <Text style={styles.textLoser}>9.93%</Text>
                  </View>
                </View>

                <View style={[styles.capBox, , styles.gasBurnBox]}>
                  <View style={styles.capViewSubSection}>
                    <Text style={styles.capText}>Gas Burn Leaderboard</Text>
                    <Image
                      source={images.whiteCorner}
                      style={styles.whiteCorner}
                    />
                  </View>
                  <Text style={styles.capMoneyText}>$2,16B</Text>
                  <View style={styles.percentage}>
                    <Text style={styles.boldText}>386.58 ETH</Text>
                  </View>
                </View>
              </View>

              <View style={[styles.flexRow]}>
                <TouchableOpacity>
                  <Text style={[styles.balanceType, styles.neonBtn]}>
                    Top Gainers
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[styles.balanceType]}>Top Losers</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.flexRow}>
                <View style={styles.flexRow}>
                  <View>
                    <Image source={images.suredefi} style={styles.nftIcon} />
                  </View>
                  <View style={styles.leftPadding}>
                    <Text style={styles.heading}>SURE</Text>
                    <Text style={styles.textLight}>240 inSure DeFi</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.heading}>$0,0041.66</Text>
                  <View style={styles.flexRowCenter}>
                    <Image source={images.arrowRed} style={styles.arrowRed} />
                    <Text style={styles.textLoser}>0.23%</Text>
                  </View>
                </View>
              </View>

              <View style={styles.divider}></View>

              <View style={styles.flexRow}>
                <View style={styles.flexRow}>
                  <View>
                    <Image source={images.cfx} style={styles.nftIcon} />
                  </View>
                  <View style={styles.leftPadding}>
                    <Text style={styles.heading}>CFX</Text>
                    <Text style={styles.textLight}>76 Conflux</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.heading}>$0.159046</Text>
                  <View style={styles.flexRowCenter}>
                    <Image
                      source={images.arrowGreen}
                      style={styles.arrowGreen}
                    />
                    <Text style={styles.textGainer}>44.91%</Text>
                  </View>
                </View>
              </View>

              <View style={styles.divider}></View>

              <View style={styles.flexRow}>
                <View style={styles.flexRow}>
                  <View>
                    <Image source={images.mina} style={styles.nftIcon} />
                  </View>
                  <View style={styles.leftPadding}>
                    <Text style={styles.heading}>MINA</Text>
                    <Text style={styles.textLight}>51 Mina Protocol</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.heading}>$0,8366.21</Text>
                  <View style={styles.flexRowCenter}>
                    <Image
                      source={images.arrowGreen}
                      style={styles.arrowGreen}
                    />
                    <Text style={styles.textGainer}>101.91%</Text>
                  </View>
                </View>
              </View>

              <View style={styles.divider}></View>

              <View style={styles.flexRow}>
                <View style={styles.flexRow}>
                  <View>
                    <Image source={images.pepe} style={styles.nftIcon} />
                  </View>
                  <View style={styles.leftPadding}>
                    <Text style={styles.heading}>PEPE</Text>
                    <Text style={styles.textLight}>51PEPE</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.heading}>$0,0041.66</Text>
                  <View style={styles.flexRowCenter}>
                    <Image
                      source={images.arrowGreen}
                      style={styles.arrowGreen}
                    />
                    <Text style={styles.textGainer}>0.23%</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.marginBtn}></View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
