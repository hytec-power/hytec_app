import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
// Locale configuration
LocaleConfig.locales['custom'] = {
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['S', 'M', 'T', 'W', 'TH', 'F', 'SAT'],
  today: 'Today'
};
LocaleConfig.defaultLocale = 'custom';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const trainingDates = ['2025-07-22', '2025-07-23', '2025-07-24'];
  const navigation = useNavigation(); // <-- get navigation object
  const today = new Date();
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = LocaleConfig.locales['custom'].monthNamesShort[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const currentFormattedDate = formatDate(today);
  const todayString = today.toISOString().split('T')[0];

  const markedDates = {};
  trainingDates.forEach(date => {
    markedDates[date] = {
      customStyles: {
        container: {
          alignItems: 'center',
          justifyContent: 'center',
          width: 34,
          height: 34,
          borderWidth: 2,
          borderColor: '#1DAC92',
          borderRadius: 17,
        },
        text: {
          color: '#000',
          fontWeight: 'bold',
        },
      }
    };
  });

  if (selectedDate) {
    markedDates[selectedDate] = {
      selected: true,
      selectedColor: '#640000',
      disableTouchEvent: true,
    };
  }

  if (!markedDates[todayString]) {
    markedDates[todayString] = {
      customStyles: {
        container: {
          backgroundColor: '#640000',
          borderRadius: 17,
          width: 34,
          height: 34,
          justifyContent: 'center',
          alignItems: 'center',
        },
        text: {
          color: '#fff',
          fontWeight: 'bold',
        },
      }
    };
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Training Schedule</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.calendarBox}>
          <View style={styles.infoContainer}>
            <View style={styles.summaryBox}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.greetingText}>Hello,</Text>
                <Text style={styles.nameText}>Eric</Text>
              </View>
              <View style={styles.verticalLine} />
              <View style={{ alignItems: 'flex-start' }}>
                <Text style={styles.trainingText}>You've got</Text>
                <Text style={styles.trainingCount}>3 trainings</Text>
                <Text style={styles.trainingText}>this week</Text>
              </View>
            </View>
          </View>

          <Calendar
            onDayPress={(day) => setSelectedDate(day.dateString)}
            markedDates={markedDates}
            markingType={'custom'}
            theme={{
              selectedDayBackgroundColor: '#640000',
              arrowColor: '#640000',
              textDayFontSize: 20,
              textMonthFontSize: 22,
              textMonthFontWeight: 'Bold',
              textDayHeaderFontSize: 16,
            }}
            renderHeader={() => (
              <View style={{ alignItems: 'center' }}>
                <View style={[styles.dateBox, { marginTop: 15 }]}>
                  <Text style={styles.dateText}>{currentFormattedDate}</Text>
                </View>
                <View style={styles.horizontalLine} />
              </View>
            )}
          />
        </View>

        <View style={{ paddingHorizontal: 16, paddingBottom: 24 }}>
          <Text style={{ marginTop: 10, fontSize: 25, fontWeight: 'bold', marginBottom: 4 }}>Your trainings</Text>
          <Text style={{ fontSize: 16, color: '#888', marginBottom: 12 }}>you can do it hooman! Do your best today!</Text>

          {/* Training Card 1 */}
          <TouchableOpacity onPress={() => console.log('Pressed Communication Skills')}>
            <LinearGradient colors={['#D32F2F', '#4E2A2A']} style={styles.trainingCard}>
              <View style={styles.cardContent}>
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardTitle}>Communication Skills 101</Text>
                  <Text style={styles.cardSubtitle}>train your skills</Text>
                  <View style={styles.cardRow}>
                    <Ionicons name="time-outline" size={16} color="#fff" />
                    <Text style={styles.cardText}> 2:00 PM - 3:00 PM</Text>
                  </View>
                  <View style={styles.cardRow}>
                    <Ionicons name="business-outline" size={16} color="#fff" />
                    <Text style={styles.cardText}> X company</Text>
                  </View>
                  <View style={styles.cardRow}>
                    <Ionicons name="laptop-outline" size={16} color="#fff" />
                    <Text style={styles.cardText}> Zoom meeting</Text>
                  </View>
                </View>
                <Image source={require('../assets/images/hytec_logo.png')} style={styles.cardLogo} />
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Training Card 2 */}
          <TouchableOpacity onPress={() => console.log('Pressed Mechatronics NC II')}>
            <LinearGradient colors={['#D32F2F', '#4E2A2A']} style={styles.trainingCard}>
              <View style={styles.cardContent}>
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardTitle}>Mechatronics NC II</Text>
                  <Text style={styles.cardSubtitle}>all about mechatronics</Text>
                  <View style={styles.cardRow}>
                    <Ionicons name="time-outline" size={16} color="#fff" />
                    <Text style={styles.cardText}> 4:00 PM - 7:00 PM</Text>
                  </View>
                  <View style={styles.cardRow}>
                    <Ionicons name="business-outline" size={16} color="#fff" />
                    <Text style={styles.cardText}> Y company</Text>
                  </View>
                  <View style={styles.cardRow}>
                    <Ionicons name="location-outline" size={16} color="#fff" />
                    <Text style={styles.cardText}> TESDA Training Center, Taguig</Text>
                  </View>
                </View>
                <Image source={require('../assets/images/hytec_logo.png')} style={styles.cardLogo} />
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Progress */}
          <View style={styles.progressBox}>
            <Text style={styles.progressText}>your progress this week is</Text>
            <Text style={styles.progressValue}>50% complete</Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: '50%' }]} />
            </View>
            <Text style={styles.progressNote}>⏱ 16 hours</Text>
          </View>

          {/* New Training Cards (Buttons) */}
          <View style={{ marginTop: 24 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 4, marginLeft: 4 }}>Upcoming trainings</Text>
            <Text style={{ color: '#888', marginBottom: 14, marginLeft: 4 }}>This is for your future</Text>

            <TouchableOpacity onPress={() => console.log('Pressed Leadership Skills')}>
              <LinearGradient
                colors={['#18aa99', '#107464']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.trainingPicCard}
              >
                <View>
                  <Text style={styles.picCardTitle}>Leadership Skills</Text>
                  <Text style={styles.picCardSubtitle}>be a leader</Text>
                  <Text style={styles.picCardDate}>July 19, 2025</Text>
                  <View style={styles.picCardRow}>
                    <Ionicons name="time-outline" size={16} color="#fff" />
                    <Text style={styles.picCardText}>8:00 AM - 12:00 PM</Text>
                  </View>
                  <View style={styles.picCardRow}>
                    <Ionicons name="business-outline" size={16} color="#fff" />
                    <Text style={styles.picCardText}>Z company</Text>
                  </View>
                  <View style={styles.picCardRow}>
                    <Ionicons name="laptop-outline" size={16} color="#fff" />
                    <Text style={styles.picCardText}>Company Webinar</Text>
                  </View>
                </View>
                <Image source={require('../assets/images/hytec_logo.png')} style={styles.picCardLogo} />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Pressed Start-Up 101')}>
              <LinearGradient
                colors={['#18aa99', '#107464']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.trainingPicCard}
              >
                <View>
                  <Text style={styles.picCardTitle}>Start-Up 101</Text>
                  <Text style={styles.picCardSubtitle}>learn about trends</Text>
                  <Text style={styles.picCardDate}>July 19, 2025</Text>
                  <View style={styles.picCardRow}>
                    <Ionicons name="time-outline" size={16} color="#fff" />
                    <Text style={styles.picCardText}>2:00 PM - 7:00 PM</Text>
                  </View>
                  <View style={styles.picCardRow}>
                    <Ionicons name="business-outline" size={16} color="#fff" />
                    <Text style={styles.picCardText}>DICT</Text>
                  </View>
                  <View style={styles.picCardRow}>
                    <Ionicons name="location-outline" size={16} color="#fff" />
                    <Text style={styles.picCardText}>DICT Valenzuela</Text>
                  </View>
                </View>
                <Image source={require('../assets/images/hytec_logo.png')} style={styles.picCardLogo} />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Pressed Computer Network')}>
              <LinearGradient
                colors={['#18aa99', '#107464']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.trainingPicCard}
              >
                <View>
                  <Text style={styles.picCardTitle}>Computer Network</Text>
                  <Text style={styles.picCardSubtitle}>all about networks</Text>
                  <Text style={styles.picCardDate}>July 22, 2025</Text>
                  <View style={styles.picCardRow}>
                    <Ionicons name="time-outline" size={16} color="#fff" />
                    <Text style={styles.picCardText}>9:00 AM - 11:00 AM</Text>
                  </View>
                  <View style={styles.picCardRow}>
                    <Ionicons name="business-outline" size={16} color="#fff" />
                    <Text style={styles.picCardText}>Netbean</Text>
                  </View>
                  <View style={styles.picCardRow}>
                    <Ionicons name="laptop-outline" size={16} color="#fff" />
                    <Text style={styles.picCardText}>Zoom Meeting</Text>
                  </View>
                </View>
                <Image source={require('../assets/images/hytec_logo.png')} style={styles.picCardLogo} />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.picViewMoreBtn} onPress={() => console.log('View more pressed')}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>View more</Text>
            </TouchableOpacity>
          </View>

          {/* Completed Trainings Section with gradient */}
          <View style={{ marginTop: 18 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 0 }}>Completed</Text>

            <TouchableOpacity onPress={() => console.log('See completed trainings pressed')}>
              <Text style={{ color: '#6B648B', fontSize: 18, marginBottom: 15 }}>
                See your completed trainings
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginBottom: 13 }} onPress={() => console.log('Pressed Computer Architecture')}>
              <LinearGradient
                colors={['#A8A8A8', '#3C3C3C']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={[styles.completedCard, { paddingVertical: 15, paddingHorizontal: 18 }]}
              >
                <View>
                  <Text style={styles.completedCardTitle}>Computer Architecture</Text>
                  <Text style={styles.completedCardSub}>TESDA</Text>
                </View>
                <Ionicons name="eye-outline" size={26} color="#d04e4e" style={{ marginLeft: 'auto' }} />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginBottom: 13 }} onPress={() => console.log('Pressed Welding NC II')}>
              <LinearGradient
                colors={['#A8A8A8', '#3C3C3C']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={[styles.completedCard, { paddingVertical: 15, paddingHorizontal: 18 }]}
              >
                <View>
                  <Text style={styles.completedCardTitle}>Welding NC II</Text>
                  <Text style={styles.completedCardSub}>TESDA</Text>
                </View>
                <Ionicons name="eye-outline" size={26} color="#d04e4e" style={{ marginLeft: 'auto' }} />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Pressed Business Training')}>
              <LinearGradient
                colors={['#A8A8A8', '#3C3C3C']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={[styles.completedCard, { paddingVertical: 15, paddingHorizontal: 18 }]}
              >
                <View>
                  <Text style={styles.completedCardTitle}>Business Training</Text>
                  <Text style={styles.completedCardSub}>IBM</Text>
                </View>
                <Ionicons name="eye-outline" size={26} color="#d04e4e" style={{ marginLeft: 'auto' }} />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.completedViewMoreBtn} onPress={() => console.log('View more completed pressed')}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>View more</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#640000',
    padding: 16,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  horizontalLine: {
    height: 2,
    width: 250,
    backgroundColor: '#ccc',
    marginLeft: 10,
  },
  calendarBox: {
    margin: 16,
    borderRadius: 13,
    padding: 10,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  summaryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  nameText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    right: 18,
  },
  verticalLine: {
    width: 3,
    height: 85,
    backgroundColor: '#640000',
    marginHorizontal: 14,
  },
  trainingText: {
    fontSize: 21,
    color: '#000',
    fontWeight: '500',
  },
  trainingCount: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#800000',
  },
  dateBox: {
    alignSelf: 'center',
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    top: -10,
  },
  dateText: {
    color: '#888',
    fontSize: 14,
  },
  trainingCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#fff',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTextContainer: {
    flex: 1,
    paddingRight: 12,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: '#fff',
    marginBottom: 8,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 10,
  },
  cardLogo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  progressBox: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1, 
    borderColor: '#ccc',     
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
  },
  progressValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#b71c1c',
    marginBottom: 5,
  },
  progressBarContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    height: 10,
    overflow: 'hidden',
  },
  progressBar: {
    width: '50%',
    height: '100%',
    backgroundColor: '#b71c1c',
    borderRadius: 10,
  },
  progressNote: {
    fontSize: 10,
    color: '#999',
    marginTop: 5,
    textAlign: 'right',
  },
  trainingPicCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#222',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 7,
  },
  picCardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  picCardSubtitle: {
    color: '#c8f6ee',
    marginBottom: 3,
  },
  picCardDate: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 6,
    marginTop: 2,
    fontWeight: 'bold',
  },
  picCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    marginTop: 2,
  },
  picCardText: {
    color: '#fff',
    fontSize: 11,
    marginLeft: 8,
  },
  picCardLogo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  picViewMoreBtn: {
    marginTop: 8,
    alignSelf: 'center',
    backgroundColor: '#068066',
    borderRadius: 8,
    paddingHorizontal: 45,
    paddingVertical: 8,
    elevation: 2,
  },
  completedCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    // backgroundColor removed because gradient will show
    marginBottom: 13,
    // padding defined inside LinearGradient now
    elevation: 1,
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
  },
  completedCardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  completedCardSub: {
    color: '#fff',
    fontSize: 13,
    marginTop: 1,
  },
  completedViewMoreBtn: {
    backgroundColor: '#a39fa6',
    alignSelf: 'stretch',
    borderRadius: 8,
    marginTop: 7,
    paddingVertical: 10,
    alignItems: 'center',
  },
});

