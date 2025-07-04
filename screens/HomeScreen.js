import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    StyleSheet,
    Image,
    TextInput,
    Text,
    TouchableOpacity,
    FlatList,
    Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
    const categories = [
        { id: '1', name: 'E-Hytec', icon: require('../assets/images/e-hytec.png') },
        { id: '2', name: 'OWP', icon: require('../assets/images/owp.png') },
        { id: '3', name: 'Cyber Tech', icon: require('../assets/images/cybertech.png') },
    ];

    const principals = [
        { id: '1', image: require('../assets/images/principals/Amatrol_Logo.png') },
        { id: '2', image: require('../assets/images/principals/VCom_Logo.png') },
        { id: '3', image: require('../assets/images/principals/Tag_Logo.png') },
        { id: '4', image: require('../assets/images/principals/Float_Logo.png') },
        { id: '5', image: require('../assets/images/principals/Gott_Logo.png') },
    ];

    const newsItems = [
        {
            id: '1',
            title: 'SINGLE ACTING, PANCAKE LOCKING COLLAR TONNAGE',
            range: 'RANGE: 61–513 TONS',
            model: 'Model: RGP5652, RGP2202',
        },
        {
            id: '2',
            title: 'AIR HANDLING AND AIR DISTRIBUTION SYSTEM UNITS',
            range: 'RANGE: 73–921 TONS',
            model: 'Model: RCO–ADS–XC',
        },
    ];

    const handleCategoryPress = (categoryName) => {
        if (categoryName === 'Cyber Tech') {
            Linking.openURL('https://hpicybertech.institute');
        } else {
            console.log(Pressed ,{categoryName});
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <View style={styles.headerBar}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/menu_placeholder.png')}
                            style={styles.menuIcon}
                        />
                    </TouchableOpacity>
                    <Image
                        source={require('../assets/images/hytec_logo.png')}
                        style={styles.logo}
                    />
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/profile_placeholder.png')}
                            style={styles.profilePic}
                        />
                    </TouchableOpacity>
                </View>

                {/* Search */}
                <View style={styles.searchContainer}>
                    <Image
                        source={require('../assets/images/search_icon.png')}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search any products"
                        placeholderTextColor="#999"
                    />
                </View>

                {/* CEO Card */}
                <LinearGradient
                    colors={['#CA0000', '#640000']}
                    start={{ x: 0, y: 1.5 }}
                    end={{ x: 0.3, y: 0 }}
                    style={styles.ceoCard}
                >
                    <View style={styles.ceoContent}>
                        <View style={styles.ceoTextContainer}>
                            <Text style={styles.ceoText}>Engr. Eric Jude S. Soliman</Text>
                            <Text style={styles.ceoSubText}>CEO, Hytec Power Incorporated</Text>
                            <TouchableOpacity style={styles.viewMoreBtn}>
                                <Text style={styles.viewMoreText}>View More</Text>
                            </TouchableOpacity>
                        </View>
                        <Image
                            source={require('../assets/images/president_image.png')}
                            style={styles.ceoImage}
                        />
                    </View>
                </LinearGradient>

                {/* Categories */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Categories</Text>
                    <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
                </View>

                <View style={styles.categoriesRow}>
                    {categories.map((cat) => (
                        <TouchableOpacity
                            key={cat.id}
                            style={styles.categoryItem}
                            onPress={() => handleCategoryPress(cat.name)}
                        >
                            <Image source={cat.icon} style={styles.categoryIcon} />
                            <Text style={styles.categoryText}>{cat.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Principals */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Principals</Text>
                    <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
                </View>

                <FlatList
                    data={principals}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalList}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.principalItem}>
                            <Image source={item.image} style={styles.principalImage} />
                        </TouchableOpacity>
                    )}
                />

                {/* News */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>News</Text>
                    <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
                </View>

                <FlatList
                    data={newsItems}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalList}
                    renderItem={({ item }) => (
                        <LinearGradient
                            colors={['#CA0000', '#640000']}
                            start={{ x: 0, y: 1.5 }}
                            end={{ x: 0.3, y: 0 }}
                            style={styles.newsGradientCard}
                        >
                            <TouchableOpacity style={styles.newsContent}>
                                <Text style={styles.newsTitle}>{item.title}</Text>
                                <Text style={styles.newsMeta}>{item.range}</Text>
                                <Text style={styles.newsMeta}>{item.model}</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    scrollContent: { alignItems: 'center', paddingBottom: 40 },
    headerBar: {
        width: '100%',
        height: 150,
        backgroundColor: '#640000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    menuIcon: { width: 30, height: 30, resizeMode: 'contain', tintColor: '#fff' },
    logo: { width: 160, height: 70, resizeMode: 'contain' },
    profilePic: {
        width: 40,
        height: 40,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 350,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginTop: -30,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    searchIcon: { width: 25, height: 25, tintColor: '#999', marginRight: 10 },
    searchInput: { flex: 1, fontSize: 16, color: '#000' },
    ceoCard: {
        width: 370,
        height: 180,
        borderRadius: 20,
        marginTop: 30,
        elevation: 3,
        justifyContent: 'center',
    },
    ceoContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    ceoTextContainer: { flex: 1 },
    ceoText: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 3 },
    ceoSubText: { color: '#ccc', fontSize: 12, marginBottom: 8 },
    viewMoreBtn: {
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    viewMoreText: { color: '#CA0000', fontWeight: 'bold', fontSize: 14 },
    ceoImage: { width: 180, height: 180, resizeMode: 'contain', marginLeft: 10 },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 350,
        marginTop: 30,
    },
    sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#000' },
    seeAll: { color: '#CA0000', fontSize: 14 },
    categoriesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        marginTop: 20,
    },
    categoryItem: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        width: 100,
        height: 100,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    categoryIcon: { width: 40, height: 40, resizeMode: 'contain', marginBottom: 5 },
    categoryText: { fontSize: 14, color: '#000' },
    horizontalList: { paddingHorizontal: 10, marginTop: 15 },
    principalItem: { marginRight: 15 },
    principalImage: {
        width: 150,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 15,
        backgroundColor: '#fff',
    },
    newsGradientCard: {
        marginRight: 15,
        borderRadius: 15,
        overflow: 'hidden',
    },
    newsContent: {
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
    },
    newsTitle: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
    newsMeta: { color: '#fff', fontSize: 12, marginTop: 2 },
});