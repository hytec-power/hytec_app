import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import products from '../../data/products';
import { SearchContext } from '../../context/SearchContext';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFullHistory, setShowFullHistory] = useState(false);
  const navigation = useNavigation();

  const { searchHistory, addToHistory } = useContext(SearchContext);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    const trimmed = searchQuery.trim();
    if (trimmed === '') return;

    addToHistory(trimmed); // this will move it to top if exists
    navigation.navigate('ProductList', { query: trimmed });
    setSearchQuery('');
  };

  const handleHistoryClick = (item) => {
    addToHistory(item); // this moves it to top if needed
    navigation.navigate('ProductList', { query: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() =>
        navigation.navigate('ProductDetail', {
          product: item,
          isBookmarked: false,
          toggleBookmark: () => {},
        })
      }
    >
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const displayedHistory = showFullHistory ? searchHistory : searchHistory.slice(0, 3);

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="red" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search any products"
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
            style={styles.searchInput}
          />
          <TouchableOpacity onPress={handleSearch} style={styles.searchIconWrapper}>
            <Ionicons name="search" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search History */}
      {searchHistory.length > 0 && (
        <View style={styles.historyContainer}>
          {displayedHistory.map((item, index) => (
            <View key={index} style={styles.historyItemWrapper}>
              <TouchableOpacity onPress={() => handleHistoryClick(item)}>
                <Text style={styles.historyItem}>{item}</Text>
              </TouchableOpacity>
              {index !== displayedHistory.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
          {searchHistory.length > 3 && (
            <TouchableOpacity onPress={() => setShowFullHistory(!showFullHistory)}>
              <Text style={styles.showToggle}>
                {showFullHistory ? 'Show Less' : 'Show More'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {/* Search Suggestions */}
      <Text style={styles.suggestionTitle}>Search Suggestions</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.grid}
        ListEmptyComponent={
          <ActivityIndicator size="small" color="red" style={styles.loading} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
    height: 42,
    overflow: 'hidden',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  searchIconWrapper: {
    height: '100%',
    backgroundColor: 'red',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  historyContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
    marginBottom: 12,
  },
  historyItemWrapper: {
    paddingVertical: 6,
  },
  historyItem: {
    fontSize: 16,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginTop: 4,
  },
  showToggle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  suggestionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  grid: {
    paddingBottom: 30,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    marginBottom: 16,
    padding: 10,
    marginRight: '4%',
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 8,
    textAlign: 'center',
  },
  loading: {
    marginTop: 20,
  },
});

export default SearchPage;
