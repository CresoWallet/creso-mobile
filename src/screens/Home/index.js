import React, {useState, useRef, useEffect} from 'react';
import Header from '../../components/Header';
import {styles} from './style';
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
import {colors, sizes} from '../../services';
import {useDispatch, useSelector} from 'react-redux';
import {getUserDetails} from '../../clientApi';
import {handleAddUserDetail} from '../../store/user';

export default function Home({navigation}) {
  const [checkedCoin, setCheckedCoin] = useState('coin1');
  const [userName, setUserName] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [modal2Show, setModal2Show] = useState(false);
  const [modal3Show, setModal3Show] = useState(false);

  const [modalForBackup, setModalForBackup] = useState(true);
  const [walletName, setWalletName] = useState('');
  const [smartWalletName, setSmartWalletName] = useState('');
  const [loader, setLoader] = useState(false);
  const [walletCreatedtModal, setWalletCreatedtModal] = useState(false);
  const [wallet, setWallet] = useState('');
  const [walletCreated, setWalletCreated] = useState(false);

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

    fetch(
      'https://creso-b02eab9f8c40.herokuapp.com/api/create/wallet',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        console.log(result);
        if (result) {
          setModal2Show(!modal2Show);
          setWalletCreatedtModal(true);
        }
        setWalletName('');
        setLoader(false);
      })
      .catch(error => {
        console.log('error', error);
        setWalletName('');
        setLoader(false);
      });
  };

  const handleCreateSmartWallet = async () => {
    var myHeaders = new Headers();

    setLoader(true);

    myHeaders.append('auth_token', `"auth_token ${userToken}"`);
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Cookie', `auth_token=${userToken}`);

    var raw = JSON.stringify({
      walletName: smartWalletName,
      network: 'goerli',
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://creso-b02eab9f8c40.herokuapp.com/api/create/smartwallet',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        console.log(result);
        if (result) {
          setModal3Show(!modal3Show);
          setWalletCreatedtModal(true);
        }
        setSmartWalletName('');
        setLoader(false);
      })
      .catch(error => {
        console.log('error', error);
        setSmartWalletName('');
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

  // useEffect(() => {
  //   navigation.addListener('focus', () => {
  //     // console.log('focus use effect work updated user details ' , updatedUserDetails);
  //     // console.log('focus work' , "userDetalis" , userDetalis);
  //     if (userDetalis) {
  //       const _id = test.userDetalis._id
  //       console.log(_id, 'use Effect focus id');
  //       handleGetUserDetails(_id);
  //     }
  //   });
  // }, [navigation]);

  useEffect(() => {
    if (!userDetail.username) {
      getCurrentUser();
    } else {
      setUserName(userDetail.username);
    }
  }, []);

  const userToken = useSelector(state => state?.tokenSlice?.token);
  const userDetail = useSelector(state => state?.userDetailSlice?.userDetail);

  const getCurrentUser = async () => {
    const res = await getUserDetails(userToken);
    if (res) {
      const user = res.data.user;
      dispatch(handleAddUserDetail(user));
      setUserName(res.data.user.username);
    }
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={images.landingPageBGImg}>
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
              onPress={() => setModalForBackup(!modalForBackup)}>
              <Image style={styles.logoRowImgRight} source={images.qrScanner} />
            </TouchableOpacity>
          </View>
        </View>
        <ImageBackground style={styles.homeCardImg} source={images.homeCardImg}>
          <Text style={styles.homeCardText1}>{userName}</Text>
          <Text style={styles.homeCardText2}>3.187.99 USD</Text>
        </ImageBackground>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.scrollViewRowContainer}>
              <TouchableOpacity
                style={styles.scrollViewAddItemContainer}
                onPress={() => {
                  setWalletCreatedtModal(true);
                }}>
                <Image style={styles.addIcon} source={images.addIcon} />
                <Text style={styles.scrollViewItemTextBold}>Add</Text>
              </TouchableOpacity>
              <Image
                style={styles.dottedLine}
                source={images.dottedLine}></Image>
              <TouchableOpacity
                style={styles.scrollViewItemContainer}
                onPress={() => {
                  setCheckedCoin('coin1');
                  navigation.navigate('ETH1Page');
                }}>
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
                }}>
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
                }}>
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
                }}>
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
                }}>
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
                }}>
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
              }}>
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
              <Text style={styles.walletRowTextLight}>0xc213 ... 34dr</Text>
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
              transform: [{translateY}],
              width: sizes.screenWidth * 0.9,
              alignSelf: 'center',
              bottom: sizes.screenHeight * 0.12,
            }}>
            <TouchableOpacity
              style={styles.backupModalInsideContaienr}
              onPress={() => navigation.navigate('BackupMainScreen')}>
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
              {/* <TouchableOpacity onPress={() => console.log('Button Pressed')}>
                <Text>Press Me</Text>
              </TouchableOpacity> */}
            </TouchableOpacity>
          </Animated.View>
        )}

        {/* <Modal
          isVisible={modalForBackup}
          onBackdropPress={() => {
            setModalForBackup(!modalForBackup);
          }}
        >
          <View
            style={styles.modal}
          >
            <View style={styles.backupModalInsideContaienr}>
            </View>
          </View>
        </Modal> */}

        <Modal
          isVisible={modalShow}
          backdropOpacity={0.5}
          onBackdropPress={() => {
            setModalShow(!modalShow);
          }}>
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
                    setModal2Show(!modal2Show);
                  }}>
                  <Image style={styles.images} source={images.walletPink} />
                  <View style={styles.walletTextSection}>
                    <View style={styles.walletSectionFirstRow}>
                      <View>
                        <Text style={styles.walletTextBold}>Legacy Wallet</Text>
                        <Text style={styles.walletTextLight}>EQA</Text>
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
                  onPress={() => {
                    setModal3Show(!modal3Show);
                  }}>
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
          }}>
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
                    onChangeText={text => {
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
                  }}>
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
                    }}>
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
            // setModalShow(!modalShow);
            setModal3Show(!modal3Show);
          }}>
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
                    onChangeText={text => {
                      setSmartWalletName(text);
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
                    setModal3Show(!modal3Show);
                  }}>
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
                      handleCreateSmartWallet();
                      setWallet('Smart Wallet');
                    }}>
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
          }}>
          <View style={styles.popUpBody}>
            <Image style={styles.checkmark} source={images.checkmark} />
            <Text style={styles.popUpText}>
              Your {wallet} is created successfully
            </Text>
            <TouchableOpacity style={styles.popUpBtn}>
              <Text
                style={styles.popUpBtnText}
                onPress={() => {
                  setWalletCreatedtModal(false);
                  setWallet('');
                }}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}
