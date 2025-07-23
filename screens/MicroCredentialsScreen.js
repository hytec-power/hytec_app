import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, StatusBar, SafeAreaView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { featureData, certData, benefitData, learningPathData } from '../data/microCredentialData';

const MicroCredentialsScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7a0000" />
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Micro-Credentials</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.hero}>
          <View style={{ flex: 1 }}>
            <Text style={styles.heroTitle}>Learn and Gain Skills through <Text style={styles.highlight}>MCC</Text></Text>
            <Text style={styles.subtitle}>Want to gain knowledge and skills?{'\n'}Register Now</Text>
            <TouchableOpacity style={styles.registerBtn} onPress={handleOpenModal}>
              <Text style={styles.sharedBtnText}>Register</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../assets/mcc1.png')} style={styles.heroImage} />
        </View>

        <View style={styles.sectionRow}>
          <Image source={require('../assets/mcc2.png')} style={styles.infoImage} />
          <View style={styles.textBlock}>
            <Text style={styles.sectionTitle}>What is Micro-Credentials or MCC?</Text>
            <Text style={styles.description}>
              Microcredentials (MCC) are short, specialized certifications that provide learners with specific skills or competencies. Unlike traditional education, these certifications focus on targeted learning areas and can be obtained online through structured courses that include assessments.
            </Text>
            <TouchableOpacity style={styles.learnMoreBtn} onPress={handleOpenModal}>
              <Text style={styles.sharedBtnText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textOnlySection}>
          <Text style={styles.sectionHeader}>Manage your Micro-Credentials</Text>
          <Text style={styles.subHeader}>Why Micro-Credential Matter?</Text>
        </View>

        <View style={styles.gridRow}>
          {featureData.map((item, index) => (
            <View key={index} style={styles.featureCard}>
              <Image source={item.icon} style={styles.featureIcon} />
              <Text style={styles.featureTitle}>{item.title}</Text>
              <Text style={styles.featureDesc}>{item.desc}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionHeader}>Industry-Ready Certifications</Text>
        <Text style={styles.subHeader}>The following are the official certification training courses currently offered by Hytec across key technology sectors.</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.certScroll}>
          {certData.map((item, index) => (
            <View key={index} style={styles.certCardContainer}>
              <View style={{ position: 'relative', width: '100%', alignItems: 'center' }}>
                <Image source={item.image} style={styles.certCardImage} />
                <View style={styles.certCardContentBox}>
                  <Text style={styles.certTitle}>{item.title}</Text>
                  <Text style={styles.certSubtitle} numberOfLines={1} ellipsizeMode="tail">{item.subtitle}</Text>
                  <TouchableOpacity onPress={handleOpenModal}>
                    <Text style={styles.readMore}>Read more →</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionHeader}>Key Benefits</Text>
        <Text style={styles.subHeader}>
          The following are the Key Benefits of the official certification training courses currently offered by Hytec across key technology sectors.
        </Text>

        <View style={styles.benefitsGrid}>
          {benefitData.map((item, index) => (
            <View key={index} style={styles.benefitRow}>
              <View style={styles.iconBox}>
                <Image source={item.icon} style={styles.benefitIcon} />
              </View>
              <View style={styles.textBox}>
                <Text style={styles.benefitText}>{item.text}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.sectionHeader}>Micro-Credentials Learning Pathways</Text>
        <View style={styles.gridRow}>
          {learningPathData.map((item, index) => (
            <View key={index} style={styles.featureCard}>
              <Text style={styles.featureTitle}>{item.title}</Text>
              <Text style={styles.featureDesc}>{item.desc}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal transparent animationType="fade" visible={isModalVisible} onRequestClose={handleCloseModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeBtn} onPress={handleCloseModal}>
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Launching Soon!</Text>
            <Text style={styles.modalSubtitle}>
              Big Things Are Coming to Our MCC! Stay tuned for exciting micro-credential offerings!
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MicroCredentialsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 40 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#7a0000', paddingHorizontal: 20, paddingVertical: 16 },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  hero: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  heroTitle: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  highlight: { color: '#c40000' },
  subtitle: { color: '#666', marginTop: 8 },
  heroImage: { width: 120, height: 120, resizeMode: 'contain' },
  sectionRow: { flexDirection: 'row', marginBottom: 30 },
  infoImage: { width: 100, height: 100, resizeMode: 'contain', marginRight: 10 },
  textBlock: { flex: 1 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  description: { color: '#666', fontSize: 13 },
  textOnlySection: { marginBottom: 20, alignItems: 'center' },
  sectionHeader: { fontSize: 18, fontWeight: 'bold', color: '#222', marginBottom: 5, textAlign: 'center' },
  subHeader: { fontSize: 10, fontWeight: '600', color: '#555', textAlign: 'center' },
  gridRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  featureCard: { backgroundColor: '#f9f9f9', borderRadius: 10, padding: 15, width: '32%', alignItems: 'center' },
  featureIcon: { width: 40, height: 40, marginBottom: 10 },
  featureTitle: { fontWeight: 'bold', color: '#333', fontSize: 14, marginBottom: 5, textAlign: 'center' },
  featureDesc: { color: '#666', fontSize: 12, textAlign: 'center' },
  certCardContainer: { width: 200, marginHorizontal: 1, alignItems: 'center', paddingBottom: 80, paddingTop: 20, position: 'relative' },
  certCardImage: { width: '100%', height: 150, borderRadius: 10 },
  certCardContentBox: { position: 'absolute', bottom: -50, backgroundColor: '#fff', width: '90%', borderRadius: 10, padding: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 4, alignItems: 'center', justifyContent: 'space-between', height: 110 },
  certSubtitle: { fontSize: 12, color: '#555', textAlign: 'center', width: '100%' },
  certTitle: { fontWeight: 'bold', fontSize: 13, color: '#333', textAlign: 'center', width: '100%' },
  readMore: { marginTop: 4, color: '#c40000', fontWeight: 'bold', fontSize: 12, textAlign: 'center' },
  benefitsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 30, marginTop: 15 },
  benefitRow: { width: '48%', flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  iconBox: { width: 24, alignItems: 'center', justifyContent: 'center', marginRight: 8 },
  benefitIcon: { width: 20, height: 20, resizeMode: 'contain' },
  textBox: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 25 },
  benefitText: { fontSize: 13, color: '#444', textAlign: 'left' },
  registerBtn: { backgroundColor: '#BC1010', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 6, marginTop: 12, alignSelf: 'flex-start' },
  learnMoreBtn: { backgroundColor: '#CA272C', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 6, marginTop: 10, alignSelf: 'flex-start' },
  sharedBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },

  // Modal Styles
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 12, width: '80%', alignItems: 'right', position: 'relative' },
  modalTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  modalSubtitle: { fontSize: 14, color: '#555', textAlign: 'left' },
  closeBtn: { position: 'absolute', top: 10, right: 10 },
  closeText: { fontSize: 24, color: '#aaa' },
});
