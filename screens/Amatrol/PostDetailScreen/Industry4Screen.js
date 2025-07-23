// screens/PostDetailScreen/Industry4Screen.js

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Industry4Screen({ route, navigation }) {
    const { post } = route.params;

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Amatrol</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {/* Top Image */}
                <Image source={post.image} style={styles.bannerImage} />

                {/* Post Content */}
                <View style={styles.postContent}>

                    <Text style={styles.postTitle}>Electrical Skills Remain in High Demand</Text>
                    <Text style={styles.postParagraph}>
                        Amidst the confusion caused by the Trump administration’s on-again, off-again tariffs and increasingly-isolationist trade policies, manufacturing in America has once again been pushed into the spotlight.
                    </Text>
                    <Text style={styles.postParagraph}>
                        An overwhelming majority of Americans believe more manufacturing jobs would be a good thing. Unfortunately, not nearly as many people seem willing to work those jobs.
                    </Text>
                    <Text style={styles.postParagraph}>
                        Perhaps some of the reticence can be ascribed to long-held, but outdated notions of what a manufacturing job looks like. Manufacturers have struggled to overcome this stigma for decades and progress has been hard to come by.
                    </Text>
                    <Text style={styles.postParagraph}>
                        For today’s students, though, it’s clear that manufacturing offers more choices for good jobs than ever before.
                    </Text>
                    <Text style={styles.postParagraph}>
                        For years, parents and teachers alike have pushed students toward college as the best route to a rewarding career. That trend may finally be shifting, though, as more and more students are choosing to eschew college debt in favor of working in the trades.
                    </Text>
                    <Text style={styles.postParagraph}>
                        While some trades may require some post-secondary education, training, or certification, these career paths put students into well-paying jobs with little to no debt in much less time than a college degree requires.
                    </Text>
                    <Text style={styles.postParagraph}>
                        Much of the focus on the jobs available in modern manufacturing facilities has been on advanced automation technologies. While students who want to become skilled in automation and information technology will certainly be rewarded, it’s important for students to realize that there’s still huge demand for workers with “old school” skills in areas like electrical and HVAC.
                    </Text>

                    <Text style={styles.subheading}>AI Data Centers Putting a Strain on Electrical Grids Nationwide</Text>

                    <Text style={styles.postParagraph}>
                        In fact, many of those new technologies we hear so much about—like artificial intelligence (AI)—are the very things driving the increased demand for workers with electrical skills. In a recent <Text style={{ fontStyle: 'italic' }}>pv magazine USA</Text> article, author Ryan Kennedy notes that “[t]he battery energy storage system market is growing…over 60% year-over-year.”
                    </Text>

                    <Text style={styles.postParagraph}>
                        What’s driving this boom in the battery storage market? The proliferation of AI data centers across the nation has begun to strain electrical grids wherever they pop up. To meet increasing energy demands, many areas are turning to a mixture of traditional and renewable energy sources, which in turn rely on battery storage to improve grid reliability during peak demand times.
                    </Text>

                    <Text style={styles.postParagraph}>
                        According to Artem Abramov, Rystad Energy’s head of new energies, “As energy demand rises in the US due to increased electrification, grid resilience will continue to be critical, with batteries playing a key role in meeting this need, along with both traditional and renewable energy sources.”
                    </Text>

                    <Text style={styles.postParagraph}>
                        For example, Kennedy notes that, in California, “[b]atteries are playing an increased role during peak power demand periods in mature markets. During peak demand events, the batteries ‘extend’ solar generation curves into evening hours.” The same phenomenon has also been seen with wind and hydropower.
                    </Text>

                    <Text style={styles.postParagraph}>
                        What do these trends mean for the future workforce? Not only will battery storage facilities need highly skilled workers, but the industries sparking increased electrical demand will need thousands of workers with fundamental electrical skills as they work together to ensure a stable electrical grid for the future.
                    </Text>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: {
        backgroundColor: '#640000',
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        paddingBottom: 30,
    },
    bannerImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    postContent: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    readMore: {
        color: '#007AFF',
        fontSize: 14,
        marginBottom: 16,
    },
    postTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    subheading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 24,
        marginBottom: 8,
    },
    postParagraph: {
        fontSize: 14,
        color: '#444',
        lineHeight: 22,
        marginBottom: 10,
        textAlign: 'justify',
    },
});
