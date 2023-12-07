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

export default function BackupPersonalKeyShare({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'Backup'} />
        <Image style={styles.stages} source={images.backupPersonalKeyShare} />
        <View style={styles.stagesText}>
          <Text style={[styles.stagesText1, styles.boldBlack]}>Email</Text>
          <Text style={styles.stagesText2}>FaceMap</Text>
          <Text style={styles.stagesText3}>Recovery Key</Text>
          <Text style={styles.stagesText4}>Backup</Text>
        </View>

        <Text style={styles.textHeading}>Back Up Personal Key Share</Text>
        <Text style={styles.textBody}>
          Encrypted your key share with Recovery Key and store the encrypted
          data in Creso Server.
        </Text>
        <Image source={images.personalKeyShareImg} style={styles.image} />

        <TouchableOpacity
          style={styles.buttonField}
          onPress={() => navigation.navigate('Home')}>
          <View style={styles.button}>
            <Text style={styles.text}>Next</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
