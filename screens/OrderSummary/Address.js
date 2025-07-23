import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const addresses = [
  {
    id: '1',
    name: 'Maria Cruz',
    phone: '(+63) 912 345 6789',
    address:
      'Blk 5 Lot 21 Camella Homes Phase 2\nSan Jose, Antipolo City, Rizal, 1870',
    tag: 'Default',
  },
  {
    id: '2',
    name: 'Wise LVLPOR',
    phone: '(+63) 917 654 3210',
    address:
      '123 Sampaguita Street\nBarangay Sto. Niño, Marikina City, Metro Manila, 1800',
    tag: 'Pickup Address',
  },
  {
    id: '3',
    name: 'Alexa De Vera',
    phone: '(+63) 906 112 3344',
    address:
      'Unit 804, Greenview Towers\nBrgy. San Isidro, Makati City, Metro Manila, 1200',
    tag: null,
  },
];

export default function Address({ navigation }) {
  const [selectedId, setSelectedId] = useState('1');

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => setSelectedId(item.id)}
    >
      <View style={styles.row}>
        <Ionicons
          name={
            selectedId === item.id ? 'radio-button-on' : 'radio-button-off'
          }
          size={22}
          color="#800000"
          style={{ marginRight: 10 }}
        />
        <View style={{ flex: 1 }}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>
              {item.name}
              <Text style={styles.phone}> | {item.phone}</Text>
            </Text>
            <TouchableOpacity
              style={{ marginLeft: 'auto' }}
              onPress={() => navigation.navigate('Editadd')}
            >
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.addressText}>{item.address}</Text>

          {item.tag && (
            <View
              style={[
                styles.tag,
                {
                  backgroundColor:
                    item.tag === 'Default' ? '#fff5f5' : '#f5f5f5',
                  borderColor: item.tag === 'Default' ? '#800000' : '#aaa',
                },
              ]}
            >
              <Text
                style={{
                  color: item.tag === 'Default' ? '#800000' : '#888',
                  fontSize: 12,
                }}
              >
                {item.tag}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Address Selection</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.addressLabel}>Address</Text>

      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View
            style={{ borderBottomWidth: 1, borderColor: '#eee', marginTop: 10 }}
          />
        )}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      {/* Add new address */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Editadd2')}
      >
        <View style={styles.addIcon}>
          <Ionicons name="add" size={18} color="#800000" />
        </View>
        <Text style={styles.addText}>Add a new address</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#800000',
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
  addressLabel: {
    color: '#888',
    fontWeight: '500',
    marginTop: 16,
    marginBottom: 10,
    marginLeft: 16,
    fontSize: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333',
  },
  phone: {
    color: '#999',
    fontSize: 14,
  },
  editText: {
    left: 10,
    color: '#999',
    fontSize: 14,
  },
  addressText: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  tag: {
    marginTop: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  addButton: {
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    bottom: 250,
  },
  addIcon: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: '#800000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  addText: {
    color: '#800000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
