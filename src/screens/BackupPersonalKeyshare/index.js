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
import CryptoJS from 'crypto-js';

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

  // const downloadFile = async fileURL => {
  //   console.log(fileURL, userEmail);

  //   const {config, fs} = RNFetchBlob;
  //   const fileDirectory = fs.dirs.DownloadDir;
  //   // let file_ext = getFileExtention(fileURL);

  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       {
  //         title: 'Storage Permission',
  //         message: 'Creso Mobile wants to access your files and storage',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'Allow',
  //       },
  //     );

  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('Storage permission Granted');

  //       // Configure RNFetchBlob
  //       config({
  //         fileCache: true,
  //         addAndroidDownloads: {
  //           useDownloadManager: true,
  //           notification: true,
  //           path: fileDirectory + '/' + userEmail, // Add '/' between directory and filename
  //           description: 'File download',
  //         },
  //       });

  //       // Use RNFetchBlob for downloading
  //       RNFetchBlob.fetch('GET', decodeURIComponent(fileURL), {}).then(res => {
  //         console.log('Backup successfully saved to', res.path());
  //       });

  //       setLoader(false);
  //     } else {
  //       console.log('Storage permission denied');
  //       // Handle denied permission (e.g., show a message to the user)
  //       setLoader(false);
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //     // Handle errors (e.g., show an error message to the user)
  //     setLoader(false);
  //   }
  // };

  // const downloadFile = async fileURL => {
  //   console.log(fileURL, userEmail);

  //   const {config, fs} = RNFetchBlob;
  //   const fileDirectory = fs.dirs.DownloadDir;

  //   // Request WRITE_EXTERNAL_STORAGE permission
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       {
  //         title: 'Storage Permission',
  //         message: 'Creso Mobile wants to access your files and storage',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'Allow',
  //       },
  //     );

  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('Storage permission Granted');

  //       // Configure RNFetchBlob
  //       config({
  //         fileCache: true,
  //         addAndroidDownloads: {
  //           useDownloadManager: true,
  //           notification: true,
  //           path: fileDirectory + '/' + userEmail + '_backup', // Add '/' between directory and filename
  //           description: 'File download',
  //         },
  //       });
  //       RNFetchBlob.fetch('GET', decodeURIComponent(fileURL), {}).then(res => {
  //         console.log('Backup successfully saved to ', res.path());
  //       });

  //       setLoader(false);
  //     } else {
  //       console.log('Storage permission denied');
  //       setLoader(false);
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //     setLoader(false);
  //   }
  // };

  ///////////////

  const requestStoragePermission = async (fileURL, salt) => {
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
        downloadAndDecryptFile(fileURL, salt);
      } else {
        console.log('Storage permission denied');
        setLoader(false);
      }
    } catch (err) {
      console.warn(err);
      setLoader(false);
    }
  };

  const downloadAndDecryptFile = async (fileURL, encryptionKey) => {
    const {config, fs} = RNFetchBlob;
    const fileDirectory = fs.dirs.DownloadDir;

    try {
      const response = await fetch(fileURL);
      const encryptedData = await response.json(); // Assuming API returns JSON

      // Extract components from the API response
      const {iv, data, tag, salt} = encryptedData;

      // Derive the key using a key derivation function (e.g., PBKDF2)
      const derivedKey = CryptoJS.PBKDF2(encryptionKey, salt, {
        keySize: 256 / 32, // Use a 256-bit key size (adjust as needed)
        iterations: 10000, // Adjust the number of iterations as needed
      });

      // Decrypt the file content
      const decryptedData = CryptoJS.AES.decrypt(
        {ciphertext: CryptoJS.enc.Base64.parse(data)},
        derivedKey,
        {
          iv: CryptoJS.enc.Base64.parse(iv),
          tag: CryptoJS.enc.Base64.parse(tag),
        },
      );

      const decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);

      // Save the decrypted content to a file
      const filePath = fileDirectory + '/decrypted_wallet_backup.json';
      await fs.writeFile(filePath, decryptedText, 'utf8');

      console.log('Backup successfully saved to ', filePath);
      setLoader(false);
    } catch (error) {
      console.error('Error downloading and decrypting file:', error);
      setLoader(false);
    }
  };

  // const downloadFile = fileURL => {
  //   console.log('============>>>>>>>>>>>', fileURL);

  //   const {config, fs} = RNFetchBlob;
  //   const fileDirectory = fs.dirs.DownloadDir;

  //   const newUrl = 'https://' + fileURL + '.com';

  //   console.log(newUrl);

  //   config({
  //     fileCache: true,
  //     addAndroidDownloads: {
  //       useDownloadManager: true,
  //       notification: true,
  //       path: fileDirectory + userEmail + '_backup',
  //       description: 'File download',
  //     },
  //   })
  //     .fetch('GET', newUrl, {})
  //     .then(res => {
  //       console.log('Backup successfully saved to ', res.path());
  //       setLoader(false);
  //     });
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

    fetch('https://core.creso.io/api/backup/wallet', requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.data) {
          requestStoragePermission(result.data, result.salt);
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
          <TouchableOpacity style={styles.buttonField}>
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
