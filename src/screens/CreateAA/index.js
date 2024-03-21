import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import Feather from 'react-native-vector-icons/Feather';

import { styles } from './style';
import images from '../../services/utilities/images';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../services';
import Header from '../../components/Header';
import { selectAuthToken } from '../../store/token';
import {
  handleAddWalletPassword,
  selectEncryptedSeedPhrase,
  selectWalletPassword,
} from '../../store/seedPhrase';
import { decryptData } from '../../utils/encryption';
import NetworkDropdown from '../../components/dropdown';
import { createAAWallet, createEOAWallet } from '../../clientApi';
import { handleAddAAWallet } from '../../store/AAWalletAddress';

export default function CreateAA({ navigation, route }) {
  const userToken = useSelector(selectAuthToken);
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState();
  const [inputText, setInputText] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [fields, setFields] = useState([[]]);
  const dispatch = useDispatch();

  const encryptedSeedPhrase = useSelector(selectEncryptedSeedPhrase);
  // const walletPassword = useSelector(selectWalletPassword);

  const authToken = route?.params?.authToken;
  const authTokenRedux = useSelector(selectAuthToken);

  const handleAdd = () => {
    const addedValue = [...fields, []];
    setFields(addedValue);
    setIsDisable(true);
  };

  const handleInputChange = (onChangeValue, i) => {
    setIsDisable(false);
    const inputData = [...fields];
    inputData[i] = onChangeValue;
    inputData[fields.length - 1]?.length === 0
      ? setIsDisable(true)
      : setIsDisable(false);
    setFields(inputData);
  };

  const handleInputDelete = (i) => {
    console.log('i : ', i);
    const deleteField = [...fields];
    deleteField.splice(i, 1);
    deleteField[fields.length - 2]?.length === 0
      ? setIsDisable(true)
      : setIsDisable(false);
    setFields(deleteField);
  };

  useEffect(() => {
    if (!authToken) {
      setToken(authTokenRedux);
    } else {
      setToken(authToken);
    }
  }, [route, authToken, authTokenRedux]);

  const handleCreateNewAAWallet = async () => {
    if (inputText === '') {
      setError('Please enter wallet name');
    } else {
      setLoader(true);
      try {
        const obj = {
          network: 'mumbai',
          walletName: inputText,
          address: fields,
        };

        const response = await createAAWallet(userToken, obj);
        if (response.status == 200) {
          console.log('res : ', response?.data?.data);
          dispatch(handleAddAAWallet(response?.data?.data));
          Toast.show('Successful wallet creation.', Toast.LONG);
          navigation.navigate('MyTabs');
          setLoader(false);
        } else {
          setLoader(false);
        }
      } catch (error) {
        console.log('error : ', error);
        Toast.show('Something went wrong!', Toast.LONG);
        setLoader(false);
      }
    }
  };

  const handleChange = (e) => {
    const newText = e;

    // Check if the input text exceeds the limit (40 characters)
    if (newText.length <= 40) {
      setInputText(newText);
      setError(''); // Reset error state if within the limit
    } else {
      setError('Max length is 40 characters'); // Set error state if exceeding the limit
    }
  };

  const options = ['Mumbai Testnet'];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}
        >
          <Header title={'Smart Wallet'} />

          <ScrollView>
            <View style={styles.profileMaincontainer}>
              <Text style={styles.ParagText}>
                Compatible with all Dapps, lower Gas fees, only supports paying
                gas with native token, does not support advanced features.
              </Text>

              <View style={styles.rowBetween}>
                <Text style={styles.textBlackBold}>Network</Text>
              </View>
              <NetworkDropdown options={options} />

              <View style={styles.rowBetween}>
                <Text style={styles.textBlackBold}>Owners</Text>
              </View>
              <View>
                {fields.map((data, i) => {
                  return (
                    <View key={i} style={styles.ownerInputContainer}>
                      <View>
                        <TextInput
                          placeholder="Enter Owner Address"
                          placeholderTextColor={colors.disabledBg2}
                          onChangeText={(e) => handleInputChange(e, i)}
                          style={styles.input}
                          // value={`${data.slice(0, 18) + '....' + data.slice(-10)}`}
                          value={data}
                        />
                      </View>
                      <View>
                        {fields.length !== 1 && (
                          <TouchableOpacity
                            onPress={() => handleInputDelete(i)}
                          >
                            <Feather
                              name={'x-circle'}
                              color={colors.redLoss}
                              size={20}
                              style={{
                                alignSelf: 'flex-end',
                              }}
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  );
                })}
              </View>

              <TouchableOpacity
                onPress={handleAdd}
                style={[styles.addOwnerBtn, isDisable && styles.isDisabled]}
                disabled={isDisable}
              >
                <Text
                  style={[styles.addOwnerText, isDisable && styles.isDisabled]}
                >
                  Add Owner
                </Text>
                <Feather
                  name={'plus-circle'}
                  color={isDisable ? colors.disabledBg2 : colors.white}
                  size={20}
                  style={{
                    alignSelf: 'flex-end',
                  }}
                />
              </TouchableOpacity>

              <View style={styles.rowBetween}>
                <Text style={styles.textBlackBold}>Wallet Name</Text>
                <Text style={styles.textBlackBold}>{inputText.length}/40</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Please Enter Your Wallet Name"
                  placeholderTextColor={colors.disabledBg2}
                  onChangeText={handleChange}
                  maxLength={40}
                  style={styles.input}
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
                {loader ? (
                  <View style={styles.button}>
                    <ActivityIndicator color={'white'} size={30} />
                  </View>
                ) : (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleCreateNewAAWallet}
                  >
                    <Text style={styles.text}>Create AA Wallet</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View style={styles.marginBtm}></View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
