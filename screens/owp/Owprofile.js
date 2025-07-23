import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  Ionicons,
  FontAwesome5,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ProfileContext } from './ProfileContext';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const { profile } = useContext(ProfileContext);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Owpeditprof')}>
            <View style={styles.editBox}>
              <Ionicons name="pencil" size={16} color="#CA0000" />
            </View>
          </TouchableOpacity>

          <View style={styles.profileRow}>
            <View style={styles.profileImagePlaceholder} />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>
                <Text style={{ color: '#000000', fontWeight: 'bold' }}>
                  {profile.firstName} {profile.middleName} {profile.lastName}
                </Text>
              </Text>
              <Text style={[styles.profileEmail, { textDecorationLine: 'underline' }]}>{profile.email}</Text>
              <Text style={styles.profileId}>Employee ID: 2211963</Text>
            </View>
          </View>
        </View>

        {/* Details Cards */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Employee Details</Text>
          <View style={styles.row}>
            <Ionicons name="male-female" size={18} color="#666" />
            <Text style={styles.rowText}>Gender: <Text style={styles.bold}>{profile.gender}</Text></Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="calendar" size={18} color="#666" />
            <Text style={styles.rowText}>Birthday: <Text style={styles.bold}>{profile.birthday}</Text></Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="hourglass" size={18} color="#666" />
            <Text style={styles.rowText}>Age: <Text style={styles.bold}>21 years old</Text></Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contact Details</Text>
          <View style={styles.row}>
            <Ionicons name="call-outline" size={18} color="#666" />
            <Text style={styles.rowText}>Contact: <Text style={styles.bold}>{profile.contact}</Text></Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="mail-outline" size={18} color="#666" />
            <Text style={styles.rowText}>Personal Email: <Text style={styles.bold}>{profile.email}</Text></Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="location-outline" size={18} color="#666" />
            <Text style={styles.rowText}>Address: <Text style={styles.bold}>{profile.address}</Text></Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Job Details</Text>
          <View style={styles.row}>
            <Ionicons name="briefcase-outline" size={18} color="#666" />
            <Text style={styles.rowText}>
              Position: <Text style={styles.bold}>Field Application Engineer, secondary testers, Field Application Engineer, Head, Employee, Full Stack Developer, Frontend Developer, Backend Developer</Text>
            </Text>
          </View>
          <View style={styles.row}>
            <FontAwesome5 name="file-contract" size={16} color="#666" />
            <Text style={styles.rowText}>Employment type: <Text style={styles.bold}>Project-based</Text></Text>
          </View>
          <View style={styles.row}>
            <Entypo name="clock" size={18} color="#666" />
            <Text style={styles.rowText}>Tenure: <Text style={styles.bold}>3 months and 2 days</Text></Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="cash-outline" size={18} color="#666" />
            <Text style={styles.rowText}>Salary: <Text style={styles.bold}>monthly</Text></Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="calendar-outline" size={18} color="#666" />
            <Text style={styles.rowText}>Date started: <Text style={styles.bold}>April 1, 2025</Text></Text>
          </View>
          <View style={styles.row}>
            <MaterialIcons name="apartment" size={18} color="#666" />
            <Text style={styles.rowText}>Division: <Text style={styles.bold}>Industrial Division, Testing, Life Long Learning Division, Academe, Support, IT Software Development</Text></Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Other Details</Text>
          <View style={styles.row}>
            <MaterialCommunityIcons name="card-account-details" size={18} color="#666" />
            <Text style={styles.rowText}>HDMF ID: <Text style={styles.bold}>--</Text></Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name="credit-card-scan" size={18} color="#666" />
            <Text style={styles.rowText}>SSS ID: <Text style={styles.bold}>--</Text></Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name="card-account-details-star-outline" size={18} color="#666" />
            <Text style={styles.rowText}>TIN ID: <Text style={styles.bold}>--</Text></Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Leaves</Text>
          <View style={styles.row}>
            <MaterialCommunityIcons name="beach" size={20} color="#666" />
            <Text style={styles.rowText}>Vacation Leave</Text>
          </View>
          <Text style={styles.leaveStats}>Balance  -    Accepted  -    Rejected</Text>
          <View style={styles.row}>
            <MaterialCommunityIcons name="hospital-box" size={20} color="#666" />
            <Text style={styles.rowText}>Sick Leave</Text>
          </View>
          <Text style={styles.leaveStats}>Balance  -    Accepted  -    Rejected</Text>
          <Text style={styles.cardTitle}>Attendance</Text>
          <Text style={styles.leaveStats}>Early out     Overtime</Text>
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
  headerBar: {
    width: '100%',
    height: 70,
    backgroundColor: '#640000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  leaveStats: {
    textAlign: 'center',
    fontSize: 13,
    color: '#555',
    marginBottom: 8,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 80,
  },
  profileCard: {
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
  },
  editButton: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  editBox: {
    width: 20,
    height: 20,
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CA0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 13,
    color: '#888',
  },
  profileId: {
    fontSize: 13,
    color: '#888',
  },
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#333',
    marginTop: 2,
  },
  card: {
    backgroundColor: '#fefefe',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  rowText: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    color: '#444',
  },
  bold: {
    fontWeight: 'bold',
    color: '#222',
  },
});
