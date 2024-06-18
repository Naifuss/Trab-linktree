import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

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
      <ThemedText>E-Mail</ThemedText>
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
});
