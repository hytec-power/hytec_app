import React, { useState, useEffect } from 'react';
import {
    View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PrincipalDetailScreen({ route, navigation }) {
    const { principal } = route.params;
    const [activeTab, setActiveTab] = useState('Shop');
    const tabs = ['Shop', 'Products', 'Categories'];
    const [timeLeft, setTimeLeft] = useState(3600);
    const [currentPrincipal, setCurrentPrincipal] = useState(principal);
    const [productFilter, setProductFilter] = useState('Popular');
    const productFilters = ['Popular', 'Latest', 'Top Sales', 'Price'];

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        setCurrentPrincipal(route.params.principal);
    }, [route.params.principal]);

    const formatTime = (seconds) => {
        const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    const handleCategoryPress = (category) => {
        Alert.alert('Category Selected', category.title);
    };

    const flashDeal = {
        id: 'f1',
        name: 'AC/DC Electrical Systems',
        price: '₱1,320,000',
        oldPrice: '₱2,000,000',
        discount: '50%',
        rating: 5,
        image: require('../assets/images/ACDC.png'),
    };

    const recommendedItems = Array.from({ length: 20 }, (_, i) => ({
        id: `r${i + 1}`,
        name: 'Analog Communication Technician',
        price: '₱1,320,000',
        discount: '-54%',
        image: require('../assets/images/ACDC.png'), // You can replace with the correct image later
        rating: 4.9,
        sold: '2.9k',
    }));
    const parsePrice = (priceStr) => {
        return parseFloat(priceStr.replace(/[₱,]/g, '')) || 0;
    };

    const getFilteredProducts = () => {
        switch (productFilter) {
            case 'Latest':
                return [...recommendedItems].sort((a, b) => b.id.localeCompare(a.id));
            case 'Top Sales':
                return [...recommendedItems].sort((a, b) =>
                    parseFloat(b.sold.replace('k', '')) - parseFloat(a.sold.replace('k', ''))
                );
            case 'Price':
                return [...recommendedItems].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
            default:
                return recommendedItems;
        }
    };
    // Sample categories data popular
    const popularCategories = [
        {
            id: 'c1',
            title: 'Electrical Systems',
            count: 18,
            image: require('../assets/images/Electrical.png'),
        },
        {
            id: 'c2',
            title: 'Mechanical Systems',
            count: 12,
            image: require('../assets/images/Mechanical.png'),
        },
        {
            id: 'c3',
            title: 'Automation Systems',
            count: 10,
            image: require('../assets/images/Automation.png'),
        },
        {
            id: 'c4',
            title: 'Electronic Systems',
            count: 8,
            image: require('../assets/images/Electronics.png'),
        },
    ];

    const categories = [
        {
            id: 'c1',
            title: 'Electrical Systems',
            count: 18,
            image: require('../assets/images/Electrical.png'),
        },
        {
            id: 'c2',
            title: 'Mechanical Systems',
            count: 12,
            image: require('../assets/images/Mechanical.png'),
        },
        {
            id: 'c3',
            title: 'Automation Systems',
            count: 10,
            image: require('../assets/images/Automation.png'),
        },
        {
            id: 'c4',
            title: 'Electronic Systems',
            count: 8,
            image: require('../assets/images/Electronics.png'),
        },
    ];

    const renderStars = (count) => {
        return [...Array(5)].map((_, i) => (
            <Ionicons
                key={i}
                name={i < count ? 'star' : 'star-outline'}
                size={14}
                color="#FFD700"
            />
        ));
    };

    const BuyNowButton = () => (
        <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buyNowText}>BUY NOW</Text>
            <Ionicons name="arrow-forward" size={14} color="#fff" style={{ marginLeft: 4 }} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>{principal.name}</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                {/* Image + Tabs Card */}
                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image source={principal.image} style={styles.companyImage} resizeMode="cover" />
                        <TouchableOpacity style={styles.leftArrow}>
                            <Ionicons name="chevron-back" size={28} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.rightArrow}>
                            <Ionicons name="chevron-forward" size={28} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tabRow}>
                        {tabs.map((tab) => (
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
                </View>

                {/* TAB: Shop */}
                {activeTab === 'Shop' && (
                    <>
                        {/* FLASH DEALS */}
                        <View style={styles.flashHeader}>
                            <View style={styles.flashTitleGroup}>
                                <Text style={styles.flashTitle}>FLASH DEALS</Text>
                                <View style={styles.timerRow}>
                                    {formatTime(timeLeft).split(':').map((unit, index) => (
                                        <View key={index} style={styles.timerBox}>
                                            <Text style={styles.timerText}>{unit}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                            <TouchableOpacity style={styles.vendorButton}>
                                <Text style={styles.flashVendor}>E-Hytec</Text>
                                <Ionicons name="chevron-forward" size={16} color="#B30000" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.flashCard}>
                            <View style={styles.flashImageWrapper}>
                                <Image source={flashDeal.image} style={styles.flashImage} />
                            </View>
                            <View style={styles.flashContent}>
                                <Text style={styles.flashName}>{flashDeal.name}</Text>
                                <Text style={styles.flashPrice}>{flashDeal.price}</Text>
                                <View style={styles.starRow}>{renderStars(flashDeal.rating)}</View>
                                <View style={styles.priceRow}>
                                    <Text style={styles.oldPrice}>{flashDeal.oldPrice}</Text>
                                    <Text style={styles.discount}>{flashDeal.discount}</Text>
                                </View>
                            </View>
                        </View>

                        {/* RECOMMENDED */}
                        <View style={styles.recommendedHeader}>
                            <Text style={styles.recommendedTitle}>Recommended For You</Text>
                            <TouchableOpacity style={styles.vendorButton}>
                                <Text style={styles.flashVendor}>E-Hytec</Text>
                                <Ionicons name="chevron-forward" size={16} color="#B30000" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.recommendWrapper}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 16 }}>
                                {getFilteredProducts().map((item) => (
                                    <View key={item.id} style={styles.recommendCard}>
                                        <Image source={item.image} style={styles.recommendImage} />
                                        <Text style={styles.recommendName}>{item.name}</Text>
                                        <View style={styles.recommendPriceRow}>
                                            <Text style={styles.recommendPrice}>{item.price}</Text>
                                            <Text style={styles.recommendDiscount}>{item.discount}</Text>
                                        </View>
                                        <Text style={styles.exclusiveBadge}>77 EXCLUSIVE!</Text>
                                        <View style={styles.ratingRow}>
                                            <Ionicons name="star" size={12} color="#FFD700" />
                                            <Text style={styles.ratingText}>{item.rating}</Text>
                                            <Text style={styles.soldText}>{item.sold} sold</Text>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                        {/* NEW ARRIVAL SECTION */}
                        <View style={styles.newArrivalContainer}>
                            <View style={styles.newArrivalHeader}>
                                <Text style={styles.newArrivalText}>NEW ARRIVAL</Text>
                            </View>

                            {/* Card 1 */}
                            <View style={styles.newArrivalCard}>
                                <View style={styles.arrivalTextSection}>
                                    <View style={styles.arrivalLabel}>
                                        <Text style={styles.arrivalLabelText}>95-ME5AI-XCE</Text>
                                    </View>
                                    <Text style={styles.arrivalDesc}>Predictive Maintenance Vibration Analysis Learning System</Text>
                                    <TouchableOpacity style={styles.buyNowButton}>
                                        <Text style={styles.buyNowText}>BUY NOW</Text>
                                        <Ionicons name="arrow-forward" size={14} color="#fff" style={{ marginLeft: 4 }} />
                                    </TouchableOpacity>
                                </View>
                                <Image source={require('../assets/images/NEW1.png')} style={styles.arrivalImage} />
                            </View>

                            {/* Card 2 */}
                            <View style={styles.newArrivalCard}>
                                <View style={styles.arrivalTextSection}>
                                    <View style={styles.arrivalLabel}>
                                        <Text style={styles.arrivalLabelText}>3:00</Text>
                                    </View>
                                    <Text style={styles.arrivalDesc}>87-MS2, Gauging, 870 Mechatronics Learning System</Text>
                                    <BuyNowButton />
                                </View>
                                <Image source={require('../assets/images/NEW2.png')} style={styles.arrivalImage} />
                            </View>
                        </View>

                    </>
                )}

                {/* TAB: Products */}
                {activeTab === 'Products' && (
                    <View style={styles.productsContainer}>
                        {/* Filter Tabs */}
                        <View style={styles.productFilterTabs}>
                            {productFilters.map((filter, index) => (
                                <React.Fragment key={filter}>
                                    <TouchableOpacity onPress={() => setProductFilter(filter)}>
                                        <Text style={[styles.productFilterText, productFilter === filter && styles.activeProductFilterText]}>
                                            {filter}
                                        </Text>
                                    </TouchableOpacity>
                                    {index !== productFilters.length - 1 && <Text style={styles.verticalDivider}>|</Text>}
                                </React.Fragment>
                            ))}
                        </View>



                        {/* Product List */}
                        {recommendedItems.map((item) => (
                            <View key={item.id} style={styles.productCard}>
                                <Image source={item.image} style={styles.productImage} />
                                <View style={styles.productDetails}>
                                    <Text style={styles.productTitle}>{item.name}</Text>
                                    <View style={styles.productRatingRow}>
                                        <Ionicons name="star" size={14} color="#FF3D00" />
                                        <Text style={styles.productRatingText}>{item.rating}</Text>
                                    </View>
                                    <View style={styles.productPriceRow}>
                                        <Text style={styles.productOldPrice}>₱2,000,000</Text>
                                        <Text style={styles.productDiscount}>-32%</Text>
                                    </View>
                                    <Text style={styles.productPrice}>{item.price}</Text>
                                </View>
                                <TouchableOpacity style={styles.productBuyButton}>
                                    <Text style={styles.productBuyButtonText}>Buy Now</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>

                )}

                {/* TAB: Categories */}
                {activeTab === 'Categories' && (
                    <View style={styles.categoryContainer}>
                        {categories.map((cat) => (
                            <TouchableOpacity
                                key={cat.id}
                                onPress={() => handleCategoryPress(cat)}
                                style={styles.categoryCard}
                            >
                                <Image source={cat.image} style={styles.categoryImage} />
                                <View style={styles.categoryTextGroup}>
                                    <Text style={styles.categoryTitle}>{cat.title}</Text>
                                    <Text style={styles.categoryItemCount}>{cat.count} items</Text>
                                </View>
                                <Ionicons name="chevron-forward" size={20} color="#888" />
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
                {/* TAB: Products */}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: {
        backgroundColor: '#640000',
        paddingTop: 60,
        paddingBottom: 60,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        margin: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
    imageContainer: { position: 'relative' },
    companyImage: {
        width: '100%',
        height: 180,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    leftArrow: {
        position: 'absolute',
        top: '50%',
        left: 12,
        transform: [{ translateY: -14 }],
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 20,
        padding: 4,
    },
    rightArrow: {
        position: 'absolute',
        top: '50%',
        right: 12,
        transform: [{ translateY: -14 }],
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 20,
        padding: 4,
    },
    tabRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#e0e0e0',
        borderRadius: 3,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 16,
        alignItems: 'center',
        borderRadius: 16,
        marginHorizontal: 16,
    },
    activeTabButton: {
        backgroundColor: '#fff',
    },
    tabText: { color: '#333' },
    activeTabText: {
        color: '#640000',
        fontWeight: 'bold',
    },
    flashHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginTop: 10,
        marginBottom: 2,
        borderRadius: 8,
    },
    flashTitleGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    flashTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#B30000',
    },
    timerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    timerBox: {
        backgroundColor: '#000',
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 4,
        minWidth: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    vendorButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    flashVendor: {
        color: '#B30000',
        fontSize: 14,
    },
    flashCard: {
        backgroundColor: '#EEEEEE',
        marginHorizontal: 0,
        padding: 20,
        borderRadius: 0,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    flashImageWrapper: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 1,
    },
    flashImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    flashContent: { flex: 1 },
    flashName: {
        fontSize: 18,
        marginBottom: 30,
        fontWeight: 'light bold',
    },
    flashPrice: {
        color: '#B30000',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    starRow: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        color: '#777',
        fontSize: 13,
    },
    discount: {
        fontSize: 13,
        color: '#B30000',
        fontWeight: '600',
    },
    recommendedHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        marginTop: 16,
        padding: 10,
        paddingRight: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    recommendedTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    recommendWrapper: {
        backgroundColor: '#CCCCCC',
        paddingVertical: 16,
    },
    recommendCard: {
        backgroundColor: '#fff',
        marginRight: 12,
        padding: 12,
        borderRadius: 12,
        width: 180,
    },
    recommendImage: {
        width: '100%',
        height: 120,
        resizeMode: 'contain',
    },
    recommendName: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 8,
    },
    recommendPriceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 4,
    },
    recommendPrice: {
        fontSize: 14,
        color: '#B30000',
        fontWeight: 'bold',
    },
    recommendDiscount: {
        fontSize: 12,
        color: '#B30000',
        fontWeight: 'bold',
        backgroundColor: '#FDEDED',
    },
    exclusiveBadge: {
        fontSize: 11,
        color: '#B30000',
        fontWeight: '600',
        borderWidth: 1,
        borderColor: '#B30000',
        paddingHorizontal: 4,
        paddingVertical: 2,
        alignSelf: 'flex-start',
        marginTop: 4,
        backgroundColor: '#D9D9D9',
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginTop: 6,
    },
    ratingText: {
        fontSize: 11,
        color: '#000',
    },
    soldText: {
        fontSize: 11,
        color: '#555',
    },
    categoryContainer: {
        padding: 16,
        backgroundColor: '#F2F2F2',
    },
    categoryCard: {
        backgroundColor: '#E0E0E0',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 12,
        marginBottom: 12,
    },
    categoryImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 12,
    },
    categoryTextGroup: {
        flex: 1,
    },
    categoryTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    categoryItemCount: {
        fontSize: 12,
        color: '#666',
    },
    newArrivalContainer: {
        backgroundColor: '#B30000',
        padding: 16,
        paddingBottom: 32,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    newArrivalHeader: {
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginBottom: 16,
    },
    newArrivalText: {
        color: '#B30000',
        fontWeight: 'bold',
        fontSize: 16,
    },
    newArrivalCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    arrivalTextSection: {
        flex: 1,
        paddingRight: 10,
    },
    arrivalLabel: {
        width: 90,
        height: 90,
        borderRadius: 75,
        borderWidth: 1.5,
        borderColor: '#B30000',
        borderStyle: 'dashed', // this simulates dotted
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        backgroundColor: '#BC1010',
    },
    arrivalLabelText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    arrivalDesc: {
        fontSize: 12,
        color: '#BC1010',
        marginBottom: 8,
        marginRight: 16,
        marginLeft: 8,
    },
    buyButton: {
        backgroundColor: '#B30000',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        alignSelf: 'flex-start',
        marginLeft: 0,
    },
    buyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },

    buyNowButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#B30000',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginTop: 8,
    },
    buyNowText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },

    arrivalImage: {
        width: 160,
        height: 160,
        resizeMode: 'contain',
    },
    productsContainer: {
        padding: 16,
        backgroundColor: '#F2F2F2',
    },
    productFilterTabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    productFilterButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    productFilterText: {
        fontSize: 14,
        color: '#6e6eaf',
        paddingHorizontal: 8,
    },
    productCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 1,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 12,
        resizeMode: 'contain',
    },
    productDetails: {
        flex: 1,
    },
    productTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 4,
    },
    productRatingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    productRatingText: {
        marginLeft: 4,
        fontSize: 12,
        color: '#333',
    },
    productPriceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
    productOldPrice: {
        textDecorationLine: 'line-through',
        color: '#999',
        fontSize: 12,
        marginRight: 8,
    },
    productDiscount: {
        fontSize: 12,
        color: '#FF3D00',
        fontWeight: 'bold',
        backgroundColor: '#FDEDED',
    },
    productPrice: {
        fontSize: 14,
        color: '#B30000',
        fontWeight: 'bold',
    },
    productBuyButton: {
        backgroundColor: '#C73232',
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 55,
    },
    productBuyButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    activeProductFilterText: {
        color: '#B30000',
        fontWeight: 'bold',
    },
    productFilterTabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    productFilterText: {
        fontSize: 14,
        color: '#6B648B',
        paddingHorizontal: 8,
    },
    activeProductFilterText: {
        color: '#BC1010',
        fontWeight: 'bold',
    },
    verticalDivider: {
        color: '#bbb',
        paddingHorizontal: 8,
        fontSize: 14,
    },
});
