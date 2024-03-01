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
import images from '../../services/utilities/images';
import { styles } from './style';
import Header from '../../components/Header';
import { colors } from '../../services';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Clipboard } from 'react-native';
import { handleAddAAWallet, selectAAWallet } from '../../store/AAWalletAddress';
import { getAAWallets, sendAAWalletTransaction } from '../../clientApi';
import { selectWallet } from '../../store/WalletAddress';
import formatToJSON from '../../services/utilities/JsonLog';
import { selectAuthToken } from '../../store/token';


export default function SendETHPage({ navigation }) {

  const aaWallet = useSelector(selectAAWallet)
  const allEOAWallets = useSelector(selectWallet)
  const userToken = useSelector(selectAuthToken);

  const [type, setType] = useState('AA');
  const [network, setNetwork] = useState('goerli');
  const [selectedAAWallet, setSelectedAAWallet] = useState('');
  const [standard, setStandard] = useState('Native/Stable');
  const [sendTo, setSendTo] = useState('');
  const [amount, setAmount] = useState('');
  const [walletType, setWalletType] = useState('');
  const [typeModal, setTypeModal] = useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [walletTypeModal, setWalletTypeModal] = useState(false);
  const [allAAWallets, setAllAAWallets] = useState([]);
  const [allAAWalletsModal, setAllAAWalletsModal] = useState(false);
  const [showTransactionRes, setShowTransactionRes] = useState('');
  const [showTransactionResModal, setShowTransactionResModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [responseModal, setResponseModal] = useState(false);
  const [error, setError] = useState(false);
  const [standardModal, setStandardModal] = useState(false);



  const handlePaste = async () => {
    try {
      const content = await Clipboard.getString();
      setSendTo(content);
    } catch (error) {
      console.error('Error pasting from clipboard:', error);
    }
  };


  const handleAAWalletTransaction = async () => {
    try {
      setLoader(true)
      const body = {
        type: type,
        sendTo: sendTo,
        amount: amount,
        from: selectedAAWallet,
        network: network
      }

      const response = await sendAAWalletTransaction(userToken, body)
      if (response.status == 200) {
        setLoader(false)
        setShowTransactionRes(response.data.message)
        setShowTransactionResModal(true)
        setSendTo()
        setSelectedAAWallet()
        setAmount()

      } else {
        setLoader(false)
        setShowTransactionRes(response.data.message)
        setShowTransactionResModal(true)
        setSendTo()
        setSelectedAAWallet()
        setAmount()
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleGetAAWallet = async (selectedEOAWalletAddress) => {
    try {
      const response = await getAAWallets(userToken, selectedEOAWalletAddress)
      setAllAAWallets(response.data)
    } catch (error) {

    }
  }

  return (
    <SafeAreaView>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'Send ETH'} />
        <View style={styles.mainContainer}>
          <Text style={styles.fieldHeading}>Type</Text>
          <View style={styles.field}>
            <TouchableOpacity
              onPress={() => {
                setTypeModal(true);
              }}>
              <Text style={styles.typeTextBlack}>
                Select type of ypur wallet. Ex: {type}
              </Text>

              <Modal
                isVisible={typeModal}
                onBackButtonPress={() => {
                  setTypeModal(false);
                }}
                onBackdropPress={() => {
                  setTypeModal(false);
                }}
                backdropOpacity={0.5}>
                <View style={styles.modalBodey}>
                  <Text style={styles.modalHeading}>
                    Select Type Of Your Wallet
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setType('AA');
                      setTypeModal(false);
                    }}
                    style={styles.typeOptionContainer}>
                    <Text style={styles.typeOption}>AA</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setType('EOA');
                      setTypeModal(false);
                    }}
                    style={styles.typeOptionContainer}>
                    <Text style={styles.typeOption}>EOA</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </TouchableOpacity>
          </View>

          <Text style={styles.fieldHeading}>Network</Text>
          <View style={styles.field}>
            <Image style={styles.coinIcons} source={images.ethImg} />
            <Text style={[styles.black, styles.subFieldText]}>{network}</Text>
          </View>

          <Text style={styles.fieldHeading}>From</Text>
          <TouchableOpacity
            style={[styles.field, styles.spaceBetween]}
            onPress={() => {
              setWalletModal(true);
            }}>
            <View style={styles.subField}>
              <Image source={images.cresoLogo} style={styles.coinIcons} />
              <Text style={[styles.black, styles.subFieldText]}>ETH-1</Text>
            </View>
            <View style={styles.subField2}>
              <Text style={[styles.black, styles.EQA]}>AA</Text>
              {
                selectedAAWallet ?
                  <Text style={[styles.black, styles.EQASideText]}>
                    {selectedAAWallet}
                  </Text>
                  : null
              }
            </View>

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
                  Select your EOA Wallet on which your AA Wallet is created
                </Text>

                <ScrollView>
                  {allEOAWallets?.map((item, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          setWalletModal(false);
                          handleGetAAWallet(item.address)
                          setAllAAWalletsModal(true);

                        }}
                        style={styles.typeOptionContainer}>
                        <Text style={styles.typeOption}>
                          {item.walletName}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>



              </View>
            </Modal>

            <Modal
              isVisible={allAAWalletsModal}
              onBackButtonPress={() => {
                setAllAAWalletsModal(false);
              }}
              onBackdropPress={() => {
                setAllAAWalletsModal(false);
              }}
              backdropOpacity={0.5}>
              <View style={styles.modalBodey}>


                {allAAWallets.length > 0 ? <>
                  <Text style={styles.modalHeading}>
                    Select your AA Wallet for transaction
                  </Text>
                  <ScrollView>
                    {allAAWallets?.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            setAllAAWalletsModal(false);
                            setSelectedAAWallet(item.address)

                          }}
                          style={styles.typeOptionContainer}>
                          <Text style={styles.typeOption}>
                            {item.walletName}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </>
                  : <Text style={styles.modalHeading} >You have not created any AA wallet against your selected EOA wallet</Text>
                }



              </View>
            </Modal>
          </TouchableOpacity>

          <Text style={styles.fieldHeading}>To</Text>
          <View style={[styles.field, styles.spaceBetween]}>
            <TextInput
              style={styles.searchFields}
              placeholder="Enter wallet address"
              placeholderTextColor={colors.disabledBg1}
              onChangeText={text => {
                setSendTo(text);
              }}
              value={sendTo}></TextInput>
            <TouchableOpacity onPress={handlePaste}>
              <Text style={styles.pasteButton}>Paste</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.subField, styles.spaceBetween]}>
            <Text style={styles.fieldHeading}>Amount</Text>
            <Text style={[styles.fieldHeading, styles.balanceText]}>
              Balance: 0 ETH
            </Text>
          </View>
          <View style={styles.field}>
            <TextInput

              style={styles.inputAmount}
              placeholder="Input Amount"
              placeholderTextColor={colors.disabledBg1}
              keyboardType="numeric"
              onChangeText={text => {
                setAmount(text);
              }}
              value={amount}></TextInput>
          </View>

          <Text style={styles.fieldHeading}>Standard</Text>
          <View style={styles.field}>
            <TouchableOpacity
              onPress={() => {
                setStandardModal(true);
              }}>
              <Text style={styles.typeTextBlack}>{standard}</Text>

              <Modal
                isVisible={standardModal}
                onBackButtonPress={() => {
                  setStandardModal(false);
                }}
                onBackdropPress={() => {
                  setStandardModal(false);
                }}
                backdropOpacity={0.5}>
                <View style={styles.modalBodey}>
                  <Text style={styles.modalHeading}>
                    Select Type Of Your Standard
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setStandard('native');
                      setStandardModal(false);
                    }}
                    style={styles.typeOptionContainer}>
                    <Text style={styles.typeOption}>Native</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setStandard('stable');
                      setStandardModal(false);
                    }}
                    style={styles.typeOptionContainer}>
                    <Text style={styles.typeOption}>Stable</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </TouchableOpacity>
          </View>
        </View>

        {loader ? (
          <View style={styles.button}>
            <ActivityIndicator color={'white'} size={30} />
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              handleAAWalletTransaction()
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

        <Modal isVisible={showTransactionResModal}
          backdropOpacity={0.5}
          onBackdropPress={() => {
            setShowTransactionResModal(false)
          }}
          onBackButtonPress={() => {
            setShowTransactionResModal(false)
          }}
        >
          <View style={styles.transactionModalBody}>
            <Text style={styles.transactionModalText}>{showTransactionRes}</Text>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}
