import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

export default function EhytecMainscreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>E-Hytec</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Cyber Tech Video */}
      <Video
        source={require('../../assets/videos/pepper.mp4')}
        style={styles.buildingVideo}
        resizeMode="contain"
        marginTop={-180}
        isLooping
        isMuted={false}
        useNativeControls={false} // set to true if you want playback controls
      />

      {/* Welcome Text & Buttons */}
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to E-Hytec</Text>
        <Text style={styles.subtitle}>
          Discover E-Hytec see it, and feel{'\n'}it in your own hands
        </Text>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('Ehytec2ndscreen')}
        >
          <Text style={styles.nextButtonText}>NEXT</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#640000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buildingVideo: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    backgroundColor: '#000',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#5a5a5a',
    textAlign: 'center',
    marginVertical: 8,
  },
  nextButton: {
    backgroundColor: '#BC1010',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 140,
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipText: {
    marginTop: 10,
    fontSize: 14,
    color: '#B30000',
    fontWeight: '600',
  },
});
 