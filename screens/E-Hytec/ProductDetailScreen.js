import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import productDetails from '../../data/productDetails';
import Cart from '../OrderSummary/Cart';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product, isBookmarked: initialBookmarked, toggleBookmark } = route.params;
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);
  const [activeTab, setActiveTab] = useState('Description');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setIsBookmarked(initialBookmarked);
  }, [initialBookmarked]);

  const handleToggleBookmark = () => {
    toggleBookmark(product.id);
    setIsBookmarked((prev) => !prev);
  };

  const handleAddToCart = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const productInfo = productDetails[product.id] || {};

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#800000" />
        </TouchableOpacity>

        <Image source={product.image} style={styles.productImage} />

        <View style={styles.infoContainer}>
          <View style={styles.topRow}>
            <View style={styles.leftInfo}>
              <Text style={styles.title}>{product.name}</Text>
              <Text style={styles.subtitle}>Model ID: {product.id}</Text>
              <View style={styles.tagWrapper}>
                <Text style={styles.tag}>{productInfo.tag || 'General'}</Text>
              </View>
              <Text style={styles.subinfo}>Brand: {product.brand}</Text>
              <View style={styles.locationRow}>
                <Ionicons name="location-sharp" size={14} color="gray" />
                <Text style={styles.subinfo}>{product.location}</Text>
              </View>
            </View>

            <View style={styles.rightActions}>
              <Text style={styles.price}>{product.price} PHP</Text>

              <TouchableOpacity onPress={handleToggleBookmark} style={styles.iconButton}>
                <MaterialIcons
                  name={isBookmarked ? 'bookmark' : 'bookmark-border'}
                  size={26}
                  color={isBookmarked ? '#b30000' : 'gray'}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.navigate('Cart')}>
                <Text style={styles.btnText}>Checkout Item</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cartBtn} onPress={handleAddToCart}>
                <Text style={styles.btnText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.tabs}>
            {['Description', 'Specifications', 'Learning Topics'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {activeTab === 'Description' && (
            <>
              <Text style={styles.description}>
                {productInfo.description || 'No description available.'}
              </Text>
              {productInfo.includes && (
                <Text style={styles.includes}>{productInfo.includes}</Text>
              )}
            </>
          )}

          {activeTab === 'Specifications' && (
            <Text style={styles.description}>
              {productInfo.specifications || 'No specifications available.'}
            </Text>
          )}

          {activeTab === 'Learning Topics' && (
            <Text style={styles.description}>
              {productInfo.topics || 'No topics available.'}
            </Text>
          )}
        </View>

        {productInfo.reviews && (
          <View style={styles.reviewsSection}>
            <Text style={styles.reviewHeading}>Reviews</Text>
            {productInfo.reviews.map((review, index) => (
              <View key={index} style={styles.reviewCard}>
                <Image source={{ uri: review.avatar }} style={styles.reviewAvatar} />
                <View style={styles.reviewContent}>
                  <Text style={styles.reviewName}>{review.name}</Text>
                  <View style={styles.reviewStars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Ionicons
                        key={i}
                        name={i < review.rating ? 'star' : 'star-outline'}
                        size={16}
                        color="#FFD700"
                      />
                    ))}
                  </View>
                  <Text style={styles.reviewComment}>{review.comment}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* ✅ POPUP */}
      {showPopup && (
        <View style={styles.popup}>
          <TouchableOpacity
            onPress={() => setShowPopup(false)}
            style={styles.popupCloseBtn}
          >
            <Text style={styles.popupClose}>X</Text>
          </TouchableOpacity>

          <View style={styles.popupContent}>
            <Ionicons name="checkmark-circle" size={24} color="#1E9E6A" style={{ marginRight: 6 }} />
            <Text style={styles.popupText}>Item added to cart successfully!</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
                setShowPopup(false);
                navigation.navigate('Cart'); // Make sure 'Cart' is the exact name used in your navigator
            }}
            style={styles.viewCartBtn}
            >
            <Text style={styles.viewCartText}>View Cart</Text>
            </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginTop: 60,
  },
  infoContainer: { padding: 16 },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  leftInfo: { flex: 1 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 2 },
  subtitle: { color: '#777', fontWeight: '600', fontSize: 13, marginBottom: 2 },
  subinfo: { fontSize: 13, color: '#777', marginBottom: 2 },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  tagWrapper: {
    backgroundColor: '#ffe6e6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 14,
    alignSelf: 'flex-start',
    marginBottom: 4,
    marginTop: 2,
  },
  tag: { fontSize: 12, color: '#800000', fontWeight: '600' },
  rightActions: { alignItems: 'flex-end', justifyContent: 'flex-start' },
  price: { fontSize: 18, fontWeight: 'bold', color: '#000', marginBottom: 8 },
  iconButton: { marginBottom: 8 },
  checkoutBtn: {
    backgroundColor: '#b30000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 6,
    width: 130,
    alignItems: 'center',
  },
  cartBtn: {
    backgroundColor: '#b30000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    width: 130,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontSize: 13, fontWeight: '500' },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 6,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  activeTabButton: { backgroundColor: '#b30000' },
  tabText: { color: '#b30000', fontSize: 14, fontWeight: '500' },
  activeTabText: { color: '#fff', fontWeight: 'bold' },
  description: {
    marginTop: 10,
    color: '#333',
    fontSize: 13.5,
    lineHeight: 20,
  },
  includes: {
    marginTop: 12,
    fontSize: 13,
    color: '#444',
    fontStyle: 'italic',
  },
  reviewsSection: {
    marginTop: 30,
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  reviewHeading: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  reviewCard: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  reviewAvatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 12,
  },
  reviewContent: { flex: 1 },
  reviewName: { fontWeight: 'bold', fontSize: 14, marginBottom: 4 },
  reviewStars: { flexDirection: 'row', marginBottom: 6 },
  reviewComment: { fontSize: 13.5, color: '#333', lineHeight: 19 },

  // ✅ POPUP STYLES
  popup: {
    position: 'absolute',
    top: 340,
    left: 20,
    right: 20,
    backgroundColor: '#e6fff2',
    borderColor: '#1E9E6A',
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 999,
  },
  popupCloseBtn: {
    position: 'absolute',
    top: 6,
    right: 8,
  },
  popupClose: {
    color: '#999',
    fontWeight: 'bold',
    fontSize: 16,
  },
  popupContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 32,
  },
  popupText: {
    color: '#1E9E6A',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  viewCartBtn: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  viewCartText: {
    color: '#1E9E6A',
    fontWeight: '600',
    fontSize: 13.5,
  },
});

export default ProductDetailScreen;
