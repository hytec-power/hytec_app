import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';


export default function PrincipalDetailScreenAmatrol({ route, navigation }) {
    const { principal } = route.params;
    const [activeTab, setActiveTab] = useState('Description');
    const [productFilter, setProductFilter] = useState('Popular');

    const tabs = ['Description', 'Products', 'Categories'];
    const productFilters = ['Popular', 'Latest', 'Top Sales', 'Price'];

    const recommendedItems = Array.from({ length: 10 }, (_, i) => ({
        id: `r${i + 1}`,
        name: 'Analog Communication Technician',
        price: '₱1,320,000',
        discount: '-54%',
        image: require('../../assets/images/ACDC.png'),
        rating: 4.9,
        sold: '2.9k',
    }));

    const categories = [
        { id: 'c1', title: 'Electrical Systems', count: 18, image: require('../../assets/images/Electrical.png') },
        { id: 'c2', title: 'Mechanical Systems', count: 12, image: require('../../assets/images/Mechanical.png') },
        { id: 'c3', title: 'Automation Systems', count: 10, image: require('../../assets/images/Automation.png') },
        { id: 'c4', title: 'Electronic Systems', count: 8, image: require('../../assets/images/Electronics.png') },
    ];

    const parsePrice = (priceStr) => parseFloat(priceStr.replace(/[₱,]/g, '')) || 0;


    const getFilteredProducts = () => {
        switch (productFilter) {
            case 'Latest': return [...recommendedItems].reverse();
            case 'Top Sales': return [...recommendedItems].sort((a, b) => parseFloat(b.sold) - parseFloat(a.sold));
            case 'Price': return [...recommendedItems].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
            default: return recommendedItems;
        }
    };

    const handleCategoryPress = (category) => Alert.alert('Category Selected', category.title);


    const videos = [
        { id: 1, title: 'Interactive eLearning', url: 'https://youtu.be/EMkeVSwQg0E?si=ES-c7vaKlZeuK6rI' },
        { id: 2, title: 'Virtual Training Systems', url: 'https://www.youtube.com/watch?v=jS0w1lhMK2c' },
        { id: 3, title: 'Advanced Mechatronics Training', url: 'https://www.youtube.com/watch?v=2UXpuFKt1KU' },
    ];

    const featuredPosts = [
        { id: 'f1', title: 'Industry 4.0 in Education', snippet: 'Amidst the confusion caused by...', image: require('../../assets/images/temp/post1.png') },
        { id: 'f2', title: 'New Mechatronics Series', snippet: 'Are electric vehicles (EVs)...', image: require('../../assets/images/temp/post2.png') },
    ];

    const trainingPrograms = [
        {
            id: 'tp1',
            title: 'Model: M33358',
            tab: 'Hands-On Workstations',
            description: 'Amatrol’s Portable Process Control Troubleshooting Learning System provides a skill-rich, portable troubleshooting training system for two of the most common types...',
            image: require('../../assets/images/temp/factory1.png'),
        },
        {
            id: 'tp2',
            title: 'Model: M19174',
            tab: 'eLearning Courses',
            description: 'This eLearning course introduces core industrial automation principles using interactive multimedia and simulations...',
            image: require('../../assets/images/temp/factory2.png'),
        },
        {
            id: 'tp3',
            title: 'Model: M33358',
            tab: 'Certification Training Programs',
            description: 'Designed to prepare students for industry-recognized certifications in mechatronics and advanced manufacturing...',
            image: require('../../assets/images/temp/factory1.png'),
        },
        {
            id: 'tp4',
            title: 'Model: M19174',
            tab: 'Highschool Programs',
            description: 'A complete foundational technical training suite for high school STEM programs.',
            image: require('../../assets/images/temp/factory2.png'),
        },
        {
            id: 'tp5',
            title: 'Model: M33358',
            tab: 'Industry Programs',
            description: 'Customizable programs for upskilling your current industrial workforce with modern manufacturing skills.',
            image: require('../../assets/images/temp/factory1.png'),
        },

        {
            id: 'tp6',
            title: 'Model: M19174',
            tab: 'Hands-On Workstations',
            description: 'This is a placeholder training model for layout testing purposes.',
            image: require('../../assets/images/temp/factory2.png'),
        },
        {
            id: 'tp7',
            title: 'Model: M33358',
            tab: 'Industry Programs',
            description: 'Another placeholder program card for design spacing and preview testing.',
            image: require('../../assets/images/temp/factory1.png'),
        }
    ];



    const handlePostPress = (post) => {
        Alert.alert('Post Selected', post.title);
    };

    const trainingTabs = [
        'eLearning Courses',
        'Hands-On Workstations',
        'Certification Training Programs',
        'Highschool Programs',
        'Industry Programs'
    ];

    const [activeTrainingTab, setActiveTrainingTab] = useState('All');

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

            {/* Main Content */}
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                {/* Principal Image & Tabs */}
                <View style={styles.card}>
                    <Image source={principal.image} style={styles.companyImage} resizeMode="cover" />
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

                {/* Description Tab */}
                {activeTab === 'Description' && (
                    <>
                        {/* About */}
                        <View style={{ paddingHorizontal: 20 }}>
                            <View style={styles.aboutImageWrapper}>
                                <Image source={require('../../assets/images/blurredImage.png')} style={styles.aboutImageFull} />
                                <View style={styles.overlayTextContainer}>
                                    <Text style={styles.overlayTitle}>About Amatrol</Text>
                                    <Text style={styles.overlayDescription}>
                                        Amatrol is a global leader in career and technical education (CTE), providing hands-on and interactive training solutions...
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* Preview Videos */}
                        <View style={styles.previewCard}>
                            <Text style={styles.previewTitle}>PREVIEW</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.videoScrollContainer}>
                                {videos.map((video) => (
                                    <View key={video.id} style={styles.videoWrapper}>
                                        <WebView
                                            source={{ uri: video.url }}
                                            javaScriptEnabled
                                            domStorageEnabled
                                            style={styles.videoPlayer}
                                            allowsFullscreenVideo={true}
                                        />
                                    </View>
                                ))}
                            </ScrollView>
                        </View>

                        {/* Featured Posts */}
                        <View style={styles.featuredSection}>
                            <Text style={styles.featuredTitle}>FEATURED POSTS</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.featuredScrollContainer}>
                                {featuredPosts.map((post) => (
                                    <TouchableOpacity
                                        key={post.id}
                                        style={styles.featuredCard}
                                        onPress={() =>
                                            post.id === 'f1' || post.title.includes('Industry 4.0')
                                                ? navigation.navigate('Industry4Screen', { post })
                                                : Alert.alert('Post Selected', post.title)
                                        }
                                    >
                                        <Image source={post.image} style={styles.featuredImage} />
                                        <Text style={styles.featuredCardTitle}>{post.title}</Text>
                                        <Text numberOfLines={3} style={styles.featuredSnippet}>{post.snippet}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>

                        {/* Training Programs */}
                        <View style={styles.trainingSection}>
                            <View style={styles.trainingCardWrapper}>
                                {/* Vertical Tabs */}
                                <View style={styles.trainingTabsColumn}>
                                    {trainingTabs.map((tab) => (
                                        <TouchableOpacity
                                            key={tab}
                                            style={[
                                                styles.trainingTabButton,
                                                activeTrainingTab === tab && styles.activeTrainingTabButton,
                                            ]}
                                            onPress={() => setActiveTrainingTab(tab)}
                                        >
                                            <Text
                                                style={[
                                                    styles.trainingTabText,
                                                    activeTrainingTab === tab && styles.activeTrainingTabText,
                                                ]}
                                            >
                                                {tab}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>

                                {/* Scrollable Cards */}
                                <ScrollView
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={styles.trainingScrollContainer}
                                >
                                    {trainingPrograms
                                        .filter(
                                            (program) =>
                                                activeTrainingTab === 'All' || program.tab === activeTrainingTab
                                        )
                                        .map((program) => (
                                            <TouchableOpacity
                                                key={program.id}
                                                style={styles.trainingCard}
                                                onPress={() => navigation.navigate('M33358', { program })}
                                            >
                                                <Image source={program.image} style={styles.trainingImage} />
                                                <Text style={styles.trainingCardTitle}>{program.title}</Text>
                                                <Text style={styles.trainingCardDescription} numberOfLines={4}>
                                                    {program.description}
                                                </Text>
                                            </TouchableOpacity>

                                        ))}

                                </ScrollView>



                            </View>
                        </View>

                        {/* Core Values Card */}
                        <View style={styles.coreValuesCard}>
                            <Text style={styles.coreValuesTitle}>CORE VALUES</Text>
                            <Text style={styles.coreValuesParagraph}>
                                {'\u2022'} <Text style={styles.coreValuesBulletTitle}>Do the right thing:</Text> Show integrity by making positive, ethical decisions with long term relationships in mind. Seek the best solution for all.
                            </Text>
                            <Text style={styles.coreValuesParagraph}>
                                {'\u2022'} <Text style={styles.coreValuesBulletTitle}>Respect others:</Text> Act with honor. Be a role model for others with a positive, energizing attitude. Provide good stewardship of resources.
                            </Text>

                            <Text style={styles.coreValuesParagraph}>
                                {'\u2022'} <Text style={styles.coreValuesBulletTitle}>Be responsible:</Text> Keep commitments large and small. Earn and build enduring trust through steadfast commitment and reliable results.
                            </Text>

                            <Text style={styles.coreValuesParagraph}>
                                {'\u2022'} <Text style={styles.coreValuesBulletTitle}>Achieve excellence:</Text> Excel by delivering quality with speed and agility in all aspects of our business – products, processes, people, and services. Recognize our clients’ successes as the best measure of our own success.
                            </Text>

                            <Text style={styles.coreValuesParagraph}>
                                {'\u2022'} <Text style={styles.coreValuesBulletTitle}>Improve and grow:</Text> Aggressively improve our abilities and effectiveness by being lifelong learners, both personally and professionally. Lead by enthusiastically pursuing new ideas and new responsibilities, while learning from our experiences.
                            </Text>

                            <Text style={styles.coreValuesParagraph}>
                                {'\u2022'} <Text style={styles.coreValuesBulletTitle}>Communicate and collaborate:</Text> Create a partnership environment where we collaborate closely with our clients, team members, suppliers, and others to create outstanding products and services. Use extensive and open communications to maximize our effectiveness.
                            </Text>
                        </View>




                    </>
                )}

                {/* Products Tab */}
                {activeTab === 'Products' && (
                    <View style={styles.productsContainer}>
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

                        {getFilteredProducts().map((item) => (
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

                {/* Categories Tab */}
                {activeTab === 'Categories' && (
                    <View style={styles.productsContainer}>
                        {categories.map((cat) => (
                            <TouchableOpacity key={cat.id} onPress={() => handleCategoryPress(cat)} style={styles.categoryCard}>
                                <Image source={cat.image} style={styles.productImage} />
                                <View style={styles.productDetails}>
                                    <Text style={styles.productTitle}>{cat.title}</Text>
                                    <Text style={{ fontSize: 12, color: '#777' }}>{cat.count} items</Text>
                                </View>
                                <Ionicons name="chevron-forward" size={20} color="#888" />
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    // ====== Global Container ======
    container: { flex: 1, backgroundColor: '#fff' },

    // ====== Header ======
    header: {
        backgroundColor: '#640000',
        paddingTop: 60,
        paddingBottom: 20,
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

    // ====== Principal Card (Image + Tabs) ======
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        margin: 16,
        elevation: 5,
    },
    companyImage: {
        width: '100%',
        height: 180,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
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
    tabText: { color: '#333' },
    activeTabButton: {
        backgroundColor: '#fff',
    },
    activeTabText: {
        color: '#640000',
        fontWeight: 'bold',
    },

    // ====== About Section ======
    aboutImageWrapper: {
        position: 'relative',
        width: '111%',
        height: 210,
        alignSelf: 'center',
        marginVertical: 20,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    aboutImageFull: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlayTextContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    overlayTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#CA272C',
        textAlign: 'center',
    },
    overlayDescription: {
        fontSize: 10,
        color: '#000',
        lineHeight: 14,
        textAlign: 'center',
        paddingHorizontal: 9,
        fontWeight: 'bold',
    },

    // ====== Preview Videos ======
    previewCard: {
        backgroundColor: '#b30000',
        paddingVertical: 16,
        marginBottom: 20,
        width: '100%',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    previewTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    videoScrollContainer: {
        paddingLeft: 16,
        paddingRight: 8,
    },
    videoWrapper: {
        width: 310,
        height: 240,
        marginRight: 40,
        overflow: 'hidden',
        marginBottom: 10,
    },
    videoPlayer: {
        flex: 1,
        borderRadius: 10,
    },
    videoCardTitle: {
        padding: 6,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },

    // ====== Featured Posts ======
    featuredSection: {
        marginTop: 10,
    },
    featuredTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        marginLeft: 16,
    },
    featuredScrollContainer: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    featuredCard: {
        width: 260,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginRight: 12,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        paddingBottom: 10,
        marginBottom: 20,
    },
    featuredImage: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
    },
    featuredCardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 8,
        marginHorizontal: 10,
        color: '#B30000',
    },
    featuredSnippet: {
        fontSize: 12,
        color: '#444',
        marginHorizontal: 10,
        marginTop: 4,
        textAlign: 'justify',
    },

    // ====== Training Programs ======
    trainingSection: {
        backgroundColor: '#BC1010',
        marginTop: 20,
    },
    trainingCardWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    trainingTabsColumn: {
        width: 190,
        marginRight: 12,
    },
    trainingTabButton: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 60,
        width: '100%',
    },
    activeTrainingTabButton: {
        backgroundColor: '#BC1010',
    },
    trainingTabText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    activeTrainingTabText: {
        color: '#fff',
    },
    trainingScrollContainer: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    trainingCard: {
        width: 160,
        height: 265,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginRight: 20,
        overflow: 'hidden',
        paddingBottom: 10,
        marginTop: 20,
    },
    trainingImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    trainingCardTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 8,
        marginHorizontal: 10,
        color: '#000',
    },

    trainingCardDescription: {
        fontSize: 10,
        color: '#444',
        marginHorizontal: 12,
        marginTop: 4,
        lineHeight: 12,
        height: 90,
    },

    // ====== Products Tab ======
    productFilterTabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
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
    productCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        alignItems: 'center',
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

    // ====== Categories ======
    categoryCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        alignItems: 'center',
    },

    // ====== Utilities ======
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'left',
        color: '#333',
    },

    // ====== Core Values ======
    coreValuesBulletTitle: {
        fontWeight: 'bold',
        color: '#000',
    },
    coreValuesCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginHorizontal: 16,
        marginTop: 20,
        padding: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    coreValuesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#640000',
        marginBottom: 20,
        textAlign: 'center',
    },
    coreValuesParagraph: {
        fontSize: 13,
        color: '#333',
        lineHeight: 20,
        marginBottom: 10,
        textAlign: 'justify',
        textAlign: 'center',
    },

});

