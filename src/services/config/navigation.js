import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import LandingPage from '../../screens/LandingPage';
import Account from '../../screens/Account';
import AccountInfo from '../../screens/AccountInfo';
import Security from '../../screens/Security';
import NoSessionsPage from '../../screens/NoSessionsPage';
import NetworkSettings from '../../screens/NetworkSettings';
import BitcoinMainnetScreen from '../../screens/BitcoinMainnetScreen';
import Language from '../../screens/Language';
import Advanced from '../../screens/Advanced';
import AboutUs from '../../screens/AboutUs';
import RfcNodesSettings from '../../screens/PrcNodesSettings';
import ETH1Page from '../../screens/ETH1Page';
import ETHPage from '../../screens/ETHPage';
import SendETHPage from '../../screens/SendETHPage';
import WalletAddressPage from '../../screens/WalletAddressPage';
import BackupMainScreen from '../../screens/BackupMainScreen';
import BackupEmailVerifyPage from '../../screens/BackupEmailVerifyPage';
import BackupPrivacyPolicy from '../../screens/BackupPrivacyPolicy';
import BackupBiometric from '../../screens/BackupBiometric';
import BackupEnableLock from '../../screens/BackupEnableLock';
import BackupPersonalKeyShare from '../../screens/BackupPersonalKeyshare';
import BackupRcoveryKey from '../../screens/BackupRcoveryKey';
import { sizes } from '../utilities/sizes';
import { Image, View } from 'react-native';
import images from '../utilities/images';
import DiscoverPage from '../../screens/DiscoverPage';
import SwapAndBridgeScr1 from '../../screens/SwapAndBridgeScr1';
import TabNavigationComponent from './TabNavigation';
import SwapAndBridgeScr2 from '../../screens/SwapAndBridgeScr2';
import SwapFrom from '../../screens/SwapFrom';
import SignUp from '../../screens/SignUp';
import SignIn from '../../screens/SignIn';
import OTP from '../../screens/OTP';
import ForgotPass from '../../screens/ForgotPass';
import ResetPass from '../../screens/ResetPass';
import PrivacyPolicy from '../../screens/PrivacyPolicy';
import { useSelector } from 'react-redux';
import VerifyEmail from '../../screens/VerifyEmail';
import { selectAuthToken } from '../../store/token';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyStack" component={MyStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MyStack = () => {
  const isSignIn = useSelector(state => state.isSignedInSlice.isSignIn);
  const authToken = useSelector(selectAuthToken)
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authToken ? (
        <Stack.Screen name="AppStackNavigator" component={AppStackNavigator} />
      ) : (
        <Stack.Screen
          name="AuthStackNavigator"
          component={AuthStackNavigator}
        />
      )}
    </Stack.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="ResetPass" component={ResetPass} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="AccountInfo" component={AccountInfo} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="NoSessionsPage" component={NoSessionsPage} />
      <Stack.Screen name="NetworkSettings" component={NetworkSettings} />
      <Stack.Screen
        name="BitcoinMainnetScreen"
        component={BitcoinMainnetScreen}
      />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Advanced" component={Advanced} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="RfcNodesSettings" component={RfcNodesSettings} />
      <Stack.Screen name="ETH1Page" component={ETH1Page} />
      <Stack.Screen name="ETHPage" component={ETHPage} />
      <Stack.Screen name="SendETHPage" component={SendETHPage} />
      <Stack.Screen name="WalletAddressPage" component={WalletAddressPage} />
      <Stack.Screen name="BackupMainScreen" component={BackupMainScreen} />
      <Stack.Screen
        name="BackupEmailVerifyPage"
        component={BackupEmailVerifyPage}
      />
      <Stack.Screen
        name="BackupPrivacyPolicy"
        component={BackupPrivacyPolicy}
      />
      <Stack.Screen name="BackupBiometric" component={BackupBiometric} />
      <Stack.Screen name="BackupEnableLock" component={BackupEnableLock} />
      <Stack.Screen
        name="BackupPersonalKeyShare"
        component={BackupPersonalKeyShare}
      />
      <Stack.Screen name="BackupRcoveryKey" component={BackupRcoveryKey} />
      <Stack.Screen name="SwapAndBridgeScr2" component={SwapAndBridgeScr2} />
      <Stack.Screen name="SwapFrom" component={SwapFrom} />
      <Stack.Screen name="EmailVerify" component={VerifyEmail} />
    </Stack.Navigator>
  );
};
const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="ResetPass" component={ResetPass} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="AccountInfo" component={AccountInfo} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="NoSessionsPage" component={NoSessionsPage} />
      <Stack.Screen name="NetworkSettings" component={NetworkSettings} />
      <Stack.Screen
        name="BitcoinMainnetScreen"
        component={BitcoinMainnetScreen}
      />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Advanced" component={Advanced} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="RfcNodesSettings" component={RfcNodesSettings} />
      <Stack.Screen name="ETH1Page" component={ETH1Page} />
      <Stack.Screen name="ETHPage" component={ETHPage} />
      <Stack.Screen name="SendETHPage" component={SendETHPage} />
      <Stack.Screen name="WalletAddressPage" component={WalletAddressPage} />
      <Stack.Screen name="BackupMainScreen" component={BackupMainScreen} />
      <Stack.Screen
        name="BackupEmailVerifyPage"
        component={BackupEmailVerifyPage}
      />
      <Stack.Screen
        name="BackupPrivacyPolicy"
        component={BackupPrivacyPolicy}
      />
      <Stack.Screen name="BackupBiometric" component={BackupBiometric} />
      <Stack.Screen name="BackupEnableLock" component={BackupEnableLock} />
      <Stack.Screen
        name="BackupPersonalKeyShare"
        component={BackupPersonalKeyShare}
      />
      <Stack.Screen name="BackupRcoveryKey" component={BackupRcoveryKey} />
      <Stack.Screen name="SwapAndBridgeScr2" component={SwapAndBridgeScr2} />
      <Stack.Screen name="SwapFrom" component={SwapFrom} />
    </Stack.Navigator>
  );
};

const MyTabs = () => {
  return <TabNavigationComponent />;
};
