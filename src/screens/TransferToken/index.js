import React, {useEffect, useState} from 'react';
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
import images from '../../services/utilities/images';
import {styles} from './style';
import Header from '../../components/Header';
import {colors} from '../../services';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';

export default function TransferToken({navigation}) {
  const userToken = useSelector(state => state?.tokenSlice?.token);

  const [type, setType] = useState('AA');
  const [network, setNetwork] = useState('goerli');
  const [selectedWallet, setSelectedWallet] = useState('0x53A...e4af');
  const [standard, setStandard] = useState('Native/Stable');
  const [sendTo, setSendTo] = useState(
    '0x223A0f5E3F404121b893058C14015b8115Aa78Aa',
  );
  const [amount, setAmount] = useState('');
  const [walletType, setWalletType] = useState('');
  const [wallets, setWallets] = useState([]);
  const [smartWallets, setSmartWallets] = useState([]);
  const [typeModal, setTypeModal] = useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [walletTypeModal, setWalletTypeModal] = useState(false);

  const [loader, setLoader] = useState(false);
  const [responseModal, setResponseModal] = useState(false);
  const [error, setError] = useState(false);

  const [standardModal, setStandardModal] = useState(false);

  useEffect(() => {
    handleWallets();
  }, []);

  const handleWallets = () => {
    var myHeaders = new Headers();
    myHeaders.append('auth_token', `"auth_token ${userToken}"`);
    myHeaders.append('Cookie', `auth_token=${userToken}`);

    var raw = '';

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://core.creso.io/api/wallet', requestOptions)
      .then(response => response.json())
      .then(result => {
        setWallets(result.wallets);
        setSmartWallets(result.smartWallets);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const handleSend = () => {
    setLoader(true);
    var myHeaders = new Headers();
    myHeaders.append('auth_token', `"auth_token ${userToken}"`);
    myHeaders.append('Cookie', `auth_token=${userToken}`);
    myHeaders.append('Content-Type', 'application/json');
    console.log(sendTo);
    var raw = JSON.stringify({
      type: type,
      sendTo: sendTo,
      amount: amount,
      from: selectedWallet,
      network: network,
      standard: standard,
      tokenAddress: '',
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://core.creso.io/api/transfer', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setLoader(false);
        if (result.blockNumber) {
          setResponseModal(true);
          setError('success');
        } else {
          setResponseModal(true);
          setError('error');
        }
      })
      .catch(error => {
        console.log('error', error);
        setLoader(false);
        setResponseModal(true);
        setError('error');
      });
  };

  return (
    <SafeAreaView>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'Send ETH'} />
        <View style={styles.mainContainer}>
          <Text style={styles.fieldHeading}>From</Text>
          <TouchableOpacity
            style={styles.field}
            onPress={() => {
              setWalletTypeModal(true);
            }}>
            <View style={styles.subField}>
              <Image source={images.tranferFromImg} style={styles.coinIcons} />
              <Text style={[styles.black, styles.subFieldText]}>ETH-1</Text>
            </View>
            <View style={styles.subField2}>
              <Text style={[styles.black, styles.EQA]}>EQA</Text>
              <Text style={[styles.black, styles.EQASideText]}>
                {selectedWallet}
              </Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.fieldHeading}>To</Text>
          <TouchableOpacity
            style={[styles.field, styles.spaceBetween]}
            onPress={() => {
              setWalletTypeModal(true);
            }}>
            <View style={styles.subField}>
              <Image source={images.tranferToImg} style={styles.coinIcons} />
              <Text style={[styles.black, styles.subFieldText]}>ETH-2</Text>
            </View>
            <View style={styles.subField2}>
              <Text style={[styles.black, styles.EQA]}>AA</Text>
              <Text style={[styles.black, styles.EQASideText]}>
                {selectedWallet}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.balanceRow}>
            <Text style={styles.textBold}>Amount</Text>
            <Text style={[styles.textBold, styles.balanceText]}>
              Balance: 0 ETH
            </Text>
          </View>
          <View style={styles.field}>
            <TextInput
              style={styles.inputAmount}
              placeholder="Input Amount"
              placeholderTextColor={colors.disabledBg1}
              onChangeText={text => {
                setAmount(text);
              }}
              value={amount}></TextInput>
          </View>
        </View>

        {loader ? (
          <View style={styles.button}>
            <ActivityIndicator color={'white'} size={30} />
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              console.log(
                type,
                sendTo,
                amount,
                selectedWallet,
                network,
                standard,
              );
              handleSend();
            }}
            style={styles.button}>
            <Image
              style={styles.transferBtn}
              source={images.TransferBtn}></Image>
            <Text style={styles.BtnText}>Send</Text>
          </TouchableOpacity>
        )}

        <Modal
          isVisible={responseModal}
          onBackButtonPress={() => {
            setResponseModal(false);
          }}
          onBackdropPress={() => {
            setResponseModal(false);
          }}
          backdropOpacity={0.5}>
          <View style={styles.modalBodey}>
            {error === 'success' && (
              <Text style={styles.modalHeading2}>Transaction succeful!</Text>
            )}

            {error === 'error' && (
              <Text style={styles.modalHeading2}>
                There's some issue in your transaction!
              </Text>
            )}
          </View>
        </Modal>

        <Modal
          isVisible={walletTypeModal}
          onBackButtonPress={() => {
            setWalletTypeModal(false);
          }}
          onBackdropPress={() => {
            setWalletTypeModal(false);
          }}
          backdropOpacity={0.5}>
          <View style={styles.modalBodey}>
            <Text style={styles.modalHeading}>Select Your Wallet Type</Text>
            <TouchableOpacity
              onPress={() => {
                setWalletType('Standard');
                setWalletTypeModal(false);
                setWalletModal(true);
              }}
              style={styles.typeOptionContainer}>
              <Text style={styles.typeOption}>Standard Wallet</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setWalletType('Smart');
                setWalletTypeModal(false);
                setWalletModal(true);
              }}
              style={styles.typeOptionContainer}>
              <Text style={styles.typeOption}>Smart Wallet</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          isVisible={walletModal}
          onBackButtonPress={() => {
            setWalletModal(false);
          }}
          onBackdropPress={() => {
            setWalletModal(false);
          }}
          backdropOpacity={0.5}>
          <View style={styles.modalBodey}>
            <Text style={styles.modalHeading}>
              Select Your {walletType} Wallet
            </Text>
            {walletType === 'Standard' && (
              <ScrollView>
                {wallets?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setWalletModal(false);
                        setSelectedWallet(item.address);
                      }}
                      style={styles.typeOptionContainer}>
                      <Text style={styles.typeOption}>{item.walletName}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}

            {walletType === 'Smart' && (
              <ScrollView>
                {smartWallets?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setWalletModal(false);
                        setSelectedWallet(item.address);
                      }}
                      style={styles.typeOptionContainer}>
                      <Text style={styles.typeOption}>{item.walletName}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}
          </View>
        </Modal>

        <Modal
          isVisible={walletTypeModal}
          onBackButtonPress={() => {
            setWalletTypeModal(false);
          }}
          onBackdropPress={() => {
            setWalletTypeModal(false);
          }}
          backdropOpacity={0.5}>
          <View style={styles.modalBodey}>
            <Text style={styles.modalHeading}>Select Your Wallet Type</Text>
            <TouchableOpacity
              onPress={() => {
                setWalletType('Standard');
                setWalletTypeModal(false);
                setWalletModal(true);
              }}
              style={styles.typeOptionContainer}>
              <Text style={styles.typeOption}>Standard Wallet</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setWalletType('Smart');
                setWalletTypeModal(false);
                setWalletModal(true);
              }}
              style={styles.typeOptionContainer}>
              <Text style={styles.typeOption}>Smart Wallet</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          isVisible={walletModal}
          onBackButtonPress={() => {
            setWalletModal(false);
          }}
          onBackdropPress={() => {
            setWalletModal(false);
          }}
          backdropOpacity={0.5}>
          <View style={styles.modalBodey}>
            <Text style={styles.modalHeading}>
              Select Your {walletType} Wallet
            </Text>
            {walletType === 'Standard' && (
              <ScrollView>
                {wallets?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setWalletModal(false);
                        setSelectedWallet(item.address);
                      }}
                      style={styles.typeOptionContainer}>
                      <Text style={styles.typeOption}>{item.walletName}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}

            {walletType === 'Smart' && (
              <ScrollView>
                {smartWallets?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setWalletModal(false);
                        setSelectedWallet(item.address);
                      }}
                      style={styles.typeOptionContainer}>
                      <Text style={styles.typeOption}>{item.walletName}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}
