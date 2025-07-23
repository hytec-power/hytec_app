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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cybertech</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView
        style={styles.scrollWrapper}
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Mission Section */}
        <View style={[styles.section, styles.rowSection]}>
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Mission</Text>
            <Text style={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus nec leo at lobortis. Integer vel quam tempor, aliquam sem lobortis, cursus nibh. In malesuada mi vel scelerisque suscipit. Donec luctus, neque sed aliquam ullamcorper, leo sapien tincidunt erat, vel condimentum nunc ipsum sit amet massa.
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
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Vision</Text>
            <Text style={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus nec leo at lobortis. Integer vel quam tempor, aliquam sem lobortis, cursus nibh. In malesuada mi vel scelerisque suscipit. Donec luctus, neque sed aliquam ullamcorper, leo sapien tincidunt erat, vel condimentum nunc ipsum sit amet massa.
            </Text>
          </View>
        </View>

        {/* Core Values Section */}
        <View style={styles.coreValues}>
          <Text style={styles.coreTitle}>Core Values</Text>
          <Text style={styles.coreText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus nec leo at
          </Text>
        </View>
      </ScrollView>

      {/* NEXT Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cyber3rdScreen')}
      >
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 100,
    backgroundColor: '#640000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollWrapper: {
    marginTop: 100,
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 40,
    backgroundColor: "#fff",
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
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#000",
    marginBottom: 6,
    marginTop: 8,
  },
  sectionText: {
    fontSize: 13,
    color: "#222",
    marginBottom: 12,
  },
  imageContainer: {
    width: 155,
    height: 115,
    marginLeft: 18,
    marginRight: 18,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  redBackgroundMission: {
    position: 'absolute',
    top: 40,
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
    top: -10,
    right: 0,
    width: 242.48,
    height: 199.95,
    backgroundColor: '#bc1010',
    borderRadius: 6,
    transform: [{ rotate: '10deg' }],
    zIndex: 1,
  },
  missionImage: {
    width: 242.48,
    height: 199.95,
    borderRadius: 6,
    position: 'absolute',
    top: 30,
    left: 10,
    transform: [{ rotate: '10deg' }],
    zIndex: 2,
  },
  visionImage: {
    width: 242.48,
    height: 199.95,
    borderRadius: 6,
    position: 'absolute',
    top: -30,
    right: 10,
    transform: [{ rotate: '10deg' }],
    zIndex: 2,
  },
  coreValues: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 70,
  },
  coreTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#000",
    marginBottom: 2,
  },
  coreText: {
    fontSize: 13,
    color: "#222",
    textAlign: "center",
    lineHeight: 18,
  },
  button: {
    backgroundColor: '#BC1010',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 120,
    left: 30,
    right: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
