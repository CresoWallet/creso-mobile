import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
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
import {useDispatch, useSelector} from 'react-redux';
import {getUserDetails} from '../../clientApi';
import RNFS, {downloadFile} from 'react-native-fs';
import {encode} from 'base-64';
import {PermissionsAndroid} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export default function BackupPersonalKeyShare({navigation}) {
  const [secretKey, setSecretKey] = useState('');
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState('');
  const [loader, setLoader] = useState(false);

  const userDetail = useSelector(state => state?.userDetailSlice?.userDetail);

  useEffect(() => {
    setUserEmail(userDetail.email);
  }, []);

  const userToken = useSelector(state => state?.tokenSlice?.token);

  const requestStoragePermission = async fileURL => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'Creso Mobile wants to access your files and storage',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'Allow',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage permisson Granted');
        downloadFile(fileURL);
      } else {
        console.log('Storage permission denied');
        setLoader(false);
      }
    } catch (err) {
      console.warn(err);
      setLoader(false);
    }
  };

  const downloadFile = async fileURL => {
    console.log(fileURL, userEmail);

    const {config, fs} = RNFetchBlob;
    const fileDirectory = fs.dirs.DownloadDir;

    // Request WRITE_EXTERNAL_STORAGE permission
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'Creso Mobile wants to access your files and storage',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'Allow',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage permission Granted');

        // Configure RNFetchBlob
        config({
          fileCache: true,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: fileDirectory + '/' + userEmail + '_backup', // Add '/' between directory and filename
            description: 'File download',
          },
        });

        // Use RNFetchBlob for downloading
        RNFetchBlob.fetch('GET', fileURL, {}).then(res => {
          console.log('Backup successfully saved to ', res.path());
        });

        setLoader(false);
      } else {
        console.log('Storage permission denied');
        setLoader(false);
      }
    } catch (err) {
      console.warn(err);
      setLoader(false);
    }
  };

  // const downloadFile = fileURL => {
  //   console.log(fileURL, userEmail);

  //   const {config, fs} = RNFetchBlob;
  //   const fileDirectory = fs.dirs.DownloadDir;

  //   config({
  //     fileCache: true,
  //     addAndroidDownloads: {
  //       useDownloadManager: true,
  //       notification: true,
  //       path: fileDirectory + userEmail + '_backup',
  //       description: 'File download',
  //     },
  //   });

  //   fetch('GET', fileURL, {}).then(res => {
  //     console.log('Backup successfully saved to ', res.path());
  //   });
  // };

  const handleBackup = async () => {
    setLoader(true);
    var myHeaders = new Headers();

    myHeaders.append('auth_token', `"auth_token ${userToken}"`);
    myHeaders.append('Cookie', `auth_token=${userToken}`);
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      passkey: secretKey,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://creso-b02eab9f8c40.herokuapp.com/api/backup/wallet',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        if (result.data) {
          requestStoragePermission(result.data);
        }
      })
      .catch(error => {
        console.log('error', error);
        setLoader(false);
      });
  };

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
        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            placeholder="Enter Passkey Here"
            placeholderTextColor={colors.disabledBg2}
            value={secretKey}
            onChangeText={text => setSecretKey(text)}
          />
        </View>
        <Text style={styles.textHeading}>Back Up Personal Key Share</Text>
        <Text style={styles.textBody}>
          Encrypted your key share with Recovery Key and store the encrypted
          data in Creso Server.
        </Text>
        <Image source={images.personalKeyShareImg} style={styles.image} />

        {loader ? (
          <TouchableOpacity
            style={styles.buttonField}
            onPress={() => {
              handleBackup();
            }}>
            <View style={styles.button}>
              <ActivityIndicator
                style={{marginTop: 20}}
                color={'white'}
                size={30}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.buttonField}
            onPress={() => {
              handleBackup();
            }}>
            <View style={styles.button}>
              <Text style={styles.text}>Next</Text>
            </View>
          </TouchableOpacity>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}
