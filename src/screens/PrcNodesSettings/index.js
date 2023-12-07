import React, {useState} from 'react';
import Header from '../../components/Header';
import {styles} from './style';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../services/utilities/images';

export default function RfcNodesSettings() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={images.landingPageBGImg}>
        <Header title={'PRC Nodes Setting'} />
        <View style={styles.body}>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.rowLeft}
              onPress={() => {
                setChecked(!checked);
              }}>
              <View style={styles.checkedIconContainer}>
                <Image
                  style={styles.checkedIcon}
                  source={checked ? images.checkedIcon : images.unCheckedIcon}
                />
              </View>
              <Text style={styles.rowLeftTextBold}>Bit.Blockstream.info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowRight}>
              <View style={styles.rowRightTextContainer}>
                <Text style={styles.rowRightTextBold}>1020 ms</Text>
                <Text style={styles.rowRightTextNormal}>
                  Block Height: 18449348
                </Text>
              </View>

              <Image
                style={styles.rightArrowIcon}
                source={images.rightArrowIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.rowSeparator}></View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.rowLeft}
              onPress={() => {
                setChecked2(!checked2);
              }}>
              <View style={styles.checkedIconContainer}>
                <Image
                  style={styles.checkedIcon}
                  source={checked2 ? images.checkedIcon : images.unCheckedIcon}
                />
              </View>
              <Text style={styles.rowLeftTextBold}>Bit.Blocknow.io</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowRight}>
              <View style={styles.rowRightTextContainer}>
                <Text style={styles.rowRightTextBoldPink}>Fail</Text>
              </View>
              <TouchableOpacity>
                <Image
                  style={styles.rightArrowIcon}
                  source={images.rightArrowIcon}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <View style={styles.rowSeparator}></View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.rowLeft}
              onPress={() => {
                setChecked3(!checked3);
              }}>
              <View style={styles.checkedIconContainer}>
                <Image
                  style={styles.checkedIcon}
                  source={checked3 ? images.checkedIcon : images.unCheckedIcon}
                />
              </View>
              <Text style={styles.rowLeftTextBold}>Bit.Blockstream.info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowRight}>
              <View style={styles.rowRightTextContainer}>
                <Text style={styles.rowRightTextBold}>654 ms</Text>
                <Text style={styles.rowRightTextNormal}>
                  Block Height: 18449348
                </Text>
              </View>
              <TouchableOpacity>
                <Image
                  style={styles.rightArrowIcon}
                  source={images.rightArrowIcon}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <View style={styles.rowSeparator}></View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.rowLeft}
              onPress={() => {
                setChecked4(!checked4);
              }}>
              <View style={styles.checkedIconContainer}>
                <Image
                  style={styles.checkedIcon}
                  source={checked4 ? images.checkedIcon : images.unCheckedIcon}
                />
              </View>
              <Text style={styles.rowLeftTextBold}>Bit.Blocknow.io</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowRight}>
              <View style={styles.rowRightTextContainer}>
                <Text style={styles.rowRightTextBoldPink}>Fail</Text>
              </View>
              <TouchableOpacity>
                <Image
                  style={styles.rightArrowIcon}
                  source={images.rightArrowIcon}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <View style={styles.rowSeparator}></View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.rowLeft}
              onPress={() => {
                setChecked5(!checked5);
              }}>
              <View style={styles.checkedIconContainer}>
                <Image
                  style={styles.checkedIcon}
                  source={checked5 ? images.checkedIcon : images.unCheckedIcon}
                />
              </View>
              <Text style={styles.rowLeftTextBold}>Bit.Blockstream.info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowRight}>
              <View style={styles.rowRightBoxesContainer}>
                <View style={styles.rowRightBoxLight}></View>
                <View style={styles.rowRightBoxDark}></View>
                <View style={styles.rowRightBoxLight}></View>
              </View>
              <TouchableOpacity>
                <Image
                  style={styles.rightArrowIcon}
                  source={images.rightArrowIcon}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <View style={styles.rowSeparator}></View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.rowLeft}
              onPress={() => {
                setChecked6(!checked6);
              }}>
              <View style={styles.checkedIconContainer}>
                <Image
                  style={styles.checkedIcon}
                  source={checked6 ? images.checkedIcon : images.unCheckedIcon}
                />
              </View>
              <Text style={styles.rowLeftTextBold}>Bit.Blockstream.info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowRight}>
              <View style={styles.rowRightTextContainer}>
                <Text style={styles.rowRightTextBold}>820 ms</Text>
                <Text style={styles.rowRightTextNormal}>
                  Block Height: 18449348
                </Text>
              </View>
              <TouchableOpacity>
                <Image
                  style={styles.rightArrowIcon}
                  source={images.rightArrowIcon}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <View style={styles.rowSeparator}></View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.rowLeft}
              onPress={() => {
                setChecked7(!checked7);
              }}>
              <View style={styles.checkedIconContainer}>
                <Image
                  style={styles.checkedIcon}
                  source={checked7 ? images.checkedIcon : images.unCheckedIcon}
                />
              </View>
              <Text style={styles.rowLeftTextBold}>Bit.Blockstream.info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowRight}>
              <View style={styles.rowRightTextContainer}>
                <Text style={styles.rowRightTextBold}>100 ms</Text>
                <Text style={styles.rowRightTextNormal}>
                  Block Height: 18449348
                </Text>
              </View>
              <TouchableOpacity>
                <Image
                  style={styles.rightArrowIcon}
                  source={images.rightArrowIcon}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <View style={styles.rowSeparator}></View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.rowLeft}
              onPress={() => {
                setChecked8(!checked8);
              }}>
              <View style={styles.checkedIconContainer}>
                <Image
                  style={styles.checkedIcon}
                  source={checked8 ? images.checkedIcon : images.unCheckedIcon}
                />
              </View>
              <Text style={styles.rowLeftTextBold}>Bit.Blockstream.info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowRight}>
              <View style={styles.rowRightTextContainer}>
                <Text style={styles.rowRightTextBold}>1000 ms</Text>
                <Text style={styles.rowRightTextNormal}>
                  Block Height: 18449348
                </Text>
              </View>
              <TouchableOpacity>
                <Image
                  style={styles.rightArrowIcon}
                  source={images.rightArrowIcon}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
