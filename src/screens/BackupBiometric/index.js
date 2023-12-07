import React from 'react';
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TextInput,
  onChangeText,
} from 'react-native';
import images from '../../services/utilities/images';
import {styles} from '../../screens/BackupBiometric/style';
import Header from '../../components/Header';

export default function BackupBiometric({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.topContainer}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}>
          <View style={styles.mainContainer}>
            <Header title={'Backup'} />
            {/* <View style={styles.mainImagesView}> */}
            <View style={styles.imagesView}>
              <Image
                source={images.backupBiometric}
                style={styles.greenImage}></Image>
              <View style={styles.TextView}>
                <Text style={styles.emilText}>Email</Text>
                <Text style={styles.FaceMapText}>FaceMap</Text>
                <Text style={styles.RecoveryKeyText}>Recovery Key</Text>
                <Text style={styles.BackupText}>Backup</Text>
              </View>
              <View style={styles.Network}>
                <Text style={styles.heading}>Biometric Enrollment</Text>
                <Text style={styles.content}>
                  None of your photos or videos but only a minimum data of your
                  facial features will be uploaded and stored in an encrypted
                  and anonymous format, unreadable and meaningless to Creso or
                  any third party.
                </Text>
              </View>
              <View style={styles.buttonsTopView}>
                <View style={styles.buttonsMainView}>
                  <View style={styles.bulbButton}>
                    <Image
                      source={images.bulb}
                      style={styles.bulbImagesStyling}
                    />
                    <Text style={styles.textColorBulb}>
                      Make sure your face is evenly lit
                    </Text>
                  </View>
                </View>
                <View style={styles.buttonsMainView}>
                  <View style={styles.bulbButton}>
                    <Image
                      source={images.trash}
                      style={styles.bulbImagesStyling}
                    />
                    <Text style={styles.textColorBulb}>
                      Remove hats and glasses
                    </Text>
                  </View>
                </View>
                <View style={styles.buttonsMainView}>
                  <View style={styles.bulbButton}>
                    <Image
                      source={images.iphone}
                      style={styles.bulbImagesStyling}
                    />
                    <Text style={styles.textColorBulb}>
                      Hold up your photos at eye level
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.addPhoneButtonStyling}
                onPress={() => {
                  navigation.navigate('BackupEnableLock');
                }}>
                <Text style={styles.textColor}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* </View> */}
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
