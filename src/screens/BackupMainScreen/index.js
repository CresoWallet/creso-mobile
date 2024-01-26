import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TextInput,
  onChangeText,
  ActivityIndicator,
} from 'react-native';
import images from '../../services/utilities/images';
import {styles} from '../BackupMainScreen/style';
import Header from '../../components/Header';
import {colors} from '../../services';
import {useSelector} from 'react-redux';
import {getUserDetails, sendOTPMail} from '../../clientApi';
import {axiosInstance} from '../../services/config/axios';

export default function BackupMainScreen({navigation}) {
  const [userEmail, setUserEmail] = useState('');
  const [loader, setLoader] = useState(false);

  const userDetail = useSelector(state => state?.userDetailSlice?.userDetail);

  useEffect(() => {
    // getCurrentUser();
    setUserEmail(userDetail.email);
  }, []);

  const userToken = useSelector(state => state?.tokenSlice?.token);

  const getCurrentUser = async () => {
    const res = await getUserDetails(userToken);
    setUserEmail(res.data.user.email);
  };

  const handleNext = async () => {
    setLoader(true);

    var myHeaders = new Headers();
    myHeaders.append('auth_token', `"auth_token ${userToken}"`);
    myHeaders.append('Cookie', `auth_token=${userToken}`);

    var formdata = new FormData();
    formdata.append('email', 'test5@gmail.com');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://core.creso.io/api/sendOTP', requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log('----------->>>>', result);

        navigation.navigate('BackupEmailVerifyPage', {
          email: userEmail,
        });
        setLoader(false);
      })
      .catch(error => {
        console.log('error', error);
        setLoader(false);
      });
  };

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
                  placeholder="E.g. name@example.com"
                  placeholderTextColor={colors.disabledBg1}
                  value={userEmail}
                  onChangeText={text => {
                    setUserEmail(text);
                  }}
                />
              </View>
              {loader ? (
                <View style={styles.addPhoneButtonStyling}>
                  <ActivityIndicator color={'white'} size={30} />
                </View>
              ) : (
                <TouchableOpacity
                  style={styles.addPhoneButtonStyling}
                  onPress={handleNext}>
                  <Text style={styles.textColor}>Next</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

{
}
