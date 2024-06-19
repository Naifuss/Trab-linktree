import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform,TouchableOpacity,View, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes Sociais</ThemedText>
      </ThemedView>

      <TouchableOpacity style={styles.estilobotao} activeOpacity={0.5}>
        <Image source={require('../../assets/images/gmail.png')}
        style={styles.iconebotao}
        />
        <View style={styles.botaoseparador}/>
        <Text style={styles.textobotao}>E-Mail</Text>
      </TouchableOpacity>
      <ThemedText>Whatsapp</ThemedText>
      <ThemedText>Instagram</ThemedText>
      <ThemedText>Linkedin</ThemedText>
      <ThemedText>Twitter/x</ThemedText>
      <ThemedText>Facebook</ThemedText>
      <ThemedText>Tiktok</ThemedText>
      <ThemedText>Pinterest</ThemedText>
      <ThemedText>Github</ThemedText>
      
    </ParallaxScrollView>
  );
}
const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 250,
    width: 300,
    bottom: 0,
    left: 40,
    position: 'absolute',
  },
  estilobotao:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: 'fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  iconebotao:{
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode:'stretch',
  },
  textobotao:{
    color:'fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  botaoseparador:{
    backgroundColor:'fff',
    width: 1,
    height: 40,
  },
});
