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
import {styles} from '../BackupMainScreen/style';
import Header from '../../components/Header';
import {colors} from '../../services';

export default function BackupMainScreen({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.topContainer}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}>
          <View style={styles.mainContainer}>
            <Header title={'Backup'} />
            <View style={styles.imagesView}>
              <Image
                source={images.firstBackupScreenEmail}
                style={styles.greenImage}></Image>
              <View style={styles.TextView}>
                <Text style={styles.emilText}>Email</Text>
                <Text style={styles.FaceMapText}>FaceMap</Text>
                <Text style={styles.RecoveryKeyText}>Recovery Key</Text>
                <Text style={styles.BackupText}>Backup</Text>
              </View>
              <View style={styles.Network}>
                <Text style={styles.fieldText}>Email</Text>
                <TextInput
                  style={styles.inputField}
                  onChangeText={onChangeText}
                  placeholder="E.g. name@example.com"
                  placeholderTextColor={colors.disabledBg1}
                />
              </View>
              <TouchableOpacity
                style={styles.addPhoneButtonStyling}
                onPress={() => {
                  navigation.navigate('BackupEmailVerifyPage');
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

{
}
