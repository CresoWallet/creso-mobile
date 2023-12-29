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
import {styles} from '../../screens/BackupRcoveryKey/style';
import Header from '../../components/Header';

export default function BackupRcoveryKey({navigation}) {
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
                source={images.backupRecovery}
                style={styles.greenImage}></Image>
              <View style={styles.TextView}>
                <Text style={styles.emilText}>Email</Text>
                <Text style={styles.FaceMapText}>FaceMap</Text>
                <Text style={styles.RecoveryKeyText}>Recovery Key</Text>
                <Text style={styles.BackupText}>Backup</Text>
              </View>
              <View style={styles.Network}>
                <Text style={styles.heading}>Save Recovery Key</Text>
                <Text style={styles.content}>
                  Sync the Recovery Key to your personal cloud storage
                </Text>
              </View>
              <View style={styles.buttonsTopView}>
                <Text style={styles.cloudContent}>Personal Cloud Storage</Text>
                <View style={styles.buttonsMainView}>
                  <TouchableOpacity style={styles.bulbButton}>
                    <Image
                      source={images.icloudDrive}
                      style={styles.bulbImagesStyling}
                    />
                    <Text style={styles.textColorBulb}>iCloud Drive</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonsMainView}>
                  <TouchableOpacity style={styles.bulbButton}>
                    <Image
                      source={images.googleDrive}
                      style={styles.bulbImagesStyling}
                    />
                    <Text style={styles.textColorBulb}>Google Drive</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonsMainView}>
                  <TouchableOpacity style={styles.bulbButton}>
                    <Image
                      source={images.baiduNetdisk}
                      style={styles.baiduImagesStyling}
                    />
                    <Text style={styles.textColorBulb}>Baidu Netdisk</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={styles.addPhoneButtonStyling}
                onPress={() => {
                  navigation.navigate('BackupPersonalKeyShare');
                }}>
                <Text style={styles.textColor}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
