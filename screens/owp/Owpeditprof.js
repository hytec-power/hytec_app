//Owpeditprof
import React, { useContext, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ProfileContext } from './ProfileContext'; // ✅ adjust path if needed

export default function Owpeditprof() {
  const navigation = useNavigation();
  const { profile, setProfile } = useContext(ProfileContext);

  const [firstName, setFirstName] = useState(profile.firstName);
  const [middleName, setMiddleName] = useState(profile.middleName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [birthday, setBirthday] = useState(profile.birthday);
  const [gender, setGender] = useState(profile.gender);
  const [contact, setContact] = useState(profile.contact);
  const [address, setAddress] = useState(profile.address);
  const [email, setEmail] = useState(profile.email);

  const handleUpdate = () => {
    setProfile({
      firstName,
      middleName,
      lastName,
      birthday,
      gender,
      contact,
      address,
      email,
    });
    navigation.goBack(); // return to profile
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Update Profile</Text>
        </View>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Employee Details</Text>

          <Text style={styles.inputLabel}>First Name</Text>
          <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />

          <Text style={styles.inputLabel}>Middle Name</Text>
          <TextInput style={styles.input} value={middleName} onChangeText={setMiddleName} />

          <Text style={styles.inputLabel}>Last Name</Text>
          <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />

          <Text style={styles.inputLabel}>Birthday</Text>
          <TextInput style={styles.input} value={birthday} onChangeText={setBirthday} />

          <Text style={styles.inputLabel}>Gender</Text>
          <TextInput style={styles.input} value={gender} onChangeText={setGender} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contact Details</Text>

          <Text style={styles.inputLabel}>Contact Number</Text>
          <TextInput style={styles.input} value={contact} onChangeText={setContact} />

          <Text style={styles.inputLabel}>Address</Text>
          <TextInput style={styles.input} value={address} onChangeText={setAddress} />

          <Text style={styles.inputLabel}>Personal Email</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
            <Text style={styles.updateText}>Update</Text>
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
    paddingBottom: 100,
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
  profileImageContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ddd',
  },
  imageNoteText: {
    fontSize: 12,
    color: '#888',
  },
  changePhotoButton: {
    borderWidth: 1,
    borderColor: '#CA0000',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  changePhotoText: {
    color: '#CA0000',
    fontSize: 13,
  },
  inputLabel: {
    fontSize: 13,
    marginBottom: 4,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cancelText: {
    color: '#00000',
    fontWeight: 'bold',
  },
  updateButton: {
    borderWidth: 1,
    borderColor: '#CA0000',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    },
  updateText: {
    color: '#CA0000',
    fontWeight: 'bold',
  },
});
