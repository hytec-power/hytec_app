import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Cart({ navigation }) {
  const [deliveryOption, setDeliveryOption] = useState('pickup');
  const [paymentOption, setPaymentOption] = useState('card');

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

      <ScrollView contentContainerStyle={styles.content}>
        {/* Amount */}
        <Text style={styles.payableLabel}>PAYABLE AMOUNT</Text>
        <View style={styles.horizontalLine} />

        <Text style={styles.amount}>1,000,000 PHP</Text>

        {/* Delivery Options */}
        <View style={styles.optionGroup}>
          <TouchableOpacity
            style={[styles.option, deliveryOption === 'pickup' && styles.selectedOption]}
            onPress={() => setDeliveryOption('pickup')}
          >
            <Image source={require('../../assets/images/Picture1.png')} style={styles.iconImage} />
            <Text style={styles.optionText}>Pick up at store with eToken</Text>
            <View style={styles.radio}>
              {deliveryOption === 'pickup' && <View style={styles.radioDot} />}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.option, deliveryOption === 'delivery' && styles.selectedOption]}
            onPress={() => setDeliveryOption('delivery')}
          >
            <Image source={require('../../assets/images/Picture2.png')} style={styles.iconImage} />
            <Text style={styles.optionText}>Get home delivery</Text>
            <View style={styles.radio}>
              {deliveryOption === 'delivery' && <View style={styles.radioDot} />}
            </View>
          </TouchableOpacity>

          {/* Show payment options only when delivery is selected */}
          {deliveryOption === 'delivery' && (
            <View style={styles.dropdownContainer}>
              {['card', 'bank', 'wallet', 'transfer'].map((method) => (
                <TouchableOpacity
                  key={method}
                  style={[
                    styles.paymentOption,
                    paymentOption === method && styles.selectedPayment,
                  ]}
                  onPress={() => setPaymentOption(method)}
                >
                  <Text style={styles.paymentText}>
                    {{
                      card: 'Credit Card or Debit Card',
                      bank: 'Online Banking',
                      wallet: 'E-Wallet',
                      transfer: 'Bank Transfer',
                    }[method]}
                  </Text>
                  <View style={styles.radio}>
                    {paymentOption === method && <View style={styles.radioDot} />}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Confirm */}
        <TouchableOpacity style={styles.confirmButton}
        onPress={() => navigation.goBack()}>
          <Text style={styles.confirmText}>Confirm Payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

// === Styles ===
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#800000',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  payableLabel: {
    fontSize: 16,
    color: '#999',
    fontWeight: '500',
    marginBottom: 4,
  },

  horizontalLine: {
    height: 2,
    width: 230, 
    backgroundColor: '#ccc',
    marginLeft: 150,
    alignSelf: 'center',
    top: -15,
    right: -10,
  },

  amount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  optionGroup: {
    gap: 10,
  },
  option: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#fff',
  },
  selectedOption: {
    backgroundColor: '#f2f2f2',
  },
  iconImage: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#800000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#800000',
  },
  dropdownContainer: {
    marginTop: 10,
  },
  paymentOption: {
    marginTop: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  selectedPayment: {
    backgroundColor: '#f2f2f2',
  },
  paymentText: {
    flex: 1,
    fontSize: 15,
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: '#c62828',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});