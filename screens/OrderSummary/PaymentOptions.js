import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function PaymentOption({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Payment Options</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Product Card */}
        <View style={styles.card}>
          <Image
            source={require('../../assets/images/eximage.png')}
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Transmission Lines Trainer</Text>
            <Text style={styles.productSubtitle}>De Lorenzo</Text>
          </View>
        </View>

        {/* Order Details */}
        <View style={{ paddingHorizontal: 10 }}>
          {/* Dashed Order ID */}
          <View style={styles.orderIdContainer}>
            <Text style={styles.orderIdText}>CHDVL0101 20200513036</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Time:</Text>
            <Text style={styles.value}>10:30AM - 10:40AM</Text>
          </View>

            <View style={styles.dottedLine} />

          <View style={styles.detailRow}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>Nahar Amrit Shakti, Chandivali, Andheri East, MH 400072</Text>
          </View>

            <View style={styles.dottedLine} />
            
          <View style={styles.detailRow}>
            <Text style={styles.label}>Contact No.:</Text>
            <Text style={styles.value}>+91-22-22123456</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Phone No.:</Text>
            <Text style={styles.value}>+91 9173348535</Text>
          </View>

            <View style={styles.dottedLine} />

          <View style={styles.detailRow}>
            <Text style={styles.label}>OTP:</Text>
            <Text style={styles.value}>2313</Text>
          </View>

          <View style={styles.dottedLine} />
        </View>

        {/* Order Confirmation */}
        <View style={styles.orderSuccess}>
          <Text style={styles.successText}>Your Order Has Been Successfully Placed</Text>
          <Image
            source={require('../../assets/images/box.png')}
            style={styles.boxIcon}
          />
          <Text style={styles.deliveryText}>Your Order Will Be Delivered To You In 22 Minutes By</Text>
          <View style={styles.deliveryPerson}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.personName}>Pritesh S</Text>
              <Text style={styles.personNumber}>98753217348</Text>
            </View>
            <View style={{ marginLeft: 'auto' }}>
              <Text style={styles.link}>See Order Details</Text>
              <Text style={styles.link}>Track your Order</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.redButton}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.redButton}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.redButton}>
            <Text style={styles.buttonText}>SMS</Text>
          </TouchableOpacity>
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
  scrollView: {
    paddingBottom: 100,
    paddingHorizontal: 16,
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
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginTop: 16,
  },
  productImage: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
  },
  productInfo: {
    marginLeft: 12,
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  productSubtitle: {
    fontSize: 15,
    color: 'gray',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  orderIdContainer: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#999',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  orderIdText: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  detailText: {
    marginBottom: 8,
    fontSize: 14,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    width: 110,
  },

  value: {
    flex: 1,
    fontSize: 17,
    color: '#333',
    textAlign: 'right',
  },

  dottedLine: {
    borderBottomWidth: 1,
    borderColor: '#999',
    marginBottom: 16,
    width: '100%',
    alignSelf: 'stretch',
  },

  orderSuccess: {
    alignItems: 'center',
    marginTop: 30,
  },
  
  successText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },

  boxIcon: {
    width: 100,
    height: 100,
    marginTop: 15,
    marginBottom: 15,
  },

  deliveryText: {
    textAlign: 'center',
    fontWeight: 'Bold',
    fontSize: 17,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  deliveryPerson: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '100%',
    marginTop: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  personName: {
    fontWeight: 'bold',
  },
  personNumber: {
    color: 'gray',
  },
  link: {
    color: '#007BFF',
    fontSize: 12,
    textAlign: 'right',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 30,
  },
  redButton: {
    flex: 1,
    backgroundColor: '#c62828',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
