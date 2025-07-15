import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const principals = [
    {
        id: '1',
        name: 'AMATROL',
        since: 'Since 1984',
        country: 'United States',
        description: `Amatrol’s eLearning program meets the challenge for flexible technical training by offering superb technical content depth as well as breadth, strong interactivity for skill development, and excellent assessment and student tracking.`,
        image: require('../assets/images/amatrol.png'),
    },
    {
        id: '2',
        name: 'GOTT',
        since: 'Since 19xx',
        country: 'Malaysia',
        description: `GOTT is a leading brand in educational teaching and training apparatus, known for state-of-the-art quality. We specialize in electronics and electrical training programs, offering turnkey project design, installation, and support.`,
        image: require('../assets/images/gott.png'),
    },
    {
        id: '3',
        name: 'DE LORENZO',
        since: 'Since 19xx',
        country: 'Spain',
        description: `De Lorenzo is the leading Italian company specialised in the design, development and production of technical and vocational training equipment.`,
        image: require('../assets/images/delorenzoglobal.png'),
    },
    {
        id: '4',
        name: 'VCOM',
        since: 'Since 2002',
        country: 'China',
        description: `VCOM specializes in smart education solutions, including simulation labs, vocational education software, and advanced multimedia learning systems widely used in TVET institutions worldwide.`,
        image: require('../assets/images/vcom.png'),
    },
    {
        id: '5',
        name: 'TAG',
        since: 'Since 1985',
        country: 'Philippines',
        description: `TAG Pipe Equipment is a leading manufacturer of pipe cutting and beveling equipment and welding alignment tools designed for heavy-duty industrial use.`,
        image: require('../assets/images/tag.png'),
    },
    {
        id: '6',
        name: 'Float',
        since: 'Since 2015',
        country: 'Philippines',
        description: `Float Resource Management provides resource development, recruitment, and technical training support for the maritime and industrial sectors.`,
        image: require('../assets/images/float.png'),
    },
];

export default function PrincipalsScreen({ navigation }) {
    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Principals</Text>
                    <View style={{ width: 24 }} />
                </View>
            </View>


            {/* Scrollable List of Principals */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {principals.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.card}
                        onPress={() => navigation.navigate('PrincipalDetailScreen', { principal: item })}
                    >
                        <Image source={item.image} style={styles.image} resizeMode="cover" />
                        <View style={styles.cardContent}>
                            <Text style={styles.name}>
                                {item.name}
                                <Text style={styles.since}> {item.since}</Text>
                            </Text>
                            <Text style={styles.country}>Country of origin: {item.country}</Text>
                            <Text style={styles.description} numberOfLines={4}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#640000',
        paddingTop: 60,
        paddingBottom: 60,
        paddingHorizontal: 16,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    scrollContainer: {
        padding: 16,
        paddingBottom: 30,
    },
    card: {
        backgroundColor: '#f7f7f7',
        borderRadius: 16,
        marginBottom: 20,
        overflow: 'hidden',
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 180,
    },
    cardContent: {
        padding: 12,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    since: {
        fontSize: 12,
        fontStyle: 'italic',
        color: 'gray',
    },
    country: {
        fontSize: 14,
        color: 'gray',
        marginTop: 4,
    },
    description: {
        fontSize: 13,
        color: '#333',
        marginTop: 6,
    },
});
