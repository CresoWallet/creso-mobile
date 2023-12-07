import React from 'react'
import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native'
import images from '../../services/utilities/images';
import { styles } from './style';
import Header from '../../components/Header';

export default function NoSessionsPage() {
  return (
    <SafeAreaView>
        <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'V1 Sessions'} />

        <View style={styles.container}>
            <Image source={images.NoSessionsPage} style={styles.mainImage} ></Image>
            <Text style={styles.subText}>No Active Wallet Connect Sessions</Text>
        </View>
        </ImageBackground>
        
    </SafeAreaView>
  )
}
