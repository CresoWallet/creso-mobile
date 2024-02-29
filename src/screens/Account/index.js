import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';

import backendURL from '../../services/config/backendURL';
import { colors } from '../../services';

import { useDispatch, useSelector } from 'react-redux';
import { handleFalse, handleTrue } from '../../store/isSignedInSlice';
import { handleRemoveToken } from '../../store/token';
import { getUserDetails, logOut, sendOTPMail } from '../../clientApi';
import { axiosInstance } from '../../services/config/axios';
import { launchImageLibrary } from 'react-native-image-picker';
import { selectUserData } from '../../store/user';
import { handleEmptyAAWallet } from '../../store/AAWalletAddress';
import { handleEmptyWallet } from '../../store/WalletAddress';

export default function Account({ navigation }) {

  const dispatch = useDispatch();

  const userDetail = useSelector(selectUserData);


  const [loader, setLoader] = useState(false);
  const [verify, setVerify] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [OTPloader, setOTPLoader] = useState(false);
  const [imgUri, setImgUri] = useState(null);

  const uploadPhoto = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        // alert(res.customButton);
      } else {
        const source = { uri: res.uri };
        setImgUri(res.assets[0].uri);
      }
    });
  };

  const handleVerify = async () => {
    if (!verify) {
      setOTPLoader(true);
      var myHeaders = new Headers();
      myHeaders.append('auth_token', `"auth_token ${userToken}"`);
      myHeaders.append('Cookie', `auth_token=${userToken}`);

      var formdata = new FormData();
      formdata.append('email', userEmail);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch('https://core.creso.io/api/sendOTP', requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          setOTPLoader(false);
          navigation.navigate('OTP');
        })
        .catch(error => {
          console.log('error', error);
          setOTPLoader(false);
        });
    }
  };

  const handleLogout = async () => {
    dispatch(handleRemoveToken())
    dispatch(handleEmptyAAWallet())
    dispatch(handleEmptyWallet())
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}>
          <Header title={'Account'} />
          <View style={styles.topContainer}>
            <Text style={styles.textalignment}>Email/Phone</Text>
            <View style={styles.emailContainer}>
              <View>
                <Text style={styles.textColorBlack}>{userDetail.email}</Text>
              </View>
              {OTPloader ? (
                <View style={styles.connectedButtonStyling}>
                  <ActivityIndicator color={colors.black} size={20} />
                </View>
              ) : (
                <View
                  style={styles.connectedButtonStyling}
                // onPress={handleVerify}
                >
                  <Text style={styles.connectedTextStyling}>
                    Connected
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.informativeParaView}>
              <View>
                <Image source={images.Info} style={styles.infoImage}></Image>
              </View>
              <View style={styles.infoPara}>
                <Text style={styles.textColorgrey}>
                  Either email or phone can be used to access your wallet. It is
                  recommended to add both in case either of them is lost.
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.addPhoneButtonStyling}
              onPress={uploadPhoto}>
              <Text style={styles.textColor}>Add Photo</Text>
            </TouchableOpacity>
            <View style={styles.topContainer}>
              <Text style={styles.textalignment}>FaceMap</Text>
              <View style={styles.emailContainer}>
                <View style={styles.myOwnFacepadding}>
                  <Text style={styles.textColorBlack}>My own Face Map</Text>
                </View>
                <View style={styles.connectedButtonStyling}>
                  <Text style={styles.connectedTextStyling}>Connected</Text>
                </View>
              </View>
              <View style={styles.informativeParaView}>
                <View>
                  <Image source={images.Info} style={styles.infoImage}></Image>
                </View>
                <View style={styles.infoPara}>
                  <Text style={styles.textColorgrey}>
                    You can use a trusted family member of friend to restore
                    your wallet, just in case something happens to your own
                    face. It is only used to restore your account as an
                    alternative.
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.addPhoneButtonStyling}>
              <Text style={styles.textColor}>Add Another Trusted FaceMap</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.advancedContainer}
              onPress={() => navigation.navigate('Advanced')}>
              <Text style={styles.textColorBlack}>Advanced</Text>
              <Image source={images.ArrowBitcoin} style={styles.arrowImage} />
            </TouchableOpacity>

            {loader ? (
              <View
                style={styles.disconnectButtonStyling}
                onPress={() => {
                  handleLogout;
                }}>
                <ActivityIndicator color={colors.accountpink} size={30} />
              </View>
            ) : (
              <TouchableOpacity
                style={styles.disconnectButtonStyling}
                onPress={handleLogout}>
                <Text style={styles.textColorPink}>Disconnect</Text>
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
