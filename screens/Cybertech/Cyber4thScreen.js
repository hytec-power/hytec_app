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
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Cyber4thScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#640000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cybertech</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 120, marginTop: 50 }}>
        {/* Cover and Logo */}
        <View style={styles.coverContainer}>
          <Image
            source={require('../../assets/images/cyber_cover.jpg')}
            style={styles.coverImage}
          />

          {/* Overlapping rectangle */}
          <View style={styles.overlayRectangle} />

          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/cybertechlogo.jpg')}
              style={styles.logoImage}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Institute Name and Follow Button */}
        <View style={styles.instituteInfo}>
          <Text style={styles.instituteName}>
            HPI CyberTech{'\n'}Institute Incorporated
          </Text>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>follow</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>999k</Text>
            <Text style={styles.statLabel}>followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>199</Text>
            <Text style={styles.statLabel}>products</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100</Text>
            <Text style={styles.statLabel}>partners</Text>
          </View>
        </View>

        {/* Contact Details Section */}
        <View style={styles.contactCard}>
          <Text style={styles.cardTitle}>Contact Details</Text>
          <Text style={styles.contactText}>
            Email: qsiofficial@hpicybertech.institute
          </Text>
          <Text style={styles.contactText}>
            Phone: (+63) 917-531-8284
          </Text>
          <Text style={styles.contactText}>
            Address: #37 Mamerto St., T.S. Cruzville Zabarte Road, Novaliches, Kaligayahan, Quezon City, Second District, NCR, 1124
          </Text>

          <Text style={[styles.cardTitle, { marginTop: 15 }]}>
            Social Media Platforms
          </Text>

          <View style={styles.socialRow}>
            <FontAwesome5 name="facebook" size={20} color="#1877F2" />
            <Text style={styles.socialText}>@CyberTechInstituteIncorporated</Text>
          </View>

          <View style={styles.socialRow}>
            <FontAwesome5 name="youtube" size={20} color="#FF0000" />
            <Text style={styles.socialText}>@CyberTechInstituteIncorporated</Text>
          </View>

          <View style={styles.socialRow}>
            <FontAwesome5 name="tiktok" size={20} color="#000" />
            <Text style={styles.socialText}>@cybertech1994</Text>
          </View>

          <View style={styles.socialRow}>
            <FontAwesome5 name="linkedin" size={20} color="#0A66C2" />
            <Text style={styles.socialText}>@CyberTechInstituteIncorporated</Text>
          </View>
        </View>
      </ScrollView>

      {/* NEXT Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NextScreenOrFunction')}
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
  coverContainer: {
    alignItems: 'center',
  },
  coverImage: {
    width: width - 60,
    height: 160,
    borderRadius: 20,
    marginTop: 30,
  },
  overlayRectangle: {
    position: 'absolute',
    bottom: 39,
    width: width - 60,
    height: 45,
    backgroundColor: '#640000',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 1,
  },
  logoContainer: {
    marginTop: -120,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: '#BC1010',
    elevation: 4,
    zIndex: 2,
  },
  logoImage: {
    width: 150,
    height: 150,
    borderRadius: 60,
  },
  instituteInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: -10,
  },
  instituteName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  followButton: {
    backgroundColor: '#640000',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 8,
  },
  followButtonText: {
    color: '#fff',
    fontSize: 14,
    textTransform: 'lowercase',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 12,
    color: '#555',
  },
  contactCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: '#000',
  },
  contactText: {
    fontSize: 13,
    color: '#444',
    marginBottom: 4,
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  socialText: {
    marginLeft: 10,
    fontSize: 13,
    color: '#333',
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
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
