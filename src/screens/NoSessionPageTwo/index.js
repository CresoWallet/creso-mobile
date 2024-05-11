import React from 'react'
import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native'
import Header from '../../components/Header'
import images from '../../services/utilities/images'
import { styles } from './style'



export default function NoSessionsPageTwo() {
  return (
    <SafeAreaView>
        <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'V2 Sessions'} />

        <View style={styles.container}>
            <Image source={images.NoSessionsPage} style={styles.mainImage} ></Image>
            <Text style={styles.subText}>No Active Wallet Connect Sessions</Text>
        </View>
        </ImageBackground>
        
    </SafeAreaView>
  )
}
