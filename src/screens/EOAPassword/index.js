import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style';
import images from '../../services/utilities/images';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import { colors, sizes } from '../../services';
import Header from '../../components/Header';
import { selectAuthToken } from '../../store/token';
import formatToJSON from '../../services/utilities/JsonLog';
import { createEOAWallet } from '../../clientApi';
import { handleAddWallet, handleEmptyWallet, selectWallet } from '../../store/WalletAddress';

export default function EOAPassword({ navigation, route }) {
  const wallet = useSelector(selectWallet)
  console.log(wallet);

  const dispatch = useDispatch()

  const authToken = route?.params?.authToken
  const authTokenRedux = useSelector(selectAuthToken)

  const [token, setToken] = useState()


  useEffect(() => {
    if (!authToken) {
      setToken(authTokenRedux)
    } else {
      setToken(authToken)
    }
  }, [route, authToken, authTokenRedux])

  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [confirmPass, setConfirmPass] = useState('');
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const [loader, setLoader] = useState(false)
  const [walletName, setWalletName] = useState('')
  const [error, setError] = useState('')

  const handleCreateNewEOAWallet = async () => {


    if (pass === confirmPass) {
      setError('')
      setLoader(true)
      try {
        const response = await createEOAWallet(token, walletName)
        if (response.status == 200) {
          const obj = {
            walletName,
            walletAddress: response?.data?.data?.walletAddress
          }
          dispatch(handleAddWallet(obj))
          const seedPhrase = extractWords(response.data.data.seedPhrase)
          navigation.navigate('SecureWallet', { authToken: token, seedPhrase })
          setLoader(false)
        } else {
          setError(response?.data?.message)
          setLoader(false)
        }
      } catch (error) {
        setLoader(false)
        console.log(error.message);
        setError(error.message)
      }
    } else { 
      setError('*Password not matched')
    }

  }

  const res = {
    "data": {
      "data": {
        "seedPhrase": "mosquito fantasy benefit chapter afraid husband arm original riot illegal draft crash",
        "userId": "65dc3d6b747e6565d664cedb",
        "walletAddress": "0xDfF15b02d7ddB99C69D32682eAd1e3CF7Ec29cB9",
        // slkafhfhlkjal
        "seedPhrase": "tank spice bottom alone alert unveil lava vivid shadow assist echo donkey",
        "userId": "65dc9852193501bd9ae31199",
        "walletAddress": "0x41FA5D8Ffe178bbFb6a9Fc2887158987D1408383",
      },
      "message": "EOA wallet Successfully created"
    },
    "status": 200,
    "headers": {
      "access-control-allow-credentials": "true",
      "connection": "keep-alive",
      "content-length": "252",
      "content-type": "application/json; charset=utf-8",
      "date": "Mon, 26 Feb 2024 12:52:35 GMT",
      "etag": "W/\"fc-JO5jekqHgLxHjynPAL/MyVlabdk\"",
      "nel": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}",
      "report-to": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1708951954&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&s=eCIAk9BZrbc%2FwA6YnL2o0ffux7IZs2%2BgSNJgM7rQBGc%3D\"}]}",
      "reporting-endpoints": "heroku-nel=https://nel.heroku.com/reports?ts=1708951954&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&s=eCIAk9BZrbc%2FwA6YnL2o0ffux7IZs2%2BgSNJgM7rQBGc%3D",
      "server": "Cowboy",
      "vary": "Origin",
      "via": "1.1 vegur",
      "x-powered-by": "Express"
    },
    "config": {
      "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
      },
      "adapter": [
        "xhr",
        "http"
      ],
      "transformRequest": [
        null
      ],
      "transformResponse": [
        null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "env": {},
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "authorization": "authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiNjVkYzNkNmI3NDdlNjU2NWQ2NjRjZWRiIiwidXNlcm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJwcmF0cmV3b3RvcGF1LTgyMzdAeW9wbWFpbC5jb20ifSwiaWF0IjoxNzA4OTQ3NjkwLCJleHAiOjE3MDkwMzQwOTB9.VedlGqJ50IXB5UQ7vukiLXNlKiIU644lJMGi2MCXrbA"
      },
      "baseURL": "https://creso-api-aea7820ba236.herokuapp.com/api",
      "withCredentials": true,
      "method": "post",
      "url": "/wallets/eoa",
      "data": "{\"walletName\":\"Test\"}"
    },
    "request": {
      "UNSENT": 0,
      "OPENED": 1,
      "HEADERS_RECEIVED": 2,
      "LOADING": 3,
      "DONE": 4,
      "readyState": 4,
      "status": 200,
      "timeout": 0,
      "withCredentials": true,
      "upload": {},
      "_aborted": false,
      "_hasError": false,
      "_method": "POST",
      "_perfKey": "network_XMLHttpRequest_https://creso-api-aea7820ba236.herokuapp.com/api/wallets/eoa",
      "_response": "{\"data\":{\"seedPhrase\":\"mosquito fantasy benefit chapter afraid husband arm original riot illegal draft crash\",\"userId\":\"65dc3d6b747e6565d664cedb\",\"walletAddress\":\"0xDfF15b02d7ddB99C69D32682eAd1e3CF7Ec29cB9\"},\"message\":\"EOA wallet Successfully created\"}",
      "_url": "https://creso-api-aea7820ba236.herokuapp.com/api/wallets/eoa",
      "_timedOut": false,
      "_trackingName": "unknown",
      "_incrementalEvents": false,
      "_performanceLogger": {
        "_timespans": {
          "network_XMLHttpRequest_https://creso-api-aea7820ba236.herokuapp.com/api/wallets/eoa": {
            "startTime": 1842379498.942603,
            "endTime": 1842381658.941144,
            "totalTime": 2159.998540878296
          }
        },
        "_extras": {},
        "_points": {
          "initializeCore_start": 1842365289.059067,
          "initializeCore_end": 1842365761.625108
        },
        "_pointExtras": {},
        "_closed": false,
        "_isLoggingForWebPerformance": false
      },
      "responseHeaders": {
        "X-Powered-By": "Express",
        "Report-To": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1708951954&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&s=eCIAk9BZrbc%2FwA6YnL2o0ffux7IZs2%2BgSNJgM7rQBGc%3D\"}]}",
        "Content-Length": "252",
        "Vary": "Origin",
        "Date": "Mon, 26 Feb 2024 12:52:35 GMT",
        "Via": "1.1 vegur",
        "Content-Type": "application/json; charset=utf-8",
        "Connection": "keep-alive",
        "Etag": "W/\"fc-JO5jekqHgLxHjynPAL/MyVlabdk\"",
        "Nel": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}",
        "Access-Control-Allow-Credentials": "true",
        "Reporting-Endpoints": "heroku-nel=https://nel.heroku.com/reports?ts=1708951954&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&s=eCIAk9BZrbc%2FwA6YnL2o0ffux7IZs2%2BgSNJgM7rQBGc%3D",
        "Server": "Cowboy"
      },
      "_requestId": null,
      "_headers": {
        "accept": "application/json, text/plain, */*",
        "content-type": "application/json",
        "authorization": "authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiNjVkYzNkNmI3NDdlNjU2NWQ2NjRjZWRiIiwidXNlcm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJwcmF0cmV3b3RvcGF1LTgyMzdAeW9wbWFpbC5jb20ifSwiaWF0IjoxNzA4OTQ3NjkwLCJleHAiOjE3MDkwMzQwOTB9.VedlGqJ50IXB5UQ7vukiLXNlKiIU644lJMGi2MCXrbA"
      },
      "_responseType": "",
      "_sent": true,
      "_lowerCaseResponseHeaders": {
        "x-powered-by": "Express",
        "report-to": "{\"group\":\"heroku-nel\",\"max_age\":3600,\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?ts=1708951954&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&s=eCIAk9BZrbc%2FwA6YnL2o0ffux7IZs2%2BgSNJgM7rQBGc%3D\"}]}",
        "content-length": "252",
        "vary": "Origin",
        "date": "Mon, 26 Feb 2024 12:52:35 GMT",
        "via": "1.1 vegur",
        "content-type": "application/json; charset=utf-8",
        "connection": "keep-alive",
        "etag": "W/\"fc-JO5jekqHgLxHjynPAL/MyVlabdk\"",
        "nel": "{\"report_to\":\"heroku-nel\",\"max_age\":3600,\"success_fraction\":0.005,\"failure_fraction\":0.05,\"response_headers\":[\"Via\"]}",
        "access-control-allow-credentials": "true",
        "reporting-endpoints": "heroku-nel=https://nel.heroku.com/reports?ts=1708951954&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&s=eCIAk9BZrbc%2FwA6YnL2o0ffux7IZs2%2BgSNJgM7rQBGc%3D",
        "server": "Cowboy"
      },
      "_subscriptions": [],
      "responseURL": "https://creso-api-aea7820ba236.herokuapp.com/api/wallets/eoa"
    }
  }

  function extractWords(seedPhrase) {
    const wordsArray = seedPhrase.split(" ");
    return wordsArray;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}>
          <Header title={'Create EOA Wallet'} />
          <View style={styles.EOARow}>
            <Image source={images.EOA1} style={styles.EOA1} />
            <View style={styles.EOATextRow}>
              <Text style={styles.textBlackBold}>Create Password</Text>
              <Text style={styles.disabledText}>Secure Wallet</Text>
              <Text style={styles.disabledText}>Confirm Code</Text>
            </View>
          </View>

          <View style={styles.hr}></View>

          <View style={styles.rowBetween}>
            <Text style={styles.textBlackBold}>Wallet Name</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Please Enter Your Wallet Name"
              placeholderTextColor={colors.disabledBg2}
              onChangeText={text => {
                setWalletName(text);
              }}
              style={styles.input}
            />
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.textBlackBold}>New Password</Text>
            <TouchableOpacity
              onPress={() => {
                setShowPass(!showPass);
              }}>
              <Text style={styles.textPink}>Show</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Please Enter Your New Password"
              placeholderTextColor={colors.disabledBg2}
              onChangeText={text => {
                setPass(text);
              }}
              style={styles.input}
              secureTextEntry={showPass}
            />
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.textBlackBold}>Confirm Password</Text>
            <TouchableOpacity
              onPress={() => {
                setShowConfirmPass(!showConfirmPass);
              }}>
              <Text style={styles.textPink}>Show</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Please Enter Your Confirm Password"
              placeholderTextColor={colors.disabledBg2}
              onChangeText={text => {
                setConfirmPass(text);
              }}
              style={styles.input}
              secureTextEntry={showConfirmPass}
            />
          </View>
          <Text style={styles.error}>{error}</Text>

          <View style={styles.btnSection}>
            <View style={styles.learnMoreRow}>
              <Image source={images.emailCheck} style={styles.emailCheck} />
              <Text style={styles.textBlackBold}>
                I understand that Creso cannot recover this password for me.
                <Text style={styles.textPink}>Learn more</Text>
              </Text>
            </View>
            {
              loader ?
                <View style={styles.button}>
                  <ActivityIndicator color={'white'} size={30} />
                </View>
                :
                <TouchableOpacity style={styles.button}
                  onPress={handleCreateNewEOAWallet}
                >
                  <Text style={styles.text}>Create New Password</Text>
                </TouchableOpacity>
            }
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
