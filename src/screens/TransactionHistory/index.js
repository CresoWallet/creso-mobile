import React, {useState} from 'react';
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
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function TransactionHistory() {
  const [tH, setTH] = useState([
    {
      title: 'Account Deposit',
      sender: '0xfa...8871',
      amount: '+$15.00',
      date: '2024-01-10',
      time: '16:54',
      status: 'Pending',
    },
    {
      title: 'Account Deposit',
      sender: '0xfa...8871',
      amount: '+$15.00',
      date: '2024-01-10',
      time: '16:54',
      status: 'Successful Transaction',
    },
    {
      title: 'Account Deposit',
      sender: '0xfa...8871',
      amount: '+$15.00',
      date: '2024-01-10',
      time: '16:54',
      status: 'Successful Transaction',
    },
  ]);

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={images.landingPageBGImg}>
        <Header title={'Transaction History'} />

        <View style={styles.scrollContainer}>
          <ScrollView>
            {tH.map((item, index) => {
              return (
                <View key={index}>
                  <View style={styles.thRow}>
                    <Image source={images.THImg} style={styles.THImg} />
                    <View style={styles.abc}>
                      <Text style={styles.textBold}>{item.title}</Text>
                      <View style={styles.thRowSpaceBetween}>
                        <View style={styles.abc}>
                          <Text style={styles.disabledText}>
                            Sender : {item.sender}
                          </Text>
                          <Text style={styles.disabledText}>
                            {item.date} | {item.time}
                          </Text>
                        </View>
                        <View style={styles.itemsFlexEnd}>
                          <Text style={styles.textBold}>{item.amount}</Text>
                          <Text
                            style={
                              item.status === 'Pending'
                                ? styles.textPink
                                : styles.textGreen
                            }>
                            {item.status}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  {index < tH.length - 1 ? (
                    <View style={styles.hrRight}></View>
                  ) : null}
                </View>
              );
            })}
            <View style={styles.margin}></View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
