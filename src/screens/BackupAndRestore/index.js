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

export default function BackupAndRestore() {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={images.landingPageBGImg}>
        <Header title={'Backup & Restore'} />
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
                  source={images.createEncBackup}
                  style={styles.autoLockImg}
                />
              </View>
              <Text style={styles.autoLockText}>Create Encrypted Backup</Text>
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
                <Image
                  source={images.restoreWalletIcon}
                  style={styles.autoLockImg}
                />
              </View>
              <Text style={styles.autoLockText}>
                Restore Wallet From A Backup
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
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
