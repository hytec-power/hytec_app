import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image,
  TouchableOpacity, SafeAreaView, StatusBar, Modal
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import products from '../../data/products';

const ProductListScreen = () => {
  const nav = useNavigation();
  const route = useRoute();
  const { query } = route.params || {};

  const [bookmarked, setBookmarked] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [tab, setTab] = useState('category');
  const [mainCat, setMainCat] = useState('');
  const [level, setLevel] = useState('main');
  const [filters, setFilters] = useState({ category: [], origin: [] });

  const toggleBookmark = id =>
    setBookmarked(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);

  const clearAll = () => {
    setFilters({ category: [], origin: [] });
    setMainCat('');
    setLevel('main');
  };

  const toggleTag = (type, val) => {
    setFilters(prev => {
      const current = prev[type];
      let updated = current.includes(val)
        ? current.filter(v => v !== val)
        : [...current, val];

      if (type === 'category') {
        updated = val === 'All'
          ? ['All']
          : updated.filter(tag => tag !== 'All');
      }

      return { ...prev, [type]: updated };
    });
  };

  const allCategories = [...new Set(products.map(p => p.category))];
  const allOrigins = [...new Set(products.map(p => p.location))];

  const filtered = products.filter((p) => {
    const matchesQuery = !query || p.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      filters.category.length === 0 ||
      filters.category.includes('All') ||
      filters.category.includes(p.category);
    const matchesOrigin =
      filters.origin.length === 0 || filters.origin.includes(p.location);
    return matchesQuery && matchesCategory && matchesOrigin;
  });

  return (
    <SafeAreaView style={s.safeArea}>
      <StatusBar backgroundColor="#800000" barStyle="light-content" />
      <View style={s.container}>
        {/* Header */}
        <View style={s.header}>
          <TouchableOpacity style={s.backBtn} onPress={() => nav.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={s.headerTitle}>E-Hytec</Text>
        </View>

        {/* Search */}
        <View style={s.searchWrap}>
          <TouchableOpacity style={s.searchBox} onPress={() => nav.navigate('SearchPage')}>
            <Ionicons name="search" size={20} color="#999" />
            <Text style={s.searchInput}>{query || 'Search any products'}</Text>
          </TouchableOpacity>
        </View>
        {query && <Text style={s.queryText}>Showing results for "{query}"</Text>}

        {/* Filter Button */}
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
          <TouchableOpacity style={s.filterRow} onPress={() => setShowFilter(true)}>
            <Image source={require('../../assets/icons/filterIcon.png')} style={s.icon16} />
            <Text style={s.filterText}>Filter</Text>
          </TouchableOpacity>

          {/* Product Cards */}
          {filtered.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                nav.navigate('ProductDetail', {
                  product: item,
                  isBookmarked: bookmarked.includes(item.id),
                  toggleBookmark
                })
              }
            >
              <View style={s.card}>
                <Image source={item.image} style={s.image} />
                <View style={s.cardInfo}>
                  <Text style={s.title}>{item.name}</Text>
                  <View style={s.row}>
                    <Image source={require('../../assets/icons/star.png')} style={s.icon14} />
                    <Text style={s.rating}>{item.rating}</Text>
                  </View>
                  <Text style={s.sub}>Brand: {item.brand}</Text>
                  <View style={s.row}>
                    <Image source={require('../../assets/icons/pin.png')} style={s.icon14} />
                    <Text style={s.sub}>Origin: {item.location}</Text>
                  </View>
                  <Text style={s.price}>{item.price}</Text>
                </View>
                <View style={s.rightActions}>
                  <TouchableOpacity onPress={() => toggleBookmark(item.id)} style={{ marginRight: 8 }}>
                    <MaterialIcons
                      name={bookmarked.includes(item.id) ? 'bookmark' : 'bookmark-border'}
                      size={22}
                      color={bookmarked.includes(item.id) ? '#b30000' : 'gray'}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      nav.navigate('ProductDetail', {
                        product: item,
                        isBookmarked: bookmarked.includes(item.id),
                        toggleBookmark,
                      })
                    }
                    style={s.detailBtn}
                  >
                    <Text style={s.detailText}>See Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Filter Modal */}
        <Modal visible={showFilter} animationType="slide" transparent>
          <View style={s.modalBg}>
            <View style={s.bottomSheet}>
              {/* Exit */}
              <TouchableOpacity style={s.exitBtn} onPress={() => setShowFilter(false)}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>

              <Text style={s.modalTitle}>Tags</Text>

              {/* Selected Filters */}
              <View style={s.selectedBox}>
                <ScrollView style={s.scrollBox}>
                  <Text style={[s.summary, { fontWeight: 'bold' }]}>Category:</Text>
                  <View style={s.tagRow}>
                    {filters.category.map(tag => (
                      <View key={tag} style={s.tag}><Text>{tag}</Text></View>
                    ))}
                  </View>
                  <Text style={[s.summary, { fontWeight: 'bold', marginTop: 5 }]}>Origin:</Text>
                  <View style={s.tagRow}>
                    {filters.origin.map(tag => (
                      <View key={tag} style={s.tag}><Text>{tag}</Text></View>
                    ))}
                  </View>
                </ScrollView>
                <View style={s.actions}>
                  {filters.category.length + filters.origin.length > 0 && (
                    <TouchableOpacity onPress={() => setShowFilter(false)}>
                      <Text style={s.done}>Done</Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity onPress={clearAll}><Text style={s.clear}>Clear All</Text></TouchableOpacity>
                </View>
              </View>

              {/* Filter Tabs */}
              <View style={s.tabGroup}>
                {['category', 'origin'].map((key) => (
                  <TouchableOpacity
                    key={key}
                    style={[s.tab, tab === key && s.tabActive]}
                    onPress={() => {
                      setTab(key);
                      setLevel('main');
                    }}
                  >
                    <Text style={tab === key ? s.tabTextActive : s.tabText}>
                      {key === 'category' ? 'Category' : 'Country of Origin'}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Filter Contents */}
              {tab === 'category' && (
                <ScrollView style={{ maxHeight: 120 }}>
                  <View style={s.tagRow}>
                    {['All', ...allCategories].map((item) => (
                      <TouchableOpacity
                        key={item}
                        style={[
                          s.tag,
                          filters.category.includes(item) && { backgroundColor: '#b30000' }
                        ]}
                        onPress={() => toggleTag('category', item)}
                      >
                        <Text style={filters.category.includes(item)
                          ? { color: '#fff', fontWeight: 'bold' }
                          : { color: '#666' }}>{item}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              )}

              {tab === 'origin' && (
                <ScrollView style={{ maxHeight: 120 }}>
                  <View style={s.tagRow}>
                    {allOrigins.map((item) => (
                      <TouchableOpacity
                        key={item}
                        style={[
                          s.tag,
                          filters.origin.includes(item) && { backgroundColor: '#b30000' }
                        ]}
                        onPress={() => toggleTag('origin', item)}
                      >
                        <Text style={filters.origin.includes(item)
                          ? { color: '#fff', fontWeight: 'bold' }
                          : { color: '#666' }}>{item}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#800000' },
  container: { flex: 1, backgroundColor: '#fff' },
  header: { backgroundColor: '#640000', paddingTop: 45, paddingBottom: 40, paddingHorizontal: 15 },
  backBtn: { position: 'absolute', left: 15, top: 45, zIndex: 2 },
  headerTitle: { fontSize: 20, color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  searchWrap: { marginTop: -30, paddingHorizontal: 15 },
  searchBox: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12, padding: 10, alignItems: 'center', elevation: 3, borderWidth: 1, borderColor: '#ccc', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, marginTop: 10,},
  searchInput: { marginLeft: 8, flex: 1, color: '#333' },
  queryText: { marginLeft: 20, marginTop: 10, color: '#333' },
  filterRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 20 },
  icon16: { width: 16, height: 16, marginRight: 6, resizeMode: 'contain' },
  filterText: { color: '#800000', fontWeight: '600' },
  card: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12, padding: 12, marginHorizontal: 15, marginTop: 12, borderWidth: 1, borderColor: '#ddd', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3,},
  image: { width: 90, height: 90, borderRadius: 8 },
  cardInfo: { flex: 1, paddingHorizontal: 10 },
  title: { fontWeight: 'bold', fontSize: 14 },
  sub: { fontSize: 12, color: '#555' },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  icon14: { width: 14, height: 14, marginRight: 4, resizeMode: 'contain' },
  rating: { fontSize: 12, color: '#333' },
  price: { fontWeight: 'bold', marginTop: 5 },
  rightActions: { position: 'absolute', right: 12, bottom: 12, flexDirection: 'row', alignItems: 'center' },
  detailBtn: { backgroundColor: '#b30000', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 },
  detailText: { color: '#fff', fontSize: 11 },
  modalBg: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.3)' },
  bottomSheet: { backgroundColor: '#fff', borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 20, minHeight: '65%' },
  exitBtn: { position: 'absolute', top: 10, left: 10, zIndex: 10, padding: 10 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  selectedBox: { borderWidth: 1, borderColor: '#ccc', borderRadius: 12, height: 180, padding: 10, marginBottom: 15 },
  scrollBox: { maxHeight: 130 },
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 },
  tag: { backgroundColor: '#eee', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6, margin: 4 },
  actions: { flexDirection: 'row', justifyContent: 'flex-end', gap: 15, marginTop: 10 },
  clear: { color: 'blue', fontWeight: 'bold' },
  done: { color: '#000', fontWeight: 'bold' },
  summary: { fontSize: 14, color: '#333' },
  tabGroup: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  tab: { flex: 1, paddingVertical: 10, marginHorizontal: 4, backgroundColor: '#f2f2f2', borderRadius: 10, alignItems: 'center' },
  tabActive: { backgroundColor: '#d9d9d9' },
  tabText: { color: '#666' },
  tabTextActive: { fontWeight: 'bold', color: '#000' },
});

export default ProductListScreen;
