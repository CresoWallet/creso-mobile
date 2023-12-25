import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../services/utilities/images';
import {styles} from './style';
import Header from '../../components/Header';
import {colors} from '../../services';

export default function BackupEnableLock({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'Backup'} />
        <Image style={styles.stages} source={images.enableDeviceLock} />
        <View style={styles.stagesText}>
          <Text style={[styles.stagesText1, styles.boldBlack]}>Email</Text>
          <Text style={styles.stagesText2}>FaceMap</Text>
          <Text style={styles.stagesText3}>Recovery Key</Text>
          <Text style={styles.stagesText4}>Backup</Text>
        </View>

        <Text style={styles.textHeading}>Enable Device Lock</Text>
        <Text style={styles.textBody}>
          Enable device lock to ensure that only you can access your account.
        </Text>
        <Image source={images.deviceLockImg} style={styles.image} />

        <TouchableOpacity
          style={styles.buttonField}
          onPress={() => {
            navigation.navigate('BackupRcoveryKey');
          }}>
          <View style={styles.button}>
            <Text style={styles.text}>Enable Device Lock</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
