import React, { useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  Modal,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ProfileContext } from './ProfileContext';

const PRODUCTIVITY_DATA = [10, 80, 60, 90, 70, 100, 90];
const PRODUCTIVITY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const TOP_ACTIVITIES = [
  { label: 'Acquire new contact person (qty)', value: 100 },
  { label: 'After-sales training', value: 75 },
  { label: 'Collection to Client', value: 50 },
  { label: 'Convention/Exhibits/Training', value: 30 },
  { label: 'Conduct National/TP Presentation', value: 15 },
];

const screenWidth = Dimensions.get('window').width - 32;

export default function HomeScreen() {
  const navigation = useNavigation();
  const { profile } = useContext(ProfileContext);
  // Real-time date/time state
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Activities and modals state
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [activities, setActivities] = useState([
    {
      id: '1',
      title: 'Coding',
      duration: 100,
      date: '07/02/25',
      image: require('../../assets/images/coding.png'),
    },
    {
      id: '2',
      title: 'Convention/Exhibit',
      duration: 53,
      date: '07/02/25',
      image: require('../../assets/images/event.png'),
    },
  ]);
  const [newActivity, setNewActivity] = useState({
    title: '',
    duration: '',
    date: new Date().toLocaleDateString('en-US'),
    image: null,
  });
  const [editingActivity, setEditingActivity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Day');
  const timePeriods = ['Day', 'Week', 'Month', 'Custom'];

  // Selected date for activities (default to today)
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Calendar modal visibility
  const [calendarVisible, setCalendarVisible] = useState(false);

  // Helpers for calendar
  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Restrict calendar navigation between May (4) and August (7)
  const MIN_MONTH = 4; // May
  const MAX_MONTH = 7; // August

  const goToPrevMonth = () => {
    const prevMonthDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1);
    if (prevMonthDate.getMonth() >= MIN_MONTH) {
      setSelectedDate(prevMonthDate);
    }
  };

  const goToNextMonth = () => {
    const nextMonthDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1);
    if (nextMonthDate.getMonth() <= MAX_MONTH) {
      setSelectedDate(nextMonthDate);
    }
  };

  const handleDateSelect = (day) => {
    const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    setSelectedDate(newDate);
    setCalendarVisible(false);
  };

  // Calculate productivity percentage based on activities
  const productivityPercent = Math.min(
    Math.floor(
      (activities.reduce((acc, curr) => acc + curr.duration, 0) / 480) * 100
    ),
    100
  );

  // Calculate progress values
  const dailyProgress = activities.reduce((acc, curr) => acc + curr.duration, 0);
  const weekTotal = dailyProgress * 7;
  const monthTotal = dailyProgress * 31;

  // Normalize productivity data for graph height (0 to 1)
  const maxY = Math.max(...PRODUCTIVITY_DATA);
  const minY = Math.min(...PRODUCTIVITY_DATA);
  const normData = PRODUCTIVITY_DATA.map((v) => (v - minY) / (maxY - minY || 1));

  const getActivitiesTitle = () => {
    switch (selectedPeriod) {
      case 'Week':
        return 'Weekly Activities';
      case 'Month':
        return 'Monthly Activities';
      case 'Custom':
        return 'Custom Activities';
      default:
        return 'Daily Activities';
    }
  };

  const handleAddActivity = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newId = (activities.length + 1).toString();
      setActivities([
        ...activities,
        {
          ...newActivity,
          id: newId,
          duration: parseInt(newActivity.duration) || 0,
          image: newActivity.image || require('../../assets/images/coding.png'),
        },
      ]);
      setNewActivity({
        title: '',
        duration: '',
        date: new Date().toLocaleDateString('en-US'),
        image: null,
      });
      setModalVisible(false);
      setIsLoading(false);
      Alert.alert('Success', 'Activity added successfully!');
    }, 1000);
  };

  const handleEdit = (activity) => {
    setEditingActivity(activity);
    setEditModalVisible(true);
  };

  const handleUpdateActivity = () => {
    setIsLoading(true);
    setTimeout(() => {
      setActivities(
        activities.map((activity) =>
          activity.id === editingActivity.id ? editingActivity : activity
        )
      );
      setEditModalVisible(false);
      setIsLoading(false);
      Alert.alert('Success', 'Activity updated successfully!');
    }, 1000);
  };

 const handleDelete = (activity) => {
    Alert.alert(
      'Delete Activity',
      `This will delete your activity from catalog\nAre you sure?`,
      [
        { 
          text: 'Cancel', 
          style: 'cancel' 
        },
        {
          text: 'Delete',
          onPress: () => {
            setIsLoading(true);
            // Actual deletion API call would go here
            setTimeout(() => {
              setActivities(activities.filter((a) => a.id !== activity.id));
              setIsLoading(false);
              Alert.alert(
                'Deleted activity',
                'Activity is successfully deleted from your log',
                [
                  { 
                    text: 'Back', 
                    onPress: () => console.log('Back pressed') 
                  }
                ]
              );
            }, 800);
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  const formatDuration = (minutes) => `${minutes} min`;

  // Format current date/time strings
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#CA0000" />
        </View>
      )}

      {/* Header */}
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Optimization Work Plan</Text>
        </View>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Card */}
        <TouchableOpacity
          style={styles.profileCard}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Owprofile')}
        >
          <View style={styles.profileRow}>
            <View style={styles.profileImagePlaceholder} />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>
              Hi, <Text style={{ color: '#CA0000', fontWeight: 'bold' }}>
                {profile.firstName || 'Employee'}
              </Text>
            </Text>
            <Text style={styles.profileEmail}>{profile.email || 'email@example.com'}</Text>
            <Text style={styles.profileId}>{profile.employeeId || 'ID not set'}</Text>
            <Text style={styles.profileDept}>{profile.division || 'Division not set'}</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Real-time Date and Time */}
        <Text style={styles.dateText}>
          As of {formattedDate} | {formattedTime}
        </Text>

        {/* Attendance Section */}
        <View style={styles.attendanceCard}>
          <View style={styles.attendanceHeader}>
            <Text style={styles.attendanceTitle}>Attendance</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Owpattendance')}>
              <Text style={styles.viewRecords}>View Records</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.attendanceStatsRow}>
            <View style={styles.attendanceStatBox}>
              <Text style={styles.attendanceStatValue}>100</Text>
              <Text style={styles.attendanceStatLabel}>Monthly Score</Text>
            </View>
            <View style={styles.attendanceStatBox}>
              <Text style={styles.attendanceStatValue}>31</Text>
              <Text style={styles.attendanceStatLabel}>Present Days</Text>
            </View>
            <View style={styles.attendanceStatBox}>
              <Text style={styles.attendanceStatValue}>2</Text>
              <Text style={styles.attendanceStatLabel}>Absences</Text>
            </View>
            <View style={styles.attendanceStatBox}>
              <Text style={[styles.attendanceStatValue, styles.lateCountText]}>7</Text>
              <Text style={[styles.attendanceStatLabel, styles.lateCountText]}>Late Count</Text>
            </View>
          </View>
        </View>

        {/* Progress Sections */}
        <View style={styles.progressCard}>
          <Text style={styles.progressLabel}>Daily Progress</Text>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${Math.min((dailyProgress / 480) * 100, 100)}%` },
              ]}
            />
          </View>
          <Text style={styles.progressValue}>{dailyProgress}/480 minutes</Text>
        </View>

        <View style={styles.progressCard}>
          <Text style={styles.progressLabel}>Week Total</Text>
          <View style={styles.progressBarBackground}>
            <View
              style={[styles.progressBarFill, { width: `${Math.min((weekTotal / 2880) * 100, 100)}%` }]}
            />
          </View>
          <Text style={styles.progressValue}>{weekTotal}/2880 minutes</Text>
        </View>

        <View style={styles.progressCard}>
          <Text style={styles.progressLabel}>Month Total</Text>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${Math.min((monthTotal / 9600) * 100, 100)}%` },
              ]}
            />
          </View>
          <Text style={styles.progressValue}>{monthTotal}/9600 minutes</Text>
        </View>

        {/* Productivity Graph */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Productivity Graph</Text>
          <View style={styles.fakeChart}>
            <View style={styles.fakeChartArea}>
              {normData.map((y, i) => {
                if (i === normData.length - 1) return null;
                const y1 = (1 - y) * 80;
                const y2 = (1 - normData[i + 1]) * 80;
                return (
                  <View
                    key={i}
                    style={{
                      position: 'absolute',
                      left: `${(i / (normData.length - 1)) * 100}%`,
                      width: `${100 / (normData.length - 1)}%`,
                      bottom: 0,
                      height: Math.max(y1, y2),
                      backgroundColor: 'rgba(202,0,0,0.18)',
                    }}
                  />
                );
              })}
            </View>
            <View style={StyleSheet.absoluteFill}>
              {normData.map((y, i) => {
                if (i === normData.length - 1) return null;
                const x1 = (i / (normData.length - 1)) * (screenWidth - 32);
                const x2 = ((i + 1) / (normData.length - 1)) * (screenWidth - 32);
                const y1 = (1 - y) * 80;
                const y2 = (1 - normData[i + 1]) * 80;
                return (
                  <View
                    key={i}
                    style={{
                      position: 'absolute',
                      left: x1,
                      top: y1,
                      width: Math.max(2, x2 - x1),
                      height: Math.max(2, Math.abs(y2 - y1)),
                      borderTopWidth: 2,
                      borderTopColor: '#CA0000',
                      transform: [
                        { rotateZ: `${Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI)}deg` },
                      ],
                    }}
                  />
                );
              })}
              {normData.map((y, i) => (
                <View
                  key={i}
                  style={{
                    position: 'absolute',
                    left: (i / (normData.length - 1)) * (screenWidth - 32) - 4,
                    top: (1 - y) * 80 - 4,
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: '#CA0000',
                    borderWidth: 1,
                    borderColor: '#fff',
                  }}
                />
              ))}
            </View>
            <View style={styles.fakeChartLabels}>
              {PRODUCTIVITY_LABELS.map((label, i) => (
                <Text key={i} style={styles.fakeChartLabel}>
                  {label}
                </Text>
              ))}
            </View>
          </View>
        </View>

        {/* Top Activities */}
        <View style={styles.card}>
          <View style={styles.topActivitiesHeader}>
            <Text style={styles.sectionTitle}>Top Activities</Text>
            <View style={styles.activityLegend}>
              <View style={styles.activityColorBox} />
              <Text style={styles.activityLegendText}>Activity count</Text>
            </View>
          </View>

          {TOP_ACTIVITIES.map((item, idx) => (
            <View key={idx} style={styles.topActivityRow}>
              <Text style={styles.topActivityLabel} numberOfLines={1}>
                {item.label}
              </Text>
              <View style={styles.topActivityBarBackground}>
                <View style={[styles.topActivityBar, { width: `${item.value}%` }]} />
              </View>
            </View>
          ))}
        </View>

        {/* Activities Section */}
        <View style={styles.card}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
            <Text style={styles.searchPlaceholder}>Search activities...</Text>
          </View>

          {/* Time Period Selector */}
          <View style={styles.timePeriodContainer}>
            {timePeriods.map((period) => (
              <TouchableOpacity
                key={period}
                style={[
                  styles.timePeriodButton,
                  selectedPeriod === period && styles.activeTimePeriodButton,
                ]}
                onPress={() => setSelectedPeriod(period)}
              >
                <View style={styles.timePeriodButtonInner}>
                  <Text
                    style={[
                      styles.timePeriodText,
                      selectedPeriod === period && styles.activeTimePeriodText,
                    ]}
                  >
                    {period}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 8,
            }}
          >
            <Text style={styles.searchActivitiesDate}>
              {selectedDate.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </Text>
            {selectedPeriod === 'Custom' && (
              <TouchableOpacity onPress={() => setCalendarVisible(true)}>
                <Ionicons
                  name="calendar"
                  size={18}
                  color="#CA0000"
                  style={{ marginLeft: 6 }}
                />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.circleContainer}>
            <View style={styles.circleBase} />
            <View
              style={[
                styles.progressArc,
                {
                  transform: [{ rotate: `${-90 + productivityPercent * 3.6}deg` }],
                  opacity: productivityPercent > 0 ? 1 : 0,
                },
              ]}
            />
            <View style={styles.percentageContainer}>
              <Text style={styles.percentageNumber}>{productivityPercent}</Text>
              <Text style={styles.percentageSign}>%</Text>
            </View>
          </View>

          <Text style={styles.recordsText}>{activities.length} records found</Text>
          <Text style={styles.dailyActivitiesTitle}>{getActivitiesTitle()}</Text>

          <TouchableOpacity
            style={styles.addActivityButton}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="add" size={16} color="#fff" />
            <Text style={styles.addActivityButtonText}>Add Activity</Text>
          </TouchableOpacity>

          {activities.map((activity) => (
            <View key={activity.id} style={styles.activityItemRow}>
              <Image source={activity.image} style={styles.activityImage} />

              <View style={styles.activityDetails}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <View style={styles.activityMetaRow}>
                  <Ionicons name="time" size={14} color="#b00020" />
                  <Text style={styles.activityMetaText}>
                    {formatDuration(activity.duration)}
                  </Text>
                  <Ionicons
                    name="calendar"
                    size={14}
                    color="#b00020"
                    style={{ marginLeft: 10 }}
                  />
                  <Text style={styles.activityMetaText}>{activity.date}</Text>
                </View>
              </View>

              <View style={styles.activityActions}>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => handleEdit(activity)}
                >
                  <Ionicons name="pencil" size={16} color="#555" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => handleDelete(activity)}
                >
                  <Ionicons name="trash" size={16} color="#555" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Custom Calendar Modal */}
      <Modal
        visible={calendarVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCalendarVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.calendarModal}>
            <View style={styles.calendarHeader}>
              <TouchableOpacity onPress={goToPrevMonth}>
                <Ionicons name="chevron-back" size={24} color="#CA0000" />
              </TouchableOpacity>

              <Text style={styles.calendarTitle}>
                {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
              </Text>

              <TouchableOpacity onPress={goToNextMonth}>
                <Ionicons name="chevron-forward" size={24} color="#CA0000" />
              </TouchableOpacity>
            </View>

            <View style={styles.calendarGrid}>
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                <Text key={day} style={styles.calendarDayHeader}>
                  {day}
                </Text>
              ))}

              {/* Empty slots for first day offset */}
              {Array(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay())
                .fill(null)
                .map((_, i) => (
                  <View key={`empty-${i}`} style={styles.calendarDayEmpty} />
                ))}

              {/* Days */}
              {Array(daysInMonth(selectedDate.getMonth(), selectedDate.getFullYear()))
                .fill(null)
                .map((_, i) => {
                  const day = i + 1;
                  const isSelected = day === selectedDate.getDate();
                  return (
                    <TouchableOpacity
                      key={day}
                      style={[styles.calendarDay, isSelected && styles.calendarDaySelected]}
                      onPress={() => handleDateSelect(day)}
                    >
                      <Text
                        style={[styles.calendarDayText, isSelected && styles.calendarDaySelectedText]}
                      >
                        {day}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </View>

            <TouchableOpacity
              style={styles.calendarCloseButton}
              onPress={() => setCalendarVisible(false)}
            >
              <Text style={styles.calendarCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Add Activity Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.activityModalCard}>
            <Text style={styles.activityModalTitle}>Submit Activity</Text>

            <TouchableOpacity style={styles.fileDropArea}>
              <Ionicons name="cloud-upload-outline" size={32} color="#CA0000" />
              <Text style={styles.fileDropText}>Drag and drop a file here</Text>
              <Text style={styles.fileDropLink}>Select a file</Text>
              <Text style={styles.fileDropHint}>jpeg jpg png gif heic - max: 20MB</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>or</Text>

            <TextInput
              placeholder="Paste Image link or Activity Title"
              value={newActivity.title}
              onChangeText={(text) =>
                setNewActivity({ ...newActivity, title: text })
              }
              style={styles.activityModalInput}
            />

            <TextInput
              placeholder="Duration in minutes"
              value={newActivity.duration}
              onChangeText={(text) =>
                setNewActivity({ ...newActivity, duration: text })
              }
              style={styles.activityModalInput}
              keyboardType="numeric"
            />

            <TextInput
              placeholder="Date"
              value={newActivity.date}
              onChangeText={(text) =>
                setNewActivity({ ...newActivity, date: text })
              }
              style={styles.activityModalInput}
            />

            <View style={styles.modalButtonRow}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setNewActivity({
                    title: '',
                    duration: '',
                    date: new Date().toLocaleDateString('en-US'),
                    image: null,
                  });
                }}
                style={styles.cancelBtn}
              >
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.saveBtn,
                  (!newActivity.title || !newActivity.duration) && {
                    backgroundColor: '#eee',
                  },
                ]}
                disabled={!newActivity.title || !newActivity.duration}
                onPress={handleAddActivity}
              >
                <Text
                  style={[
                    styles.saveBtnText,
                    (!newActivity.title || !newActivity.duration) && {
                      color: '#aaa',
                    },
                  ]}
                >
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Edit Activity Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.editModalCard}>
            <Text style={styles.editModalTitle}>Edit Activity</Text>

            <TouchableOpacity style={styles.fileDropArea}>
              <Ionicons name="cloud-upload-outline" size={32} color="#CA0000" />
              <Text style={styles.fileDropText}>Drag and drop a file here</Text>
              <Text style={styles.fileDropLink}>Select a file</Text>
              <Text style={styles.fileDropHint}>jpeg jpg png gif heic - max: 20MB</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>or</Text>

            <TextInput
              placeholder="Paste Image link or Activity Title"
              value={editingActivity?.title || ''}
              onChangeText={(text) =>
                setEditingActivity({ ...editingActivity, title: text })
              }
              style={styles.activityModalInput}
            />

            <TextInput
              placeholder="Duration in minutes"
              value={editingActivity?.duration?.toString() || ''}
              onChangeText={(text) =>
                setEditingActivity({
                  ...editingActivity,
                  duration: parseInt(text) || 0,
                })
              }
              style={styles.activityModalInput}
              keyboardType="numeric"
            />

            <TextInput
              placeholder="Date"
              value={editingActivity?.date || ''}
              onChangeText={(text) =>
                setEditingActivity({ ...editingActivity, date: text })
              }
              style={styles.activityModalInput}
            />

            <View style={styles.modalButtonRow}>
              <TouchableOpacity
                onPress={() => setEditModalVisible(false)}
                style={styles.cancelBtn}
              >
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.saveBtn,
                  (!editingActivity?.title || !editingActivity?.duration) && {
                    backgroundColor: '#eee',
                  },
                ]}
                disabled={!editingActivity?.title || !editingActivity?.duration}
                onPress={handleUpdateActivity}
              >
                <Text
                  style={[
                    styles.saveBtnText,
                    (!editingActivity?.title || !editingActivity?.duration) && {
                      color: '#aaa',
                    },
                  ]}
                >
                  Save
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
  // All your styles from previous code, including calendar modal styles
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
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
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
  profileDept: {
    fontSize: 12,
    color: '#444',
    marginTop: 2,
  },
  dateText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#00000',
    marginBottom: 8,
    textAlign: 'center',
  },
  attendanceCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  attendanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  attendanceTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewRecords: {
    color: '#CA0000',
    fontSize: 13,
    fontWeight: 'bold',
  },
  attendanceStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  attendanceStatValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  attendanceStatLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 1,
  },
  progressCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  progressLabel: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 6,
  },
  progressBarBackground: {
    width: '100%',
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressBarFill: {
    height: 8,
    backgroundColor: '#CA0000',
    borderRadius: 4,
  },
  progressValue: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  fakeChart: {
    width: '100%',
    height: 100,
    marginBottom: 8,
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'flex-end',
  },
  fakeChartArea: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    zIndex: 1,
  },
  fakeChartLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 80,
    paddingHorizontal: 2,
  },
  fakeChartLabel: {
    fontSize: 12,
    color: '#888',
    width: 32,
    textAlign: 'center',
  },
  topActivitiesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  activityLegend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityColorBox: {
    width: 17.95,
    height: 4,
    backgroundColor: '#CA272C',
    marginRight: 6,
  },
  activityLegendText: {
    fontSize: 12,
    color: '#444',
  },
  topActivityRow: {
    marginBottom: 12,
  },
  topActivityLabel: {
    fontSize: 13,
    color: '#222',
    marginBottom: 3,
  },
  topActivityBarBackground: {
    width: '100%',
    height: 16,
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  topActivityBar: {
    height: 16,
    backgroundColor: '#CA0000',
    borderRadius: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchIcon: {
    marginRight: 8,
    color: '#C73232',
  },
  searchPlaceholder: {
    color: '#888',
    fontSize: 14,
  },
  timePeriodContainer: {
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
    padding: 6,
    borderRadius: 8,
    marginBottom: 16,
  },
  timePeriodButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 1,
  },
  activeTimePeriodButton: {
    backgroundColor: '#fff',
  },
  timePeriodText: {
    fontSize: 14,
    color: '#888',
    fontWeight: 'bold',
    paddingHorizontal: 4,
  },
  activeTimePeriodText: {
    color: '#CA272C',
  },
  searchActivitiesDate: {
    fontSize: 14,
    color: '#222',
  },
  circleContainer: {
    width: 120,
    height: 120,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
    alignSelf: 'center',
  },
  circleBase: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
    borderWidth: 8,
    borderColor: '#EEEEEE',
    position: 'absolute',
  },
  progressArc: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
    borderWidth: 8,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#CA0000',
    borderTopColor: '#CA0000',
    position: 'absolute',
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  percentageNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#CA0000',
  },
  percentageSign: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CA0000',
    marginLeft: 2,
  },
  recordsText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 16,
  },
  dailyActivitiesTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
  },
  addActivityButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CA0000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 16,
    alignSelf: 'flex-end',
  },
  addActivityButtonText: {
    color: '#fff',
    fontSize: 13,
    marginLeft: 6,
    fontWeight: 'bold',
  },
  activityItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 1,
  },
  activityImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  activityDetails: {
    flex: 1,
  },
  activityMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  activityMetaText: {
    fontSize: 12,
    color: '#444',
    marginLeft: 4,
  },
  activityActions: {
    flexDirection: 'row',
    gap: 6,
  },
  iconButton: {
    backgroundColor: '#eee',
    padding: 6,
    borderRadius: 6,
    marginLeft: 4,
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
  attendanceStatBox: {
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    flex: 1,
  },
  lateCountText: {
    color: '#992E2E',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarModal: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  calendarDayHeader: {
    width: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#666',
  },
  calendarDayEmpty: {
    width: 32,
    height: 32,
    margin: 2,
  },
  calendarDay: {
    width: 32,
    height: 32,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  calendarDaySelected: {
    backgroundColor: '#CA0000',
  },
  calendarDayText: {
    fontSize: 14,
    color: '#333',
  },
  calendarDaySelectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  calendarCloseButton: {
    marginTop: 16,
    paddingVertical: 10,
    backgroundColor: '#CA0000',
    borderRadius: 8,
    alignItems: 'center',
  },
  calendarCloseButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
   // Add Activity Modal styles
  activityModalCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  activityModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  fileDropArea: {
    borderWidth: 1,
    borderColor: '#CA0000',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  fileDropText: {
    color: '#666',
    marginBottom: 5,
  },
  fileDropLink: {
    color: '#CA0000',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fileDropHint: {
    color: '#999',
    fontSize: 12,
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 10,
  },
  activityModalInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  modalButtonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },
  cancelBtnText: {
    color: '#666',
  },
  saveBtn: {
    backgroundColor: '#CA0000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  saveBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Edit Activity Modal styles (mostly same as Add Activity)
  editModalCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  editModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});
