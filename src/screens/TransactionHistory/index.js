import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '../../store/token';
import { colors } from '../../services';
import { getTranscitionHistory } from '../../clientApi';
import { selectWallet } from '../../store/WalletAddress';
import formatToJSON from '../../services/utilities/JsonLog';

export default function TransactionHistory() {

  const wallet = useSelector(selectWallet)
  const authToken = useSelector(selectAuthToken)
  console.log(wallet);
  console.log(authToken);

  const [loader, setLoader] = useState(false)
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    handleGetTranscitionHistory()
  }, [])

  const handleGetTranscitionHistory = async () => {
    try {
      setLoader(true)
      const network = 'goerli'
      const response = await getTranscitionHistory(wallet[0].walletAddress, network)
      if (response.status == 200) {
        setLoader(false)
        setTransactionHistory(response.data)
      } else {
        setLoader(false)
      }
    } catch (error) {
      setLoader(false)
      console.log(error.message);
    }
  }

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={images.landingPageBGImg}>
        <Header title={'Transaction History'} />

        <View style={styles.scrollContainer}>
          <ScrollView>

            {
              loader ?
                <View style={styles.loaderContainer}>
                  <ActivityIndicator color={colors.disabledBg} size={40} />
                </View>
                :
                transactionHistory.length > 0 ?
                  <View>
                    <Text>Transaction history found</Text>
                  </View>
                  :
                  <View style={styles.loaderContainer}>
                    <Text style={styles.noTransactionsText}>
                      No transactions have been made yet
                    </Text>
                  </View>
            }
            <View style={styles.margin}></View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}


// {tH.map((item, index) => {
//   return (
//     <View key={index}>
//       <View style={styles.thRow}>
//         <Image source={images.THImg} style={styles.THImg} />
//         <View style={styles.abc}>
//           <Text style={styles.textBold}>{item.title}</Text>
//           <View style={styles.thRowSpaceBetween}>
//             <View style={styles.abc}>
//               <Text style={styles.disabledText}>
//                 Sender : {item.sender}
//               </Text>
//               <Text style={styles.disabledText}>
//                 {item.date} | {item.time}
//               </Text>
//             </View>
//             <View style={styles.itemsFlexEnd}>
//               <Text style={styles.textBold}>{item.amount}</Text>
//               <Text
//                 style={
//                   item.status === 'Pending'
//                     ? styles.textPink
//                     : styles.textGreen
//                 }>
//                 {item.status}
//               </Text>
//             </View>
//           </View>
//         </View>
//       </View>
//       {index < tH.length - 1 ? (
//         <View style={styles.hrRight}></View>
//       ) : null}
//     </View>
//   );
// })}
