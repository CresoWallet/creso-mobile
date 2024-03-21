import React, { useState, useRef, useEffect } from 'react';
import Header from '../../components/Header';
import { styles } from './style';
import {
  Image,
  ImageBackground,
  InputAccessoryView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  ActivityIndicator,
} from 'react-native';
import images from '../../services/utilities/images';

import Modal from 'react-native-modal';
import { colors, sizes } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import {
  createAAWallet,
  getAllEOAWallets,
  getUserDetails,
  getWalletBalance,
} from '../../clientApi';
import { handleAddUserDetail, selectUserData } from '../../store/user';
import { selectAuthToken } from '../../store/token';
import formatToJSON from '../../services/utilities/JsonLog';
import {
  handleAddWallet,
  handleEmptyWallet,
  handleReplaceAllWallets,
  selectWallet,
} from '../../store/WalletAddress';
import { handleAddAAWallet, selectAAWallet } from '../../store/AAWalletAddress';
import {
  selectEncryptedSeedPhrase,
  selectWalletPassword,
} from '../../store/seedPhrase';

export default function Home({ navigation }) {
  const userWallet = useSelector(selectWallet);
  const userToken = useSelector(selectAuthToken);
  const userDetail = useSelector(selectUserData);
  const aaWallet = useSelector(selectAAWallet);
  const encryptedSeedPhrase = useSelector(selectEncryptedSeedPhrase);
  const walletPassword = useSelector(selectWalletPassword);

  console.log('walletPassword : ', walletPassword);

  const [selectWalletModal, setSelectWalletModal] = useState(false);
  const [checkedCoin, setCheckedCoin] = useState('coin1');
  const [userName, setUserName] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [modal2Show, setModal2Show] = useState(false);
  const [modal3Show, setModal3Show] = useState(false);
  const [allWalletAddresses, setAllWalletAddresses] = useState();
  const [modalForBackup, setModalForBackup] = useState(true);
  const [walletName, setWalletName] = useState('');
  const [smartWalletName, setSmartWalletName] = useState('');
  const [loader, setLoader] = useState(false);
  const [walletCreatedtModal, setWalletCreatedtModal] = useState(false);
  const [wallet, setWallet] = useState('');
  const [walletCreated, setWalletCreated] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);
  const [showBalance, setShowBalance] = useState(false);
  const [showTransactionRes, setShowTransactionRes] = useState(false);
  const [balanceLoader, setBalanceLoader] = useState(false);
  const [parentOfAAWallet, setParentOfAAWallet] = useState('');

  const translateY = useRef(new Animated.Value(500)).current;

  const dispatch = useDispatch();

  const handleCreateWallet = async () => {
    var myHeaders = new Headers();

    setLoader(true);

    myHeaders.append('auth_token', `"auth_token ${userToken}"`);

    myHeaders.append('Content-Type', 'application/json');

    myHeaders.append('Cookie', `auth_token=${userToken}`);

    var raw = JSON.stringify({
      walletName: walletName,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://core.creso.io/api/create/wallet', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (result) {
          setModal2Show(!modal2Show);
          setWalletCreatedtModal(true);
        }
        setWalletName('');
        setLoader(false);
      })
      .catch((error) => {
        console.log('error', error);
        setWalletName('');
        setLoader(false);
      });
  };

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      setModalForBackup(true);
      setTimeout(() => {
        setModalForBackup(false);
      }, 2000);
    });
  }, [navigation]);

  const extractWalletAddresses = (userWallet) => {
    if (userWallet && Array.isArray(userWallet)) {
      return userWallet.map((wallet) => wallet.walletAddress);
    } else {
      return [];
    }
  };

  const getCurrentUser = async () => {
    const res = await getUserDetails(userToken);
    if (res.status == 200) {
      const user = res.data;
      dispatch(handleAddUserDetail(user));
    }
  };

  const handleGetWalletBalance = async (wallets) => {
    try {
      const walletAddress = wallets[0].address;
      const network = 'goerli';
      const response = await getWalletBalance(walletAddress, network);
      if (response.status == 200) {
        setBalanceLoader(false);
        setWalletBalance(response.data);
      } else {
        setBalanceLoader(false);
      }
    } catch (error) {
      console.log(error);
      setBalanceLoader(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
    handleAllEOAWallets();
  }, []);

  const handleCreateAAWallet = async () => {
    try {
      const obj = {
        network: 'mumbai',
        walletName: smartWalletName,
        address: [parentOfAAWallet],
      };
      setLoader(true);
      const response = await createAAWallet(userToken, obj);
      if (response.status == 200) {
        console.log(formatToJSON(response));
        dispatch(handleAddAAWallet(response?.data?.data));
        setModal3Show(false);
        setLoader(false);
      } else {
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  const handleAllEOAWallets = async () => {
    try {
      setBalanceLoader(true);
      const response = await getAllEOAWallets(userToken);
      if (response.status == 200) {
        dispatch(handleReplaceAllWallets(response.data));
        handleGetWalletBalance(response.data);
      }
    } catch (error) {
      console.log(error);
      setBalanceLoader(false);
    }
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={images.landingPageBGImg}
      >
        <View style={styles.logoRow}>
          <Image style={styles.logoImg} source={images.landingPageLogo} />
          <View style={styles.logoRowImgRightContainer}>
            <TouchableOpacity>
              <Image
                style={styles.logoRowImgRight}
                source={images.searchIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalForBackup(!modalForBackup)}
            >
              <Image style={styles.logoRowImgRight} source={images.qrScanner} />
            </TouchableOpacity>
          </View>
        </View>
        <ImageBackground
          style={styles.homeCardImg}
          source={images.homeCardImg}
          resizeMode="contain"
        >
          <Text style={styles.homeCardText1}>{userDetail?.username}</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.homeCardText2}>
              {showBalance ? `${walletBalance} ETH` : '*** ETH'}
            </Text>
            {balanceLoader ? (
              <View style={{ marginLeft: sizes.screenWidth * 0.02 }}>
                <ActivityIndicator size={18} />
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setShowBalance(!showBalance);
                }}
              >
                <Image
                  source={showBalance ? images.eyeShow : images.hideBtn}
                  style={styles.hideBtn}
                />
              </TouchableOpacity>
            )}
            {/* <TouchableOpacity onPress={() => {
              setShowBalance(!showBalance)
            }}
            >
              <Image source={showBalance ? images.eyeShow : images.hideBtn} style={styles.hideBtn} />
            </TouchableOpacity> */}
          </View>
        </ImageBackground>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.scrollViewRowContainer}>
              <TouchableOpacity
                style={styles.scrollViewAddItemContainer}
                onPress={() => {
                  setWalletCreatedtModal(true);
                }}
              >
                <Image style={styles.addIcon} source={images.addIcon} />
                <Text style={styles.scrollViewItemTextBold}>Add</Text>
              </TouchableOpacity>
              <Image
                style={styles.dottedLine}
                source={images.dottedLine}
              ></Image>
              <TouchableOpacity
                style={styles.scrollViewItemContainer}
                onPress={() => {
                  setCheckedCoin('coin1');
                  navigation.navigate('ETH1Page');
                }}
              >
                {checkedCoin === 'coin1' ? (
                  <View style={styles.coinIconContainer2}>
                    <Image
                      style={styles.coinIcons}
                      source={images.ethBaseIcon}
                    />
                    <Image
                      style={styles.tickMarkIcon}
                      source={images.tickMarkIcon}
                    />
                  </View>
                ) : (
                  <View style={styles.coinIconContainer}>
                    <Image
                      style={styles.coinIcons}
                      source={images.ethBaseIcon}
                    />
                  </View>
                )}

                <Text style={styles.scrollViewItemTextBold}>ETH</Text>
                <Text style={styles.scrollViewItemTextLight}>$2,321,79</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollViewItemContainer}
                onPress={() => {
                  setCheckedCoin('coin2');
                }}
              >
                {checkedCoin === 'coin2' ? (
                  <View style={styles.coinIconContainer2}>
                    <Image
                      style={styles.coinIcons}
                      source={images.bnbBaseIcon}
                    />
                    <Image
                      style={styles.tickMarkIcon}
                      source={images.tickMarkIcon}
                    />
                  </View>
                ) : (
                  <View style={styles.coinIconContainer}>
                    <Image
                      style={styles.coinIcons}
                      source={images.bnbBaseIcon}
                    />
                  </View>
                )}
                <Text style={styles.scrollViewItemTextBold}>BNB</Text>
                <Text style={styles.scrollViewItemTextLight}>$16,32</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollViewItemContainer}
                onPress={() => {
                  setCheckedCoin('coin3');
                }}
              >
                {checkedCoin === 'coin3' ? (
                  <View style={styles.coinIconContainer2}>
                    <Image
                      style={styles.coinIcons}
                      source={images.usdtBaseIcon}
                    />
                    <Image
                      style={styles.tickMarkIcon}
                      source={images.tickMarkIcon}
                    />
                  </View>
                ) : (
                  <View style={styles.coinIconContainer}>
                    <Image
                      style={styles.coinIcons}
                      source={images.usdtBaseIcon}
                    />
                  </View>
                )}
                <Text style={styles.scrollViewItemTextBold}>USDT</Text>
                <Text style={styles.scrollViewItemTextLight}>$804,94</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.scrollViewItemContainer}
                onPress={() => {
                  setCheckedCoin('coin4');
                }}
              >
                {checkedCoin === 'coin4' ? (
                  <View style={styles.coinIconContainer2}>
                    <Image
                      style={styles.coinIcons}
                      source={images.ethBaseIcon}
                    />
                    <Image
                      style={styles.tickMarkIcon}
                      source={images.tickMarkIcon}
                    />
                  </View>
                ) : (
                  <View style={styles.coinIconContainer}>
                    <Image
                      style={styles.coinIcons}
                      source={images.ethBaseIcon}
                    />
                  </View>
                )}

                <Text style={styles.scrollViewItemTextBold}>ETH</Text>
                <Text style={styles.scrollViewItemTextLight}>$2,321,79</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollViewItemContainer}
                onPress={() => {
                  setCheckedCoin('coin5');
                }}
              >
                {checkedCoin === 'coin5' ? (
                  <View style={styles.coinIconContainer2}>
                    <Image
                      style={styles.coinIcons}
                      source={images.bnbBaseIcon}
                    />
                    <Image
                      style={styles.tickMarkIcon}
                      source={images.tickMarkIcon}
                    />
                  </View>
                ) : (
                  <View style={styles.coinIconContainer}>
                    <Image
                      style={styles.coinIcons}
                      source={images.bnbBaseIcon}
                    />
                  </View>
                )}
                <Text style={styles.scrollViewItemTextBold}>BNB</Text>
                <Text style={styles.scrollViewItemTextLight}>$16.32</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollViewItemContainer}
                onPress={() => {
                  setCheckedCoin('coin6');
                }}
              >
                {checkedCoin === 'coin6' ? (
                  <View style={styles.coinIconContainer2}>
                    <Image
                      style={styles.coinIcons}
                      source={images.usdtBaseIcon}
                    />
                    <Image
                      style={styles.tickMarkIcon}
                      source={images.tickMarkIcon}
                    />
                  </View>
                ) : (
                  <View style={styles.coinIconContainer}>
                    <Image
                      style={styles.coinIcons}
                      source={images.usdtBaseIcon}
                    />
                  </View>
                )}
                <Text style={styles.scrollViewItemTextBold}>USDT</Text>
                <Text style={styles.scrollViewItemTextLight}>$804.94</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={styles.textRow}>
          <Text style={styles.textRowBold}>Ethereum Mainnet</Text>
          <View style={styles.textRowRight}>
            <TouchableOpacity
              style={styles.textRowRight}
              onPress={() => {
                setModalShow(!modalShow);
              }}
            >
              <Text style={styles.textRowPinkPlus}>+</Text>
              <Text style={styles.textRowPink}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.walletRowContainer}>
          <View style={styles.walletRowContainerLeft}>
            <Image
              style={styles.walletIconBlack}
              source={images.walletIconBlack}
            />
            <View style={styles.walletRowLeftTextContainer}>
              <Text style={styles.walletRowTextBold}>
                Keyless Secure Wallet
              </Text>
              <Text style={styles.walletRowTextLight}>
                {aaWallet && aaWallet.length > 0
                  ? aaWallet[0].address.slice(0, 10) +
                    '...' +
                    aaWallet[0].address.slice(-6)
                  : 'No Wallet'}
              </Text>
            </View>
          </View>
          <View style={styles.walletRowRight}>
            <TouchableOpacity>
              <Image style={styles.folderIcon} source={images.folderIcon} />
            </TouchableOpacity>
            <View style={styles.iconSeparator}></View>
            <TouchableOpacity>
              <Image
                style={styles.rightArrowIcon}
                source={images.rightArrowIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.coinRow}>
          <View style={styles.coinRowLeft}>
            <Image style={styles.ethImg} source={images.ethImg} />
            <Text style={styles.coinRowLeftText}>ETH</Text>
          </View>
          <View style={styles.coinRowRight}>
            <Text style={styles.coinRowRightTextLight}>$1,794.28</Text>
            <Text style={styles.coinRowRightTextBold}>0.54</Text>
          </View>
        </View>

        <View style={styles.rowSeparator}></View>

        <View style={styles.coinRow}>
          <View style={styles.coinRowLeft}>
            <Image style={styles.ethImg} source={images.daiIcon} />
            <Text style={styles.coinRowLeftText}>DAI</Text>
          </View>
          <View style={styles.coinRowRight}>
            <Text style={styles.coinRowRightTextLight}>$594.17</Text>
            <Text style={styles.coinRowRightTextBold}>594.2344</Text>
          </View>
        </View>
        {modalForBackup && (
          <Animated.View
            style={{
              transform: [{ translateY }],
              width: sizes.screenWidth * 0.9,
              alignSelf: 'center',
              bottom: sizes.screenHeight * 0.12,
            }}
          >
            <TouchableOpacity
              style={styles.backupModalInsideContaienr}
              onPress={() => navigation.navigate('BackupMainScreen')}
            >
              <Image
                source={images.backupModalLine}
                style={styles.backupModalLine}
              />
              <View style={styles.flexRow}>
                <Image
                  source={images.backupModalImg}
                  style={styles.backupModalImg}
                />
                <View>
                  <Text style={styles.bkUpText1}>Account Not Backed Up</Text>
                  <Text style={styles.bkUpText2}>
                    Sorry, you are unable to proceed until you complete the
                    backup. Backup now to secure your account.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Animated.View>
        )}

        <Modal
          isVisible={modalShow}
          backdropOpacity={0.5}
          onBackdropPress={() => {
            setModalShow(!modalShow);
          }}
        >
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <View style={styles.modalBody}>
                <View style={styles.horizontalLine}></View>
                <Text style={styles.modalHeading}>Create Wallet</Text>
                <View style={styles.ethereumMainnetContainer}>
                  <Image
                    style={styles.ethereumMainnetImg}
                    source={images.ethImg}
                  />
                  <Text style={styles.ethereumMainnetText}>
                    Ethereum Mainnet
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.walletSection}
                  onPress={() => {
                    setModalShow(!modalShow);
                    walletPassword !== ''
                      ? navigation.navigate('CreateEOA')
                      : navigation.navigate('UnlockWallet');
                  }}
                >
                  <Image style={styles.images} source={images.walletPink} />
                  <View style={styles.walletTextSection}>
                    <View style={styles.walletSectionFirstRow}>
                      <View>
                        <Text style={styles.walletTextBold}>Legacy Wallet</Text>
                        <Text style={styles.walletTextLight}>EOA</Text>
                      </View>
                      <View style={styles.walletSectionFirstRowRight}>
                        <View style={styles.walletTextBoldSmallContainer}>
                          <Text style={styles.walletTextBoldSmall}>
                            Popular
                          </Text>
                        </View>
                        <Image
                          style={styles.images}
                          source={images.rightArrowBgBlack}
                        />
                      </View>
                    </View>
                    <Text style={styles.walletTextSmall}>
                      Compatible with all Daaps; lower Gas fees; only supports
                      paying gas with native token; does not support advanced
                      features.
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.walletSection}
                  // onPress={() => {
                  //   setSelectWalletModal(true);
                  // }}
                  onPress={() => {
                    setModalShow(!modalShow);
                    navigation.navigate('CreateAA');
                  }}
                >
                  <Image style={styles.images} source={images.walletSmart} />
                  <View style={styles.walletTextSection}>
                    <View style={styles.walletSectionFirstRow}>
                      <View>
                        <Text style={styles.walletTextBold}>Smart Wallet</Text>
                        <Text style={styles.walletTextLight}>AA</Text>
                      </View>
                      <View style={styles.walletSectionFirstRowRight}>
                        <View style={styles.walletTextBoldSmallContainer}>
                          <Text style={styles.walletTextBoldSmall}>
                            Recommended
                          </Text>
                        </View>
                        <Image
                          style={styles.images}
                          source={images.rightArrowBgBlack}
                        />
                      </View>
                    </View>
                    <Text style={styles.walletTextSmall}>
                      Compatible with all Daaps; lower Gas fees; only supports
                      paying gas with native token; does not support advanced
                      features.
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          isVisible={modal2Show}
          backdropOpacity={0.5}
          onBackdropPress={() => {
            // setModalShow(!modalShow);
            setModal2Show(!modal2Show);
          }}
        >
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <View style={styles.modalBody}>
                <View style={styles.horizontalLine}></View>

                <Text style={styles.modalHeading}>Create Wallet</Text>
                <View style={styles.ethereumMainnetContainer}>
                  <Image
                    style={styles.ethereumMainnetImg}
                    source={images.ethImg}
                  />
                  <Text style={styles.ethereumMainnetText}>
                    Ethereum Mainnet
                  </Text>
                </View>
                <View style={styles.warningRow}>
                  <View>
                    <Image
                      style={styles.warningImg}
                      source={images.securityWarningImg}
                    />
                  </View>
                  <Text style={styles.warningText}>
                    Compatible with all Dapps; lower Gas fees; only supports
                    paying gas with native token; does not support advanced
                    features.{' '}
                    <Text style={styles.modalTextPink}>Learn More</Text>
                  </Text>
                </View>

                <View style={styles.nameRow}>
                  <Text style={styles.nameRowText}>Name Wallet</Text>
                  <Text style={styles.nameRowText}>0/20</Text>
                </View>

                <View style={styles.nameRowInput}>
                  <TextInput
                    style={styles.nameRowTextInput}
                    placeholder="E.g.My Wallet"
                    placeholderTextColor={colors.disabledBg1}
                    value={walletName}
                    onChangeText={(text) => {
                      setWalletName(text);
                    }}
                  />
                  <Text style={styles.nameRowTextInputLeft}>EQA</Text>
                </View>

                <View style={styles.modalCheckMarkRow}>
                  <Image
                    style={styles.modalCheckMark}
                    source={images.modalCheckMark}
                  />
                  <Text style={styles.modalCheckText}>
                    Same address on other EVM compatible chains will be created
                    automatically.
                    <Text style={styles.modalTextPink}>Networks Supported</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.bottonsContainer}>
                <TouchableOpacity
                  style={styles.bottonWhite}
                  onPress={() => {
                    setModal2Show(!modal2Show);
                  }}
                >
                  <Text style={styles.bottonWhiteText}>Cancel</Text>
                </TouchableOpacity>
                {loader ? (
                  <View style={styles.bottonBlack}>
                    <ActivityIndicator color={'white'} size={30} />
                  </View>
                ) : (
                  <TouchableOpacity
                    style={styles.bottonBlack}
                    onPress={() => {
                      handleCreateWallet();
                      setWallet('Legacy Wallet');
                    }}
                  >
                    <Text style={styles.bottonBlackText}>Confirm</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          isVisible={modal3Show}
          backdropOpacity={0.5}
          onBackdropPress={() => {
            setModal3Show(!modal3Show);
          }}
        >
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <View style={styles.modalBody}>
                <View style={styles.horizontalLine}></View>

                <Text style={styles.modalHeading}>Create Smart Wallet</Text>
                <View style={styles.ethereumMainnetContainer}>
                  <Image
                    style={styles.ethereumMainnetImg}
                    source={images.ethImg}
                  />
                  <Text style={styles.ethereumMainnetText}>
                    Ethereum Mainnet
                  </Text>
                </View>
                <View style={styles.warningRow}>
                  <View>
                    <Image
                      style={styles.warningImg}
                      source={images.securityWarningImg}
                    />
                  </View>

                  <Text style={styles.warningText}>
                    Compatible with all Dapps; lower Gas fees; only supports
                    paying gas with native token; does not support advanced
                    features.{' '}
                    <Text style={styles.modalTextPink}>Learn More</Text>
                  </Text>
                </View>

                <View style={styles.nameRow}>
                  <Text style={styles.nameRowText}>Name Wallet</Text>
                  <Text style={styles.nameRowText}>0/20</Text>
                </View>

                <View style={styles.nameRowInput}>
                  <TextInput
                    style={styles.nameRowTextInput}
                    placeholder="E.g.My Wallet"
                    placeholderTextColor={colors.disabledBg1}
                    value={smartWalletName}
                    onChangeText={(text) => {
                      setSmartWalletName(text);
                    }}
                  />
                  <Text style={styles.nameRowTextInputLeft}>AA</Text>
                </View>

                <View style={styles.modalCheckMarkRow}>
                  <Image
                    style={styles.modalCheckMark}
                    source={images.modalCheckMark}
                  />
                  <Text style={styles.modalCheckText}>
                    Same address on other EVM compatible chains will be created
                    automatically.
                    <Text style={styles.modalTextPink}>Networks Supported</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.bottonsContainer}>
                <TouchableOpacity
                  style={styles.bottonWhite}
                  onPress={() => {
                    setModal3Show(!modal3Show);
                  }}
                >
                  <Text style={styles.bottonWhiteText}>Cancel</Text>
                </TouchableOpacity>

                {loader ? (
                  <View style={styles.bottonBlack}>
                    <ActivityIndicator color={'white'} size={30} />
                  </View>
                ) : (
                  <TouchableOpacity
                    style={styles.bottonBlack}
                    onPress={() => {
                      handleCreateAAWallet();
                      // setWallet('Smart Wallet');
                    }}
                  >
                    <Text style={styles.bottonBlackText}>Confirm</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          isVisible={walletCreatedtModal}
          onBackdropPress={() => {
            setWalletCreatedtModal(false);
          }}
        >
          <View style={styles.popUpBody}>
            <Image style={styles.checkmark} source={images.checkmark} />
            <Text style={styles.popUpText}>
              Your {wallet} is created successfully
            </Text>
            <TouchableOpacity
              style={styles.popUpBtn}
              onPress={() => {
                setWalletCreatedtModal(false);
                setWallet('');
              }}
            >
              <Text style={styles.popUpBtnText}>Done</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          isVisible={showTransactionRes}
          backdropOpacity={0.5}
          onBackdropPress={() => {
            setShowTransactionRes(false);
          }}
          onBackButtonPress={() => {
            setShowTransactionRes(false);
          }}
        >
          <View style={styles.transactionModalBody}>
            <Text style={styles.transactionModalText}>
              Heyyyyyyyyyyyyyyyyyyyyyyy
            </Text>
          </View>
        </Modal>

        <Modal
          isVisible={selectWalletModal}
          onBackButtonPress={() => {
            setSelectWalletModal(false);
          }}
          onBackdropPress={() => {
            setSelectWalletModal(false);
          }}
          backdropOpacity={0.5}
        >
          <View style={styles.modalBodeySelect}>
            <Text style={styles.modalHeadingSelect}>
              Select Your Smart Wallet
            </Text>
            <ScrollView>
              {userWallet?.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setParentOfAAWallet(item.address);
                      setSelectWalletModal(false);
                      setModal3Show(true);
                    }}
                    style={styles.typeOptionContainer}
                  >
                    <Text style={styles.typeOption}>{item.walletName}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}
