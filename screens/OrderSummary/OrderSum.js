import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function Cart({ navigation }) {
  const [deliveryOption, setDeliveryOption] = useState('pickup');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Order Summary</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Product Card */}
        <View style={styles.card}>
  <Image
    source={require('../../assets/images/eximage.png')} // ✅ correct path
    style={styles.productImage2}
  />

  <View style={styles.productInfo}>
    <Text style={styles.productTitle}>Transmission Lines Trainer</Text>
    <Text style={styles.productSubtitle}>De Lorenzo</Text>
  </View>
</View>

        {/* Delivery Section */}
        <View style={styles.lineWithText}>
          <Text style={styles.sectionTitle}>DELIVERY ADDRESS</Text>
          <View style={styles.horizontalLine} />
        </View>

        <View style={styles.detailsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Address')}>
          <View style={styles.addressSection}>
            <Image
            source={require('../../assets/images/home.png')}
            style={styles.productImage}
            />

            <View style={styles.verticalLine} />

          
              <View >
                <Text style={styles.addressTitle}>Home</Text>
                <Text style={styles.addressDetails}>Michigan State, USA</Text>
              </View>
                <View>
                  <Ionicons name="chevron-forward" size={30} color="#333" />
                </View>
            </View>
          </TouchableOpacity>
        

          <View style={styles.optionGroup}>
            <TouchableOpacity
              style={[styles.option,
                deliveryOption === 'pickup' && styles.selectedOption,
              ]} onPress={() => setDeliveryOption('pickup')}
            >

            <Image
              source={require('../../assets/images/Picture1.png')}
              style={styles.productImage3}
            />
              
            <Text style={styles.optionText}>
              Pick up at store with eToken  
            </Text>

            <View style={styles.radioCircle}>
              {deliveryOption === 'pickup' && (
                <View style={styles.selectedDot} />
                )}
            </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.option,
                deliveryOption === 'delivery' && styles.selectedOption,
              ]}
              onPress={() => setDeliveryOption('delivery')}
            >

            <Image
               source={require('../../assets/images/Picture2.png')}
              style={styles.productImage4}
            />

            <Text style={styles.optionText}>Get home delivery</Text>

              <View style={styles.radioCircle1}>
                {deliveryOption === 'delivery' && (
                  <View style={styles.selectedDot} />
                )}
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('PaymentType')}>
            <Text style={styles.morePayment}>More Payment Options</Text>
          </TouchableOpacity>        
          

          <TouchableOpacity style={styles.placeOrderBtn}
          onPress={() => navigation.navigate('PaymentOptions')}>
            <Text style={styles.btnText}>Place order and make payment</Text>
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
    marginHorizontal: 16,
    marginTop: 16,
  },

  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },

  productImage4: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    left: 10,
  },

  productImage3: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    left: 10,
  },

  productImage2: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
  },
  productImage: {
    width: 40,
    height: 40,
    left: 12,
    resizeMode: 'cover',
  },

  verticalLine: {
  width: 2,
  height: 50,
  backgroundColor: '#ccc',
  marginHorizontal: 10,
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
  detailsContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
  },

  lineWithText: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 10,
  },

  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    left: 9,
    top: 5,
  },

  horizontalLine: {
    height: 2,
    width: 190, 
    backgroundColor: '#ccc',
    marginLeft: 10, 
    alignSelf: 'center',
    top: 0,
    right: -5,
  },

  addressSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  homeIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  addressTitle: {
    left: -20,
    fontWeight: 'bold',
    fontSize: 19,
  },
  addressDetails: {
    left: -20,
    color: '#555',
    fontSize: 18,
  },

  optionGroup: {
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 12,
  },
  selectedOption: {
    backgroundColor: '#fce4ec',
    borderRadius: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#800000',
    alignItems: 'center',
    justifyContent: 'center',
    right: -30,
  },

  radioCircle1: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#800000',
    alignItems: 'center',
    justifyContent: 'center',
    right: -117,
  },

  selectedDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#800000',
  },
  optionText: {
    fontSize: 19,
    padding: 4,
    fontWeight: 'Medium',
    left: 20,
  },
  morePayment: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 180,
    color: '#C73232',
  },
  placeOrderBtn: {
    backgroundColor: '#800000',
    paddingVertical: 21,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40, 
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
