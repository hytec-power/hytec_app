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
import Svg, { Path } from 'react-native-svg';

export default function Cart({ navigation }) {

    const [quantity, setQuantity] = useState(1); 
    const incrementQty = () => setQuantity(prev => prev + 1);
    const decrementQty = () => {
    if (quantity > 1) setQuantity(prev => prev - 1); 
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
       </TouchableOpacity>


        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Cart</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

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

        {/* Seller and Quantity */}
        <View style={styles.itemDetails}>
          <View style={styles.sellerRow}>
            <Text style={styles.sellerName}>Mcdowells</Text>
            <Text style={styles.price}>1,000,000 PHP</Text>
          </View>

          <View style={styles.priceQtyRow}>
            <TouchableOpacity>
              <Text style={styles.viewInfo}>View Info</Text>
            </TouchableOpacity>
            <View style={styles.qtyControl}>
              <TouchableOpacity style={styles.qtyBtn} onPress={decrementQty}>
                <Text style={styles.qtyBtnText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qtyText}>{quantity}</Text>
              <TouchableOpacity style={styles.qtyBtn} onPress={incrementQty}>
                <Text style={styles.qtyBtnText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text>SRP</Text>
            <Text>1,000,000</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Tax</Text>
            <Text>00.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Other Charges</Text>
            <Text>00.00</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>To pay</Text>
            <Text style={styles.totalAmount}>1,000,000 PHP</Text>
          </View>

          {/* Zigzag White Divider */}
          <View style={styles.zigzag}>
            <Svg height={100} width="100%" viewBox="0 0 1440 320">
              <Path
                fill="#c73232"
                d="M0,0 L80,40 L160,0 L240,40 L320,0 L400,40 L480,0 L560,40 L640,0 L720,40 L800,0 L880,40 L960,0 L1040,40 L1120,0 L1200,40 L1280,0 L1360,40 L1440,0 L1440,320 L0,320 Z"
              />
            </Svg>
          </View>

          {/* Discount Tag */}
          <View style={styles.discountTag}>
            <Text style={styles.discountTagText}>You saved 12 on this order 🥳</Text>
          </View>
        </View>

        {/* Checkout Button */}
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => navigation.navigate('OrderSum')}
        >
          <Text style={styles.checkoutText}>Check Out</Text>
        </TouchableOpacity>
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
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 16,
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
  itemDetails: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: '#fff',
  },
  sellerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  sellerName: {
    fontWeight: '600',
    fontSize: 23,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
  },
  viewInfo: {
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  priceQtyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qtyControl: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
  },
  qtyBtn: {
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  qtyBtnText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  qtyText: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 8,
  },
  summary: {
    backgroundColor: '#f9f9f9',
    margin: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 8,
    paddingTop: 8,
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  totalAmount: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  zigzag: {
    backgroundColor: '#fff',
    height: 20,
  },
  discountTag: {
    backgroundColor: '#c73232',
    paddingVertical: 10,
    alignItems: 'center',
  },
  discountTagText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  checkoutBtn: {
    margin: 16,
    backgroundColor: '#c73232',
    padding: 17,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
