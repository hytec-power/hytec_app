import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MicroCredentialsScreen from './MicroCredentialsScreen';

const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const itemWidth = screenWidth / numColumns - 24;

const categories = ['All', 'Latest', 'Top Sales', 'Price'];

const features = [
  { id: '1', title: 'E-Hytec', icon: require('../assets/seeallcategories/e-hytec.png'), screen: 'EhytecMainscreen' },
  { id: '2', title: 'OWP', icon: require('../assets/seeallcategories/owp.png'), screen: 'OwpMainscreen'  },
  { id: '3', title: 'Cyber Tech', icon: require('../assets/seeallcategories/cyber-tech.png'), screen: 'CyberMainScreen' },
  { id: '4', title: 'Industrial Division', icon: require('../assets/seeallcategories/industrial.png'), comingSoon: true },
  { id: '5', title: 'Lifelong Learning Division', icon: require('../assets/seeallcategories/lifelong.png'), comingSoon: true },
  { id: '6', title: 'eSDP', icon: require('../assets/seeallcategories/esdp.png'), comingSoon: true },
  { id: '7', title: 'MOA/MOU', icon: require('../assets/seeallcategories/moa.png'), comingSoon: true },
  { id: '8', title: 'Training Schedule', icon: require('../assets/seeallcategories/training.png'), screen: 'Train' },
  { id: '9', title: 'E-Portfolio', icon: require('../assets/seeallcategories/eportfolio.png'), comingSoon: true },
  { id: '10', title: 'E-Classified Ads', icon: require('../assets/seeallcategories/eclassified.png'), comingSoon: true },
  { id: '11', title: 'E-Business Ads', icon: require('../assets/seeallcategories/ebusiness.png'), comingSoon: true },
  { id: '12', title: 'MCC', icon: require('../assets/seeallcategories/mcc.png'),screen:'MicroCredentialsScreen'},
  { id: '13', title: 'Visitors Log', icon: require('../assets/seeallcategories/visitors.png'), comingSoon: true },
];


const SeeAllCategories = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

 const renderItem = ({ item }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => {
      if (item.comingSoon) {
        return;
      }
      if (item.screen) {
        navigation.navigate(item.screen);
      }
    }}
  >
    <Image source={item.icon} style={styles.icon} resizeMode="contain" />
    <Text style={styles.title}>{item.title}</Text>
    {item.comingSoon && <Text style={styles.soon}>Coming Soon...</Text>}
  </TouchableOpacity>
);

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Categories</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {categories.map((category, index) => (
          <View key={category} style={styles.tabItem}>
            <TouchableOpacity onPress={() => setSelectedCategory(category)}>
              <Text
                style={[
                  styles.tabText,
                  selectedCategory === category && styles.tabTextSelected,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
            {index !== categories.length - 1 && (
              <Text style={styles.separator}>|</Text>
            )}
          </View>
        ))}
      </View>

      {/* Grid */}
      <FlatList
        data={features}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#600000',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 0.9,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  tabText: {
    color: '#6e6e6e',
    fontSize: 18,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  tabTextSelected: {
    color: '#b30000',
    fontWeight: 'bold',
  },
  separator: {
    marginHorizontal: 8,
    color: '#ccc',
    fontSize: 16,
  },
  gridContainer: {
    padding: 12,
    paddingBottom: 60,
  },
  card: {
    width: itemWidth,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 6,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
    tintColor: '#B30000',
  },
  title: {
    fontSize: 10,
    textAlign: 'center',
    color: '#333',
    fontWeight: '500',
  },
  soon: {
    fontSize: 10,
    color: '#D32F2F',
    marginTop: 4,
  },
});

export default SeeAllCategories;
