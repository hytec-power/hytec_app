import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { topProductsData } from '../../data/topProductsData';
import { brandData } from '../../data/brandData';
import { discountData } from '../../data/discountData';
import { categoriesData } from '../../data/categoriesData';

const EHomePage = () => {
  const navigation = useNavigation();
  const [bookmarkedTop, setBookmarkedTop] = useState([]);
  const [bookmarkedRequested, setBookmarkedRequested] = useState([]);

  const toggleBookmark = (id, isTop) => {
    if (isTop) {
      setBookmarkedTop((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setBookmarkedRequested((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    }
  };

  const ProductCard = ({ item, isTop }) => {
    const isBookmarked = isTop ? bookmarkedTop.includes(item.id) : bookmarkedRequested.includes(item.id);
    return (
      <View style={styles.productCard}>
        <Image source={item.image} style={styles.productImage} />
        
        <Text style={styles.productName}>{item.name}</Text>

        {/* Fixed bottom row */}
        <View style={styles.fixedBottomRow}>
          <View style={styles.starRatingContainer}>
            {[...Array(5)].map((_, index) => (
              <Ionicons key={index} name="star" size={12} color="#FFD700" style={{ marginRight: 1 }} />
            ))}
            <Text style={styles.ratingValue}>({item.rating})</Text>
          </View>

          <TouchableOpacity onPress={() => toggleBookmark(item.id, isTop)}>
            <MaterialIcons
              name={isBookmarked ? 'favorite' : 'favorite-border'}
              size={20}
              color={isBookmarked ? 'red' : 'gray'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const ProductImageCard = ({ item }) => (
    <View style={styles.imageOnlyCard}>
      <Image source={item.image} style={styles.fullImage} />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#800000" barStyle="light-content" />
      <View style={styles.fixedTop}>
        <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
          <Text style={styles.headerTitle}>E-Hytec</Text>
        </View>
        <View style={styles.searchWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('SearchPage')} style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#999" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search any products"
              placeholderTextColor="#999"
              editable={false}
              pointerEvents="none"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} style={styles.scrollContent}>
        {/* BANNER */}
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerText}>
            Reliable Partner and <Text style={{ color: 'red' }}>Solution Provider</Text>
          </Text>
          <Image source={require('../../assets/robot.png')} style={styles.robot} />
        </View>

        {/* CATEGORIES */}
        <View style={styles.sectionWrapper}>
          <Text style={styles.sectionTitle}>Our Categories</Text>
          <View style={styles.redUnderline} />
        </View>

        {/* ACADEME */}
        <View style={[styles.labelWithBar, { marginBottom: 10 }]}>
          <View style={styles.labelBar} />
          <Text style={styles.labelBlueText}>ACADEME</Text>
        </View>
        <FlatList
          horizontal
          data={categoriesData.academe}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductImageCard item={item} />}
          showsHorizontalScrollIndicator={false}
        />
        <LinearGradient colors={['#2B62FF', '#B4C5FF']} style={styles.shopNowBlueButton}>
          <TouchableOpacity style={styles.shopNowGradientInner}>
            <Text style={styles.shopNowGradientText}>Shop Now</Text>
            <Ionicons name="arrow-forward" size={14} color="#fff" />
          </TouchableOpacity>
        </LinearGradient>

        {/* INDUSTRIAL */}
        <View style={[styles.labelWithBar, { marginBottom: 10 }]}>
          <View style={styles.labelBarRed} />
          <Text style={styles.labelRedText}>INDUSTRIAL</Text>
        </View>
        <FlatList
          horizontal
          data={categoriesData.industrial}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductImageCard item={item} />}
          showsHorizontalScrollIndicator={false}
        />
        <LinearGradient colors={['#CA272C', '#FCEAEA']} style={styles.shopNowRedButton}>
          <TouchableOpacity style={styles.shopNowGradientInner}>
            <Text style={styles.shopNowGradientText}>Shop Now</Text>
            <Ionicons name="arrow-forward" size={14} color="#fff" />
          </TouchableOpacity>
        </LinearGradient>

        {/* TOP PRODUCTS */}
        <View style={styles.productSectionContainer}>
          <View style={styles.labelWithBar}>
            <View style={styles.labelBarOrange} />
            <Text style={styles.labelOrangeText}>TOP PRODUCTS</Text>
          </View>
          <FlatList
            horizontal
            contentContainerStyle={{ paddingTop: 8, paddingBottom: 8, paddingHorizontal: 4 }} // 👈 Add this
            data={topProductsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ProductCard item={item} isTop={true} />}
            showsHorizontalScrollIndicator={false}
          />
          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllText}>View all products</Text>
          </TouchableOpacity>
        </View>


        {/* MOST REQUESTED */}
        <View style={styles.productSectionContainer}>
          <View style={styles.labelWithBar}>
            <View style={styles.labelBarOrange} />
            <Text style={styles.labelOrangeText}>MOST REQUESTED PRODUCTS</Text>
          </View>
          <FlatList
            horizontal
            contentContainerStyle={{ paddingTop: 8, paddingBottom: 8, paddingHorizontal: 4 }}
            data={topProductsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ProductCard item={item} isTop={false} />} // 👈 FIXED
            showsHorizontalScrollIndicator={false}
          />
          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllText}>View all products</Text>
          </TouchableOpacity>
        </View>


        {/* BRANDS */}
        <Text style={styles.sliderTitle}>Shop by Brand</Text>
        <View style={styles.brandsWrapper}>
          {brandData.map((brand, index) => (
            <View key={index} style={styles.brandItem}>
              <Image source={require('../../assets/products/P1.png')} style={styles.brandImage} />
              <Text style={styles.brandText}>{brand}</Text>
            </View>
          ))}
        </View>

        {/* DISCOUNT PRODUCTS */}
        <View style={styles.productSectionContainer}>
          <Text style={styles.sliderTitle}>20% Discount</Text>
          <View style={styles.discountGridContainer}>
            {discountData.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('ProductDetail', { product: item })}
                style={styles.discountGridItem}
              >
                <View style={styles.discountTag}>
                  <Text style={styles.discountText}>-20%</Text>
                </View>
                <Image source={item.image} style={styles.discountImage} />
                <Text style={styles.discountNameLeft}>{item.name}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.discountedPrice}>₱{item.price.toFixed(2)}</Text>
                  <Text style={styles.oldPrice}>₱{item.original.toFixed(2)}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>


        {/* SALE BANNER */}
        <View style={styles.saleBanner}>
          <Text style={styles.saleText}>
            Big Sale{"\n"}
            <Text style={styles.saleHighlight}>Up to 50%</Text>
          </Text>
          <TouchableOpacity style={styles.saleButton}>
            <Text style={styles.saleBtnText}>Happening Now</Text>
          </TouchableOpacity>
        </View>

        {/* REPEATED DISCOUNTS (optional) */}
        <View style={styles.productSectionContainer}>
          <View style={styles.discountGridContainer}>
            {discountData.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('ProductDetail', { product: item })}
                style={styles.discountGridItem}
              >
                <View style={styles.discountTag}>
                  <Text style={styles.discountText}>-20%</Text>
                </View>
                <Image source={item.image} style={styles.discountImage} />
                <Text style={styles.discountNameLeft}>{item.name}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.discountedPrice}>₱{item.price.toFixed(2)}</Text>
                  <Text style={styles.oldPrice}>₱{item.original.toFixed(2)}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { backgroundColor: '#fff', paddingHorizontal: 15, marginTop: 130 },
  fixedTop: { position: 'absolute', top: 0, width: '100%', zIndex: 10, backgroundColor: '#fff' },
  headerContainer: { backgroundColor: '#640000', paddingTop: 45, paddingBottom: 40, paddingHorizontal: 15, justifyContent: 'center' },
  backButton: { position: 'absolute', left: 15, top: 45, zIndex: 2 },
  headerTitle: { fontSize: 20, color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  searchWrapper: { marginTop: -30, paddingHorizontal: 15 },
  searchContainer: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12, padding: 10, alignItems: 'center', elevation: 3, borderWidth: 1, borderColor: '#ccc', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, marginTop: 10 },
  searchInput: { marginLeft: 8, flex: 1 },
  bannerContainer: { alignItems: 'center', marginBottom: 8 },
  bannerText: { fontSize: 33, fontWeight: 'bold', textAlign: 'center', marginBottom: 6 },
  robot: { width: 400, height: 400, resizeMode: 'contain' },
  sectionWrapper: { alignItems: 'center' },
  sectionTitle: { fontSize: 25, fontWeight: 'bold' },
  redUnderline: { width: 170, height: 3, backgroundColor: 'red', marginTop: 4 },
  labelWithBar: { flexDirection: 'row', alignItems: 'center', marginTop: 0 },
  labelBar: { width: 6, height: 16, backgroundColor: '#2B62FF', marginRight: 8, borderRadius: 2 },
  labelBlueText: { fontWeight: '700', fontSize: 14, color: '#2B62FF' },
  labelBarRed: { width: 6, height: 16, backgroundColor: '#CA272C', marginRight: 8, borderRadius: 2 },
  labelRedText: { fontWeight: '700', fontSize: 14, color: '#CA272C' },
  labelBarOrange: { width: 6, height: 16, backgroundColor: '#FF3D00', marginRight: 8, borderRadius: 2 },
  labelOrangeText: { fontWeight: '700', fontSize: 14, color: '#FF3D00' },
  sliderTitle: { fontWeight: '700', fontSize: 20, marginTop: 15, marginBottom: 5 },
  ratingHeartRow: { marginTop: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  viewAllBtn: { alignSelf: 'flex-start', paddingVertical: 4, paddingHorizontal: 12, marginTop: 5, backgroundColor: '#FF3D00', borderRadius: 22 },
  viewAllText: { color: '#fff', fontSize: 14 },
  brandsWrapper: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', marginBottom: 10 },
  brandItem: { alignItems: 'center', margin: 8, width: 70 },
  brandImage: { width: 50, height: 50, borderRadius: 25, marginBottom: 4 },
  brandText: { fontSize: 11, textAlign: 'center' },
  discountGridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 10 },
  discountGridItem: { width: '48%', backgroundColor: '#fff', borderRadius: 12, padding: 12, marginBottom: 12, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, position: 'relative', alignItems: 'center' },
  discountTag: { position: 'absolute', right: 8, top: 8, backgroundColor: '#f66', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, zIndex: 1 },
  discountText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  discountImage: { width: '100%', height: 100, resizeMode: 'contain', marginBottom: 6 },
  discountName: { fontSize: 11, marginBottom: 4 },
  discountPrice: { fontSize: 12, fontWeight: 'bold' },
  oldPrice: { textDecorationLine: 'line-through', color: 'gray', fontSize: 11 },
  saleBanner: { backgroundColor: '#ffc107', borderRadius: 12, padding: 20, marginBottom: 20, alignItems: 'center' },
  saleText: { fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  saleHighlight: { fontSize: 18, color: '#000' },
  saleButton: { marginTop: 10, backgroundColor: '#0052cc', paddingVertical: 6, paddingHorizontal: 16, borderRadius: 6 },
  saleBtnText: { color: '#fff', fontWeight: 'bold' },
  shopNowBlueButton: { marginBottom: 15, marginTop: 15, borderRadius: 22, alignSelf: 'flex-start' },
  shopNowRedButton: { marginBottom: 35, marginTop: 15, borderRadius: 22, alignSelf: 'flex-start' },
  shopNowGradientInner: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 6 },
  shopNowGradientText: { color: '#fff', marginRight: 6, fontWeight: '600' },
  fullImage: { width: '100%', height: '100%', resizeMode: 'contain' },
  productListContainer: { paddingVertical: 10, backgroundColor: '#fdfdfd', borderRadius: 10, marginBottom: 10, paddingHorizontal: 5, elevation: 2 },
  productSectionContainer: { backgroundColor: '#fff', borderRadius: 12, padding: 15, marginBottom: 20, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  imageOnlyCard: { width: 160, height: 160, marginRight: 10 },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 },
  heartIcon: { padding: 4 },
  productCard: { width: 160, backgroundColor: '#fff', borderRadius: 12, padding: 10, marginRight: 10, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, position: 'relative', paddingBottom: 30 },
  productImage: { width: '100%', height: 100, resizeMode: 'contain', borderRadius: 10, backgroundColor: '#f5f5f5' },
  productName: { fontSize: 12, marginTop: 6, fontWeight: 'bold', textAlign: 'left' },
  fixedBottomRow: { position: 'absolute', bottom: 10, left: 10, right: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  starRatingContainer: { flexDirection: 'row', alignItems: 'center' },
  ratingValue: { fontSize: 11, color: '#888', marginLeft: 4 },
  priceContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 4,
  },
  discountNameLeft: {
    fontSize: 11,
    marginBottom: 4,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontWeight: '500',
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6, // add space between discounted and original
  },

  discountedPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },

  oldPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: 'red',
  },
});

export default EHomePage;
