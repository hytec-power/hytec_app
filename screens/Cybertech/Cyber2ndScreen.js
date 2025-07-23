import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Cyber2ndScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cybertech</Text>
        <View style={{ width: 28 }} /> {/* Spacer for symmetry */}
      </View>

      <View style={styles.imageSection}>
        {/* Side circular images */}
        <View style={styles.sideCirclesRow}>
          {/* Left image */}
          <View style={styles.sideCircle}>
            <Image
              source={require('../../assets/images/cyberleft.jpg')}
              style={styles.sideImage}
            />
          </View>

          {/* Right image */}
          <View style={styles.sideCircle}>
            <Image
              source={require('../../assets/images/cyberright.jpg')}
              style={styles.sideImage}
            />
          </View>
        </View>

        {/* Center logo overlay */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/cybertechlogo.jpg')}
            style={styles.logoImage}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>About Cybertech</Text>
          <Text style={styles.description}>
            HPI CyberTech Institute Inc., the global arm of Hytec Power, Inc., delivers competency-based learning systems and cyber-technologies for senior high schools, technical-vocational schools, industry training centers, and higher education institutions. It offers industry-approved assessments from beginner to expert levels, aligned with workplace standards. The institute focuses on bridging the gap between academia and industry by integrating responsive learning technologies, comprehensive competency assessments, and practical skills training to produce job-ready graduates equipped for industrial and business settings.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Cyber3rdScreen')}
          >
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  imageSection: {
    marginTop: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideCirclesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '130%',
    paddingHorizontal: 5,
  },
  sideCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },
  sideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoContainer: {
    position: 'absolute',
    top: 1,
    width: 290,
    height: 290,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: '#7a0000',
    backgroundColor: '#fff',
    marginTop: -40,
    justifyContent: 'center',
    zIndex: 10,
    overflow: 'hidden',
  },
  logoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 125,
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#444',
    textAlign: 'justify',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#BC1010',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    paddingHorizontal: 140,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
