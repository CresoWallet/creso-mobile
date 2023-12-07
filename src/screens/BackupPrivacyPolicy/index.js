import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../services/utilities/images';
import {styles} from './style';
import Header from '../../components/Header';

export default function BackupPrivacyPolicy({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'Backup'} />
        <Image style={styles.stages} source={images.backupPrivacyPolicy} />
        <View style={styles.stagesText}>
          <Text style={[styles.stagesText1, styles.boldBlack]}>Email</Text>
          <Text style={styles.stagesText2}>FaceMap</Text>
          <Text style={styles.stagesText3}>Recovery Key</Text>
          <Text style={styles.stagesText4}>Backup</Text>
        </View>

        <Text style={styles.textHeading}>Privacy Policy</Text>
        <View style={styles.textBody}>
          <Text style={styles.textBody}>
            We would like to use your front camera to collect some data of your
            facial features and store it in an encrypted anonymous format to
            ensure that only you can access and restore your assets in the
            future. Please note that this is{' '}
            <Text style={styles.link}>NOT KYC</Text>, and it is{' '}
            <Text style={styles.link}>absolutely privacy-safe.</Text>
          </Text>

          <Text style={styles.textBody}>
            You are not required to provide your real name or any other personal
            information. Do not worry about your privacy, as none of your photos
            or videos will be uploaded or saved. We only encrypt and store some
            anonymous facial features data, which is unreadable and meaningless
            to any third party. Even if this data is stolen or leaked to the
            public, your privacy and assets are still safe.
          </Text>

          <Text style={styles.textBody}>
            Learn more about technology, privacy and security details:
            <Text style={styles.link}>https://www.facetec.com</Text>
          </Text>
        </View>

        <TouchableOpacity
          style={styles.buttonField}
          onPress={() => {
            navigation.navigate('BackupBiometric');
          }}>
          <View style={styles.button}>
            <Text style={styles.text}>Next</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
