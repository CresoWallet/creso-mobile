import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function Security() {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={images.landingPageBGImg}>
        <Header title={'Security'} />
        <View style={styles.securityBgImgContainer}>
          <Image
            style={styles.securityBgImg}
            source={images.backupandRestoreImg}
          />
        </View>
        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.autoLockRow}>
            <View style={styles.autoLockRowRight}>
              <View style={styles.autoLockImgContainer}>
                <Image
                  source={images.securityLock}
                  style={styles.autoLockImg}
                />
              </View>
              <Text style={styles.autoLockText}>Auto-Lock</Text>
            </View>

            <View style={styles.autoLockRowLeft}>
              <Text style={styles.autoLockNeverText}>Never</Text>

              <View style={styles.autoLockRowRightArrowContainer}>
                <Image
                  source={images.securityRightArrowImg}
                  style={styles.autoLockRowRightArrow}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.warningRow}>
            <View>
              <Image
                style={styles.warningImg}
                source={images.securityWarningImg}
              />
            </View>
            <Text style={styles.warningText}>
              Choose the amount of time before the application automatically
              locks
            </Text>
          </View>
        </View>

        <View style={styles.hrRight}></View>

        <TouchableOpacity style={styles.autoLockRow}>
          <View style={styles.autoLockRowRight}>
            <View style={styles.autoLockImgContainer}>
              <Image source={images.manageAuthImg} style={styles.autoLockImg} />
            </View>
            <Text style={styles.autoLockText}>
              Manage Authentication Methods
            </Text>
          </View>

          <View style={styles.autoLockRowLeft}>
            <View style={styles.autoLockRowRightArrowContainer}>
              <Image
                source={images.securityRightArrowImg}
                style={styles.autoLockRowRightArrow}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.autoLockRow}>
          <View style={styles.autoLockRowRight}>
            <View style={styles.autoLockImgContainer}>
              <Image source={images.encBackupImg} style={styles.autoLockImg} />
            </View>
            <Text style={styles.autoLockText}>Encrypted Backups</Text>
          </View>

          <View style={styles.autoLockRowLeft}>
            <View style={styles.autoLockRowRightArrowContainer}>
              <Image
                source={images.securityRightArrowImg}
                style={styles.autoLockRowRightArrow}
              />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.hrRight}></View>

        <TouchableOpacity style={styles.autoLockRow}>
          <View style={styles.autoLockRowRight}>
            <View style={styles.autoLockImgContainer}>
              <Image source={images.pushNotiImg} style={styles.autoLockImg} />
            </View>
            <Text style={styles.autoLockText}>Push Notifications</Text>
          </View>

          <View style={styles.autoLockRowLeft}>
            <Text style={styles.autoLockNeverText}>Disabled</Text>

            <View style={styles.autoLockRowRightArrowContainer}>
              <Image
                source={images.securityRightArrowImg}
                style={styles.autoLockRowRightArrow}
              />
            </View>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
