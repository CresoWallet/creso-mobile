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

export default function Language() {
  const [checked, setChecked] = useState('english');
  //   const [checked2, setChecked2] = useState(false);

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={images.landingPageBGImg}>
        <Header title={'Language'} />
        <View style={styles.body}>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.rowLeft}
              onPress={() => {
                setChecked('english');
              }}>
              <View style={styles.checkedIconContainer}>
                <Image
                  style={styles.checkedIcon}
                  source={
                    checked === 'english'
                      ? images.checkedIcon
                      : images.unCheckedIcon
                  }
                />
              </View>
              <Text style={styles.rowLeftTextBold}>English</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowSeparator}></View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.rowLeft}
              onPress={() => {
                setChecked('arabic');
              }}>
              <View style={styles.checkedIconContainer}>
                <Image
                  style={styles.checkedIcon}
                  source={
                    checked === 'arabic'
                      ? images.checkedIcon
                      : images.unCheckedIcon
                  }
                />
              </View>
              <Text style={styles.rowLeftTextBold}>Arabic</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
