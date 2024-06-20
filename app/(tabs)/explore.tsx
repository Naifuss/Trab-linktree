import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TouchableOpacity, View, Text, Linking } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#525574' }}
      headerImage={
        <Image
          source={require('@/assets/images/eita.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes Sociais</ThemedText>
      </ThemedView>

      <TouchableOpacity
        style={styles.estilobotao}
        activeOpacity={0.5}
        onPress={() => openLink('mailto:gaguizapoke@gmail.com')}
      >
        <Image
          source={require('../../assets/images/gmail.png')}
          style={styles.iconebotao}
        />
        <View style={styles.botaoseparador} />
        <Text style={styles.botaotexto}>E-Mail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.estilobotao}
        activeOpacity={0.5}
        onPress={() => openLink('https://wa.me/05518991298839')}
      >
        <Image
          source={require('../../assets/images/whatsapp.png')}
          style={styles.iconebotao}
        />
        <View style={styles.botaoseparador} />
        <Text style={styles.botaotexto}>Whatsapp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.estilobotao}
        activeOpacity={0.5}
        onPress={() => openLink('https://www.instagram.com/gabriel_par/')}
      >
        <Image
          source={require('../../assets/images/instagram.png')}
          style={styles.iconebotao}
        />
        <View style={styles.botaoseparador} />
        <Text style={styles.botaotexto}>Instagram</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.estilobotao}
        activeOpacity={0.5}
        onPress={() => openLink('https://www.linkedin.com/in/gabriel-henrique-lima-pardini-abb881314/')}
      >
        <Image
          source={require('../../assets/images/linkedin.png')}
          style={styles.iconebotao}
        />
        <View style={styles.botaoseparador} />
        <Text style={styles.botaotexto}>Linkedin</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.estilobotao}
        activeOpacity={0.5}
        onPress={() => openLink('https://br.pinterest.com/gabrielhenrique1info/')}
      >
        <Image
          source={require('../../assets/images/pinterest.png')}
          style={styles.iconebotao}
        />
        <View style={styles.botaoseparador} />
        <Text style={styles.botaotexto}>Pinterest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.estilobotao}
        activeOpacity={0.5}
        onPress={() => openLink('https://github.com/Naifuss')}
      >
        <Image
          source={require('../../assets/images/github.png')}
          style={styles.iconebotao}
        />
        <View style={styles.botaoseparador} />
        <Text style={styles.botaotexto}>Github</Text>
      </TouchableOpacity>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  estilobotao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#525574',
    borderWidth: 0.5,
    borderColor: 'fff',
    height: 50,
    borderRadius: 20,
    margin: 5,
  },
  iconebotao: {
    padding: 10,
    margin: 5,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
  },
  botaotexto: {
    color: '#fff',
    marginBottom: 1,
    marginLeft: 10,
  },
  botaoseparador: {
    backgroundColor: 'fff',
    width: 1,
    height: 40,
  },
});
