import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';

export default function BtnBlack({title}) {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.buttonField}>
        <View style={styles.button}>
          <Text style={styles.text}>Next</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
