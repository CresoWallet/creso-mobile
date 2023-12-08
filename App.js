import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// import LandingPage from './src/screens/LandingPage';
import NoSessionsPage from './src/screens/NoSessionsPage';
import NetworkSettings from './src/screens/NetworkSettings';
import BitcoinMainnetScreen from './src/screens/BitcoinMainnetScreen';
import Security from './src/screens/Security';
import AboutUs from './src/screens/AboutUs';
import AccountInfo from './src/screens/AccountInfo';
import Account from './src/screens/Account';
import ETHPage from './src/screens/ETHPage';
import ETH1Page from './src/screens/ETH1Page';
import SendETH from './src/screens/SendETHPage';
import SendETHPage from './src/screens/SendETHPage';
import WalletAddressPage from './src/screens/WalletAddressPage';
import DiscoverPage from './src/screens/DiscoverPage';
import BackupEmailVerifyPage from './src/screens/BackupEmailVerifyPage';
import BackupPrivacyPolicy from './src/screens/BackupPrivacyPolicy';
import BackupEnableLock from './src/screens/BackupEnableLock';
import BackupPersonalKeyShare from './src/screens/BackupPersonalKeyshare';
import SwapAndBridgeScr1 from './src/screens/SwapAndBridgeScr1';
import SwapAndBridgeScr2 from './src/screens/SwapAndBridgeScr2';
import RfcNodesSettings from './src/screens/PrcNodesSettings';
import Language from './src/screens/Language';
import Home from './src/screens/Home';
import SwapFrom from './src/screens/SwapFrom';
import Advanced from './src/screens/Advanced';
import AboutUs2 from './src/screens/AboutUs2';
import MainNavigator from './src/services/config/navigation';

import BackupMainScreen from './src/screens/BackupMainScreen';
import BackupBiometric from './src/screens/BackupBiometric';
import BackupRcoveryKey from './src/screens/BackupRcoveryKey';
import {sizes} from './src/services';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <MainNavigator />;
}

// <SafeAreaView>
{
  /* <LandingPage/> */
}
{
  /* <NoSessionsPage/> */
}
{
  /* <NetworkSettings /> */
}
{
  /* <ETHPage/> */
}
{
  /* <Security /> */
}
{
  /* <ETH1Page/> */
}
{
  /* <SendETHPage/> */
}
{
  /* <WalletAddressPage/> */
}
{
  /* <DiscoverPage/> */
}
{
  /* <BackupEmailVerifyPage/> */
}
{
  /* <BackupPrivacyPolicy/> */
}
{
  /* <BackupEnableLock/> */
}
{
  /* <BackupPersonalKeyShare/> */
}
{
  /* <BitcoinMainnetScreen/> */
}
{
  /* <AboutUs /> */
}
{
  /* <AccountInfo /> */
}
{
  /* <Account /> */
}
{
  /* <SwapAndBridgeScr1 />
}
{
  /* <SwapAndBridgeScr2 /> */
}
{
  /* <RfcNodesSettings /> */
}
{
  /* <Language /> */
}
{
  /* <Home /> */
}
{
  /* <SwapFrom /> */
}
{
  /* <Advanced /> */
}
{
  /* <AboutUs2 /> */
}
// </SafeAreaView>
