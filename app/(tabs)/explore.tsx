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
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#525574' }}
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
        <Text style={styles.botaotexto}>E-Mail</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.estilobotao} activeOpacity={0.5}>
        <Image source={require('../../assets/images/whatsapp.png')}
        style={styles.iconebotao}
        />
          <View style={styles.botaoseparador}/>
        <Text style={styles.botaotexto}>Whatsapp</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.estilobotao} activeOpacity={0.5}>
        <Image source={require('../../assets/images/instagram.png')}
        style={styles.iconebotao}
        />
        <View style={styles.botaoseparador}/>
        <Text style={styles.botaotexto}>Instagram</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.estilobotao} activeOpacity={0.5}>
        <Image source={require('../../assets/images/linkedin.png')}
        style={styles.iconebotao}
        />
        <View style={styles.botaoseparador}/>
        <Text style={styles.botaotexto}>Linkedin</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.estilobotao} activeOpacity={0.5}>
        <Image source={require('../../assets/images/twitter.png')}
        style={styles.iconebotao}
        />
        <View style={styles.botaoseparador}/>
        <Text style={styles.botaotexto}>Twitter/X</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.estilobotao} activeOpacity={0.5}>
        <Image source={require('../../assets/images/pinterest.png')}
        style={styles.iconebotao}
        />
        <View style={styles.botaoseparador}/>
        <Text style={styles.botaotexto}>Pinterest</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.estilobotao} activeOpacity={0.5}>
        <Image source={require('../../assets/images/github.png')}
        style={styles.iconebotao}
        />
        <View style={styles.botaoseparador}/>
        <Text style={styles.botaotexto}>Github</Text>
      </TouchableOpacity>

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
    backgroundColor: '#525574',
    borderWidth: 0.5,
    borderColor: 'fff',
    height: 50,
    borderRadius: 5,
    margin: 5,
  },
  iconebotao:{
    padding: 10,
    margin: 5,
    height: 30,
    width: 30,
    resizeMode:'stretch',
  },
  botaotexto:{
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,  
  },
  botaoseparador:{
    backgroundColor:'fff',
    width: 1,
    height: 40,
  },
});
