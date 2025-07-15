import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NewsScreen({ navigation, route }) {
    const { image } = route.params || {};

    const images = [
        require('../assets/images/NewsPicture1.png'),
        require('../assets/images/NewsPicture2.png'),
        require('../assets/images/NewsPicture3.png'),
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>News</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {image ? (
                    <View style={styles.newsCard}>
                        <Image source={image} style={styles.newsImage} resizeMode="contain" />
                    </View>
                ) : (
                    images.map((imgSrc, index) => (
                        <View key={index} style={styles.newsCard}>
                            <Image source={imgSrc} style={styles.newsImage} resizeMode="contain" />
                        </View>
                    ))
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerBar: {
        width: '100%',
        height: 140,
        backgroundColor: '#640000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingHorizontal: 20,
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        left: 20,
        top: 60,
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        padding: 20,
    },
    newsCard: {
        backgroundColor: '#f5f5f5',
        marginBottom: 20,
        alignItems: 'center',
        padding: 10,
    },
    newsImage: {
        width: '100%',
        height: 505,
    },
});
// This code defines a NewsScreen component that displays a list of news articles.