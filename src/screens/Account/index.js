import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';

import backendURL from '../../services/config/backendURL';
import {colors} from '../../services';

import {useDispatch, useSelector} from 'react-redux';
import {handleFalse, handleTrue} from '../../store/isSignedInSlice';
import {handleRemoveToken} from '../../store/token';
import {getUserDetails, logOut, sendOTPMail} from '../../clientApi';
import {axiosInstance} from '../../services/config/axios';

export default function Account({navigation}) {
  const [loader, setLoader] = useState(false);

  const [verify, setVerify] = useState(false);

  const [userEmail, setUserEmail] = useState('');

  const dispatch = useDispatch();

  const [OTPloader, setOTPLoader] = useState(false);

  const handleVerify = async () => {
    if (!verify) {
      setOTPLoader(true);
      var myHeaders = new Headers();
      myHeaders.append('auth_token', `"auth_token ${userToken}"`);
      myHeaders.append('Cookie', `auth_token=${userToken}`);

      var formdata = new FormData();
      formdata.append('email', 'aleemsimation@gmail.com');

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://creso-b02eab9f8c40.herokuapp.com/api/sendOTP',
        requestOptions,
      )
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
    setLoader(true);

    try {
      const res = await logOut();
      if (res) {
        console.log(res);
        setLoader(false);
        dispatch(handleFalse());
        dispatch(handleRemoveToken());
      }
    } catch (err) {
      console.log(err);
      setLoader(false);
    } finally {
    }

    // var myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');

    // var raw = JSON.stringify({});

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow',
    // };

    // fetch('https://creso-b02eab9f8c40.herokuapp.com/api/logout', requestOptions)
    //   .then(response => response.text())
    //   .then(result => {
    //     console.log(result);
    //     setLoader(false);
    //     dispatch(handleFalse());
    //     dispatch(handleRemoveToken());
    //   })
    //   .catch(error => {
    //     console.log('error', error);
    //     setLoader(false);
    //   });
  };

  const userDetail = useSelector(state => state?.userDetailSlice?.userDetail);

  useEffect(() => {
    // getCurrentUser();
    setUserEmail(userDetail.email);
  }, []);

  const userToken = useSelector(state => state?.tokenSlice?.token);

  const getCurrentUser = async () => {
    const res = await getUserDetails(userToken);
    setUserEmail(res.data.user.email);
    setVerify(res.data.user.isEmailVerified);
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
                <Text style={styles.textColorBlack}>{userEmail}</Text>
              </View>
              {OTPloader ? (
                <View style={styles.connectedButtonStyling}>
                  <ActivityIndicator color={colors.black} size={20} />
                </View>
              ) : (
                <TouchableOpacity
                  style={styles.connectedButtonStyling}
                  onPress={handleVerify}>
                  <Text style={styles.connectedTextStyling}>
                    {verify ? 'Connected' : 'Verify'}
                  </Text>
                </TouchableOpacity>
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

            <TouchableOpacity style={styles.addPhoneButtonStyling}>
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

            {/* <TouchableOpacity
              style={styles.disconnectButtonStyling}
              onPress={() => {
                handleLogout;
                console.log('run');
              }}>
              <Text style={styles.textColorPink}>Disconnect</Text>
            </TouchableOpacity> */}

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
