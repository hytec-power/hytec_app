import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Cyber2ndScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#640000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cybertech</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollWrapper}
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Mission Section */}
        <View style={[styles.section, styles.rowSection]}>
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Mission</Text>
            <Text style={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus nec leo at lobortis. Integer vel quam tempor, aliquam sem lobortis, cursus nibh. In malesuada mi vel scelerisque suscipit.
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.redBackgroundMission} />
            <Image
              source={require('../../assets/images/3rdscreenleft.jpg')}
              style={styles.missionImage}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Vision Section */}
        <View style={[styles.section, styles.rowSection]}>
          <View style={styles.imageContainer}>
            <View style={styles.redBackgroundVision} />
            <Image
              source={require('../../assets/images/3rdscreenright.jpg')}
              style={styles.visionImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.visionTextContainer}>
            <Text style={styles.sectionTitle}>Vision</Text>
            <Text style={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus nec leo at lobortis. Integer vel quam tempor, aliquam sem lobortis, cursus nibh. In malesuada mi vel scelerisque suscipit.
            </Text>
          </View>
        </View>

        {/* Core Values Section */}
        <View style={styles.coreValues}>
          <Text style={styles.coreTitle}>Core Values</Text>
          <Text style={styles.coreText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus nec leo at.
          </Text>
        </View>
      </ScrollView>

      {/* Fixed NEXT Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cyber4thScreen')}
      >
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
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
  scrollWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 20,
  },
  rowSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 4,
    justifyContent: 'center',
  },
  visionTextContainer: {
    flex: 1,
    paddingHorizontal: 4,
    justifyContent: 'center',
    marginTop: 30, // Adjust as needed to shift Vision content higher
    marginLeft: 15,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
    marginTop: 8,
  },
  sectionText: {
    fontSize: 13,
    color: '#222',
    marginBottom: 50,
  },
  imageContainer: {
    width: 155,
    height: 115,
    marginLeft: 18,
    marginRight: 18,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  redBackgroundMission: {
    position: 'absolute',
    top: 20,
    left: -10,
    width: 242.45,
    height: 199.95,
    backgroundColor: '#bc1010',
    borderRadius: 6,
    transform: [{ rotate: '10deg' }],
    zIndex: 1,
  },
  redBackgroundVision: {
    position: 'absolute',
    top: 20,
    right: -5,
    width: 242.48,
    height: 199.95,
    backgroundColor: '#bc1010',
    borderRadius: 7,
    transform: [{ rotate: '10deg' }],
    zIndex: 1,
  },
  missionImage: {
    width: 242.48,
    height: 199.95,
    borderRadius: 6,
    position: 'absolute',
    top: 10,
    left: 10,
    transform: [{ rotate: '10deg' }],
    zIndex: 2,
  },
  visionImage: {
    width: 242.48,
    height: 199.95,
    borderRadius: 6,
    position: 'absolute',
    top: 0,
    right: 10,
    transform: [{ rotate: '10deg' }],
    zIndex: 2,
  },
  coreValues: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  coreTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  coreText: {
    fontSize: 13,
    color: '#222',
    textAlign: 'center',
    lineHeight: 18,
  },
  button: {
    backgroundColor: '#BC1010',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
