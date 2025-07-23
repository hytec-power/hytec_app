import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const savedItems = [
    {
        id: '1',
        title: 'Antenna Systems Technician',
        country: 'South Korea',
        rating: 4.5,
        image: require('../assets/images/antenna.png'),
    },
    {
        id: '2',
        title: 'Analog Communication Technician',
        country: 'Malaysia',
        rating: 4.5,
        image: require('../assets/images/analog.png'),
    },
];

export default function SavedScreen({ navigation }) {
    const handleCardPress = (item) => {
        console.log('Pressed:', item.title);
        // navigation.navigate('ProductDetailScreen', { product: item });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Saved</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.sectionTitle}>Products</Text>

                {savedItems.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.card}
                        onPress={() => handleCardPress(item)}
                        activeOpacity={0.8}
                    >
                        <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <View style={styles.row}>
                                <Ionicons name="location-sharp" size={14} color="#888" />
                                <Text style={styles.location}>{item.country}</Text>
                            </View>
                            <View style={styles.row}>
                                <FontAwesome name="star" size={14} color="#D32F2F" />
                                <Text style={styles.rating}>{item.rating}</Text>
                            </View>
                        </View>
                        <FontAwesome name="bookmark" size={20} color="#D32F2F" style={styles.bookmarkIcon} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: '#640000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
    backButton: {
        position: 'absolute',
        left: 16,
        top: 25,
        zIndex: 1,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    cardImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 12,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    location: {
        fontSize: 12,
        color: '#888',
        marginLeft: 4,
    },
    rating: {
        fontSize: 12,
        color: '#444',
        marginLeft: 4,
    },
    bookmarkIcon: {
        marginLeft: 8,
    },
});
