import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  FlatList,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ProfileContext } from './ProfileContext';

export default function OwpAttendance() {
  const navigation = useNavigation();
  const { profile } = useContext(ProfileContext);

  // State management
  const [records, setRecords] = useState([]);
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [attendanceType, setAttendanceType] = useState('Hytec Main Office');
  const [inOrOut, setInOrOut] = useState('');
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    return {
      date: now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      }),
      time: now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      })
    };
  };

  // Location simulation
  const getCurrentLocation = () => {
    return {
      latitude: (Math.random() * 180 - 90).toFixed(6),
      longitude: (Math.random() * 180 - 180).toFixed(6),
    };
  };

  // Add new attendance record
  const handleAddAttendance = () => {
    setIsLoading(true);
    
    const { date, time } = getCurrentDateTime();
    const location = getCurrentLocation();
    const locationString = `${location.latitude}, ${location.longitude}`;

    const newRecord = {
      id: Date.now().toString(),
      type: attendanceType,
      mode: inOrOut,
      date,
      time,
      locationIn: inOrOut === 'in' ? locationString : 'Not recorded',
      locationOut: inOrOut === 'out' ? locationString : 'Not recorded',
      status: 'Verified',
    };

    setTimeout(() => {
      setRecords(prevRecords => [newRecord, ...prevRecords]);
      setIsLoading(false);
      resetAddModal();
      
      Alert.alert(
        'Attendance Recorded',
        `Successfully recorded time ${inOrOut.toUpperCase()} at ${attendanceType}`,
        [{ text: 'OK' }]
      );
    }, 1000);
  };

  // Delete attendance record
  const handleDeleteRecord = () => {
    setIsLoading(true);
    setTimeout(() => {
      setRecords(prevRecords => prevRecords.filter(record => record.id !== selectedRecord.id));
      setIsLoading(false);
      setDeleteModalVisible(false);
      setDetailsModalVisible(false);
      
      Alert.alert(
        'Record Deleted',
        'Attendance record has been successfully deleted',
        [{ text: 'OK' }]
      );
    }, 800);
  };

  // Reset add modal state
  const resetAddModal = () => {
    setAddModalVisible(false);
    setStep(1);
    setAttendanceType('Hytec Main Office');
    setInOrOut('');
  };

  // Render each attendance record
  const renderRecord = ({ item }) => (
    <View style={styles.recordCard}>
      <Text style={styles.recordDate}>{item.date}</Text>
      <View style={styles.recordRow}>
        <Ionicons 
          name="ellipse" 
          size={14} 
          color={item.mode === 'in' ? 'green' : 'red'} 
          style={{ marginRight: 4 }} 
        />
        <Text style={styles.recordType}>{item.type.toUpperCase()}</Text>
        <Ionicons name="time" size={14} color="#b00020" style={{ marginHorizontal: 6 }} />
        <Text style={styles.recordTime}>{item.mode === 'in' ? 'Time in' : 'Time out'}: {item.time}</Text>
      </View>
      <View style={styles.recordRow}>
        <Ionicons name="location" size={14} color="#b00020" style={{ marginRight: 4 }} />
        <Text style={styles.recordLocation}>
          Location: {item.mode === 'in' ? item.locationIn : item.locationOut}
        </Text>
      </View>
      <View style={styles.recordActions}>
        <TouchableOpacity
          style={[styles.detailsButton, { flex: 1, marginRight: 8 }]}
          onPress={() => {
            setSelectedRecord(item);
            setDetailsModalVisible(true);
          }}
        >
          <Text style={styles.detailsButtonText}>View Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.detailsButton, { borderColor: '#ff4444' }]}
          onPress={() => {
            setSelectedRecord(item);
            setDeleteModalVisible(true);
          }}
        >
          <Text style={[styles.detailsButtonText, { color: '#ff4444' }]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const { date: currentDate, time: currentTime } = getCurrentDateTime();

  return (
    <SafeAreaView style={styles.container}>
      {/* Loading Overlay */}
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#640000" />
        </View>
      )}

      {/* Header */}
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Attendance</Text>
        </View>
        <View style={{ width: 28 }} />
      </View>

      {/* Attendance Card */}
      <View style={styles.attendanceCard}>
        <Text style={styles.attendanceName}>
          {profile.lastName}, {profile.firstName} {profile.middleName}
        </Text>
        <View style={styles.statsRow}>
          <View style={styles.statBox}><Text style={styles.statValue}>100</Text><Text style={styles.statLabel}>Monthly Score</Text></View>
          <View style={styles.statBox}><Text style={styles.statValue}>31</Text><Text style={styles.statLabel}>Present Days</Text></View>
          <View style={styles.statBox}><Text style={styles.statValue}>2</Text><Text style={styles.statLabel}>Absences</Text></View>
          <View style={styles.statBox}><Text style={styles.statValue}>7</Text><Text style={styles.statLabel}>Late Count</Text></View>
        </View>
        <Text style={styles.timestamp}>As of {currentDate} | {currentTime}</Text>
      </View>

      {/* Records Section */}
      <View style={styles.recordsContainer}>
        <View style={styles.recordsHeader}>
          <Text style={styles.recordsTitle}>Records</Text>
          <TouchableOpacity onPress={() => setAddModalVisible(true)}>
            <Text style={styles.addAttendance}>+ Add Attendance</Text>
          </TouchableOpacity>
        </View>

        {/* Records List */}
        <FlatList
          data={records}
          keyExtractor={(item) => item.id}
          renderItem={renderRecord}
          ListEmptyComponent={
            <Text style={styles.emptyListText}>No attendance records yet. Tap "+ Add Attendance" to log your first record.</Text>
          }
          contentContainerStyle={records.length === 0 ? { flex: 1, justifyContent: 'center' } : null}
        />
      </View>

      {/* Add Attendance Modal */}
      <Modal visible={addModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Log Attendance</Text>
            <Text style={styles.modalSubTitle}>Date: {currentDate}</Text>
            <Text style={styles.modalSubTitle}>Time: {currentTime}</Text>

            {step === 1 ? (
              <View style={styles.stepButtons}>
                <TouchableOpacity 
                  style={styles.inButton} 
                  onPress={() => { 
                    setInOrOut('in'); 
                    setStep(2); 
                  }}
                >
                  <Text style={styles.buttonText}>TIME IN</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.outButton} 
                  onPress={() => { 
                    setInOrOut('out'); 
                    setStep(2); 
                  }}
                >
                  <Text style={styles.buttonText}>TIME OUT</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <>
                <Text style={styles.modalLabel}>Attendance Type:</Text>
                {['Hytec Main Office', 'Hytec Training Hub', 'Work From Home'].map((type) => (
                  <TouchableOpacity 
                    key={type} 
                    onPress={() => setAttendanceType(type)} 
                    style={[
                      styles.optionBtn,
                      attendanceType === type && styles.selectedOption
                    ]}
                  >
                    <Text style={[
                      styles.optionText,
                      attendanceType === type && styles.selectedText
                    ]}>
                      {type}
                    </Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity 
                  style={styles.continueBtn} 
                  onPress={handleAddAttendance}
                  disabled={isLoading}
                >
                  <Text style={styles.buttonText}>
                    {isLoading ? 'Recording...' : 'CONFIRM'}
                  </Text>
                </TouchableOpacity>
              </>
            )}

            <TouchableOpacity onPress={resetAddModal} style={{ marginTop: 12 }}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* View Details Modal */}
      <Modal visible={detailsModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Attendance Details</Text>
            {selectedRecord && (
              <View style={styles.detailsContainer}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Date:</Text>
                  <Text style={styles.detailValue}>{selectedRecord.date}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Time:</Text>
                  <Text style={styles.detailValue}>{selectedRecord.time}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Type:</Text>
                  <Text style={styles.detailValue}>{selectedRecord.type}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Status:</Text>
                  <Text style={styles.detailValue}>{selectedRecord.status}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Location:</Text>
                  <Text style={styles.detailValue}>
                    {selectedRecord.mode === 'in' ? selectedRecord.locationIn : selectedRecord.locationOut}
                  </Text>
                </View>
              </View>
            )}
            <View style={styles.detailsActions}>
              <TouchableOpacity
                onPress={() => setDetailsModalVisible(false)}
                style={[styles.detailsActionButton, { backgroundColor: '#640000' }]}
              >
                <Text style={styles.buttonText}>CLOSE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal visible={deleteModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.confirmationModal}>
            <Text style={styles.confirmationTitle}>Delete Attendance Record</Text>
            <Text style={styles.confirmationMessage}>
              Are you sure you want to delete this attendance record? This action cannot be undone.
            </Text>
            <View style={styles.confirmationButtons}>
              <TouchableOpacity
                style={[styles.confirmationButton, { backgroundColor: '#f0f0f0' }]}
                onPress={() => setDeleteModalVisible(false)}
              >
                <Text style={[styles.confirmationButtonText, { color: '#333' }]}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.confirmationButton, { backgroundColor: '#ff4444' }]}
                onPress={handleDeleteRecord}
                disabled={isLoading}
              >
                <Text style={styles.confirmationButtonText}>
                  {isLoading ? 'DELETING...' : 'DELETE'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerBar: {
    height: 70, 
    backgroundColor: '#640000', 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingTop: 10,
  },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  attendanceCard: {
    backgroundColor: '#fff', 
    borderRadius: 20, 
    margin: 12, 
    padding: 20,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, 
    shadowRadius: 8,
  },
  attendanceName: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#111', 
    marginBottom: 12 
  },
  statsRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 14 
  },
  statBox: {
    flex: 1, 
    backgroundColor: '#f5f5f5', 
    borderRadius: 16, 
    marginHorizontal: 4,
    alignItems: 'center', 
    paddingVertical: 18,
  },
  statValue: { fontSize: 28, fontWeight: '600', color: '#222' },
  statLabel: { 
    fontSize: 13, 
    color: '#6d4c41', 
    marginTop: 4, 
    textAlign: 'center' 
  },
  timestamp: { 
    fontSize: 13, 
    color: '#6d4c41', 
    alignSelf: 'flex-end', 
    marginTop: 8 
  },
  recordsContainer: { 
    flex: 1, 
    marginHorizontal: 12, 
    marginBottom: 20 
  },
  recordsHeader: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 10, 
    marginBottom: 12,
  },
  recordsTitle: { fontSize: 20, fontWeight: 'bold' },
  addAttendance: { 
    fontSize: 16, 
    color: '#b00020', 
    fontWeight: 'bold' 
  },
  emptyListText: {
    textAlign: 'center', 
    color: '#aaa',
    paddingHorizontal: 40,
    fontSize: 16,
    lineHeight: 24
  },
  recordCard: {
    backgroundColor: '#fff', 
    borderRadius: 12, 
    padding: 16, 
    marginBottom: 12,
    borderWidth: 1, 
    borderColor: '#eee',
    elevation: 2,
  },
  recordDate: { 
    fontSize: 15, 
    fontWeight: 'bold', 
    color: '#222', 
    marginBottom: 8 
  },
  recordRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    flexWrap: 'wrap', 
    marginBottom: 6 
  },
  recordType: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#388e3c' 
  },
  recordTime: { 
    fontSize: 13, 
    color: '#b00020' 
  },
  recordLocation: { 
    fontSize: 13, 
    color: '#333' 
  },
  recordActions: {
    flexDirection: 'row',
    marginTop: 12,
  },
  detailsButton: {
    borderWidth: 1.5, 
    borderColor: '#b00020', 
    borderRadius: 20,
    paddingVertical: 8, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsButtonText: { 
    color: '#b00020', 
    fontWeight: 'bold', 
    fontSize: 14 
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalOverlay: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalCard: {
    width: '85%', 
    backgroundColor: '#fff', 
    padding: 24, 
    borderRadius: 16,
    elevation: 10, 
    shadowColor: '#000', 
    shadowOpacity: 0.25,
  },
  confirmationModal: {
    width: '85%', 
    backgroundColor: '#fff', 
    padding: 24, 
    borderRadius: 16,
  },
  modalTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 12, 
    textAlign: 'center',
    color: '#333'
  },
  confirmationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#333'
  },
  confirmationMessage: {
    fontSize: 15,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 22
  },
  modalSubTitle: { 
    fontSize: 14, 
    color: '#666', 
    marginBottom: 4, 
    textAlign: 'center' 
  },
  modalLabel: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    marginTop: 16, 
    marginBottom: 8,
    color: '#333'
  },
  stepButtons: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginTop: 20,
    marginBottom: 10
  },
  inButton: {
    backgroundColor: '#25A72E', 
    paddingVertical: 14, 
    paddingHorizontal: 24,
    borderRadius: 10,
    minWidth: 120
  },
  outButton: {
    backgroundColor: '#d32f2f', 
    paddingVertical: 14, 
    paddingHorizontal: 24,
    borderRadius: 10,
    minWidth: 120
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16, 
    textAlign: 'center' 
  },
  optionBtn: {
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 10,
    padding: 12, 
    marginVertical: 4,
  },
  optionText: { 
    textAlign: 'center', 
    fontSize: 14,
    color: '#333'
  },
  selectedOption: { 
    backgroundColor: '#f5f5f5', 
    borderColor: '#640000' 
  },
  selectedText: { 
    fontWeight: 'bold', 
    color: '#640000' 
  },
  continueBtn: {
    marginTop: 16, 
    backgroundColor: '#25A72E', 
    paddingVertical: 12,
    borderRadius: 10,
  },
  cancelText: { 
    color: '#b00020', 
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 15
  },
  detailsContainer: {
    marginVertical: 12
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingVertical: 6
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#555',
    fontSize: 14
  },
  detailValue: {
    color: '#333',
    fontSize: 14
  },
  detailsActions: {
    marginTop: 16
  },
  detailsActionButton: {
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%'
  },
  confirmationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16
  },
  confirmationButton: {
    paddingVertical: 12,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 6
  },
  confirmationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});