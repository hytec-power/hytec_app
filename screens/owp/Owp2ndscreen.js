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

export default function Owp2ndscreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Optimization Work Plan</Text>
        <View style={{ width: 28 }} /> {/* Spacer for symmetry */}
      </View>

      <View style={styles.imageSection}>
        {/* Side circular images */}
        <View style={styles.sideCirclesRow}>
          {/* Left image */}
          <View style={styles.sideCircle}>
            <Image
              source={require('../../assets/owp/left.png')}
              style={styles.sideImage}
            />
          </View>

          {/* Right image */}
          <View style={styles.sideCircle}>
            <Image
              source={require('../../assets/owp/right.png')}
              style={styles.sideImage}
            />
          </View>
        </View>

        {/* Center logo overlay */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/owp/middle.png')}
            style={styles.logoImage}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>About OWP</Text>
          <Text style={styles.description}>
            At Hytec, OWP stands for Optimization Work Plan. It’s a system designed to streamline and monitor employee performance, task management, and daily productivity. Through OWP, employees can view their assigned tasks, submit updates, and track their progress — all in one platform. For management, it provides a centralized way to evaluate workload distribution, ensure accountability, and boost overall efficiency in operations.{'\n\n'}
Hytec's OWP is a key component in aligning the company's goals with employee outputs, ensuring that every effort contributes to the company's growth and innovation.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Owp3rdscreen')}
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
    width: '110%',
    height: '115%',
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
