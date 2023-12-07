import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {useNavigation} from '@react-navigation/native'

export default function Header({title}) {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.headerBackArrowImgContainer}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image
              style={styles.headerBackArrowImg}
              source={images.headerBackArrow}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerHeadingText}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
