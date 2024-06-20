import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/eita.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-Vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Esse é um protótipo de linktree</ThemedText>
        <ThemedText style={styles.justifiedText}>
          Linktree é uma ferramenta popular que permite aos usuários criar uma página personalizada contendo múltiplos links. 
          Esta página é especialmente útil para perfis de redes sociais, onde geralmente é permitido adicionar apenas um único link 
          na biografia.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 14,
    marginBottom: 8,
  },
  headerImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  reactLogo: {
    height: 250,
    width: 300,
    bottom: 0,
    left: 40,
    position: 'absolute',
  },
  justifiedText: {
    textAlign: 'justify',
    fontSize: 18,
  },
});
