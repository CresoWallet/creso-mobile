import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {colors, sizes} from '../../services';
import Header from '../../components/Header';

export default function EOAPassword({navigation}) {
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [confirmPass, setConfirmPass] = useState('');
  const [showConfirmPass, setShowConfirmPass] = useState(true);

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

          <View style={styles.btnSection}>
            <View style={styles.learnMoreRow}>
              <Image source={images.emailCheck} style={styles.emailCheck} />
              <Text style={styles.textBlackBold}>
                I understand that Creso cannot recover this password for me.
                <Text style={styles.textPink}>Learn more</Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Create New Password</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
