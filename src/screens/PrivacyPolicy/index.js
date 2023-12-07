import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../services/utilities/images';
import {styles} from './style';
import Header from '../../components/Header';

export default function PrivacyPolicy() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.landingPageBGImg} style={styles.bgImage}>
        <Header title={'Privacy Policy'} />
        <View style={styles.divider} />
        <ScrollView
          style={styles.parentContainer}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>1. Types data we collect</Text>
          <Text style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. {'\n'}
            {'\n'} Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </Text>
          <Text style={styles.title}>2. Use of your personal data</Text>
          <Text style={styles.bodyText}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae.
            {'\n\n'}
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit.
          </Text>
          <Text style={styles.title}>3. Disclosure of your personal data</Text>
          <Text style={styles.bodyText}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. 
            {'\n\n'}
            Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. 
            {'\n\n'}
            Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus
          </Text>
          
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
