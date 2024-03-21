import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors} from '../../services';
import {getUserDetails} from '../../clientApi';
import {useSelector} from 'react-redux';
import {selectUserData} from '../../store/user';

export default function AccountInfo({navigation}) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const userDetail = useSelector(selectUserData);

  useEffect(() => {
    setUserEmail(userDetail.email);
    setUserName(userDetail.username);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={images.landingPageBGImg}
          style={styles.bgImage}>
          <ScrollView>
            <View style={styles.profileMaincontainer}>
              <View style={styles.accountTopcontainer}>
                <Text style={styles.accountTopcontainerText}>Account</Text>
              </View>
              <View style={styles.profilecontainer}>
                <View style={styles.accountProfilePicContainer}>
                  <Image
                    style={styles.accountProfilePic}
                    source={images.accountProfilePic}
                  />
                </View>
                <View style={styles.profilecontainerText}>
                  <View>
                    <Text style={styles.textSamuel}>{userName}</Text>
                  </View>
                  <View style={styles.profilecontainerEmail}>
                    <Text style={styles.textSamuelEmail}>{userEmail}</Text>
                  </View>
                  <View style={styles.profilecontainerLastSeen}>
                    <Text style={styles.textSamuelLastSeen}>
                      Last Backup:
                      <Text style={styles.dateColorChange}>28 OCT 2023</Text>
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.accountView}
                onPress={() => navigation.navigate('Account')}>
                <View>
                  <Image
                    source={images.userProfile}
                    style={styles.profileImage}
                  />
                </View>
                <View style={styles.userProfileHeadingContainer}>
                  <Text style={styles.userProfileHeading}>Account</Text>
                </View>
                <View>
                  <Image
                    source={images.ArrowBitcoin}
                    style={styles.arrowImage}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.accountView}>
                <View>
                  <Image
                    source={images.RecoveryKey}
                    style={styles.profileImage}
                  />
                </View>
                <View style={styles.userProfileHeadingContainer}>
                  <Text style={styles.userProfileHeading}>Recovery Key</Text>
                </View>
                <View>
                  <Image
                    source={images.ArrowBitcoin}
                    style={styles.arrowImage}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.horizontalLine}></View>
              <TouchableOpacity
                style={styles.accountView}
                onPress={() => navigation.navigate('Security')}>
                <View>
                  <Image source={images.Computer} style={styles.profileImage} />
                </View>
                <View style={styles.userProfileHeadingContainer}>
                  <Text style={styles.userProfileHeading}>Security</Text>
                </View>
                <View>
                  <Image
                    source={images.ArrowBitcoin}
                    style={styles.arrowImage}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.accountView}
                onPress={() => navigation.navigate('TransactionHistory')}>
                <View>
                  <Image
                    source={images.transactionHistory}
                    style={styles.profileImage}
                  />
                </View>
                <View style={styles.userProfileHeadingContainer}>
                  <Text style={styles.userProfileHeading}>
                    Transaction History
                  </Text>
                </View>
                <View>
                  <Image
                    source={images.ArrowBitcoin}
                    style={styles.arrowImage}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.horizontalLine}></View>
              <TouchableOpacity
                style={styles.accountView}
                onPress={() => navigation.navigate('NoSessionsPage')}>
                <View>
                  <Image source={images.Sessions} style={styles.profileImage} />
                </View>
                <View style={styles.userProfileHeadingContainer}>
                  <Text style={styles.userProfileHeading}>V1 Sessions</Text>
                </View>
                <View>
                  <Image
                    source={images.ArrowBitcoin}
                    style={styles.arrowImage}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.accountView}>
                <View>
                  <Image source={images.Sessions} style={styles.profileImage} />
                </View>
                <View style={styles.userProfileHeadingContainer}>
                  <Text style={styles.userProfileHeading}>V2 Sessions</Text>
                </View>
                <View>
                  <Image
                    source={images.ArrowBitcoin}
                    style={styles.arrowImage}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.horizontalLine}></View>
              <TouchableOpacity
                style={styles.accountView}
                onPress={() => navigation.navigate('NetworkSettings')}>
                <View>
                  <Image
                    source={images.SignalHotspot}
                    style={styles.profileImage}
                  />
                </View>
                <View style={styles.userProfileHeadingContainer}>
                  <Text style={styles.userProfileHeading}>
                    Network Settings
                  </Text>
                </View>
                <View>
                  <Image
                    source={images.ArrowBitcoin}
                    style={styles.arrowImage}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.accountView}
                onPress={() => navigation.navigate('Language')}>
                <View>
                  <Image source={images.Language} style={styles.profileImage} />
                </View>
                <View style={styles.userProfilelanguageContainer}>
                  <Text style={styles.userProfileHeading}>Language</Text>
                </View>
                <View>
                  <Text style={styles.textColorBlue}>English</Text>
                </View>
                <View>
                  <Image
                    source={images.ArrowBitcoin}
                    style={styles.arrowImage}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.accountView}>
                <View>
                  <Image source={images.Dollar} style={styles.profileImage} />
                </View>
                <View style={styles.userProfileCurrencyContainer}>
                  <Text style={styles.userProfileHeading}>Local Currency</Text>
                </View>
                <View>
                  <Text style={styles.textColorBlue}>USD</Text>
                </View>
                <View>
                  <Image
                    source={images.ArrowBitcoin}
                    style={styles.arrowImage}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.accountView}
                onPress={() => navigation.navigate('Advanced')}>
                <View>
                  <Image source={images.Advanced} style={styles.profileImage} />
                </View>
                <View style={styles.userProfileHeadingContainer}>
                  <Text style={styles.userProfileHeading}>Advanced</Text>
                </View>
                <View>
                  <Image
                    source={images.ArrowBitcoin}
                    style={styles.arrowImage}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.horizontalLine}></View>
              <TouchableOpacity
                style={styles.accountView}
                onPress={() => navigation.navigate('AboutUs')}>
                <View>
                  <Image source={images.AboutUs} style={styles.profileImage} />
                </View>
                <View style={styles.userProfileHeadingContainer}>
                  <Text style={styles.userProfileHeading}>About Us</Text>
                </View>
                <View>
                  <Image
                    source={images.ArrowBitcoin}
                    style={styles.arrowImage}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.accountView}>
                <View>
                  <Image source={images.Support} style={styles.profileImage} />
                </View>
                <View style={styles.userProfileHeadingContainer}>
                  <Text style={styles.userProfileHeading}>Support</Text>
                </View>
                <View>
                  <Image
                    source={images.ArrowBitcoin}
                    style={styles.arrowImage}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.marginBtm}></View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
