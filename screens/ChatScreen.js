import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    FlatList,
    Image,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const conversations = [
    {
        id: '1',
        name: 'Ishtiaq Zaman',
        message: 'Hello Raju How are you?',
        time: '20 Sep 2022',
        image: require('../assets/images/user1.png'),
    },
    {
        id: '2',
        name: 'Ferdous Hossein',
        message: 'What\'s up?',
        time: '19 Sep 2022',
        image: require('../assets/images/user2.png'),
    },
    {
        id: '3',
        name: 'Rowan Atkinson',
        message: 'Thank you.',
        time: '11 Sep 2001',
        image: require('../assets/images/user3.png'),
    },
];

const friends = [
    { id: '1', name: 'Ishtiaq Zaman', image: require('../assets/images/user1.png') },
    { id: '2', name: 'Ferdous Hossein', image: require('../assets/images/user2.png') },
    { id: '3', name: 'Majharul Alom', image: require('../assets/images/user4.png') },
    { id: '4', name: 'Kamal Khan', image: require('../assets/images/user5.png') },
];

export default function ChatScreen({ navigation }) {
    const [selectedTab, setSelectedTab] = useState('conversations');

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Chats</Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Tab Row */}
            <View style={styles.tabRow}>
                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        selectedTab === 'conversations' && styles.activeTab,
                    ]}
                    onPress={() => setSelectedTab('conversations')}
                >
                    <Text
                        style={[
                            styles.tabText,
                            selectedTab === 'conversations' && styles.activeTabText,
                        ]}
                    >
                        Conversations
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        selectedTab === 'friends' && styles.activeTab,
                    ]}
                    onPress={() => setSelectedTab('friends')}
                >
                    <Text
                        style={[
                            styles.tabText,
                            selectedTab === 'friends' && styles.activeTabText,
                        ]}
                    >
                        All Friends
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Search */}
            <View style={styles.searchBox}>
                <Ionicons name="search" size={20} color="#aaa" style={{ marginHorizontal: 10 }} />
                <TextInput
                    placeholder="Search any chats..."
                    placeholderTextColor="#aaa"
                    style={{ flex: 1 }}
                />
            </View>

            {/* Content based on selected tab */}
            {selectedTab === 'conversations' ? (
                <FlatList
                    data={conversations}
                    keyExtractor={(item) => item.id}
                    initialNumToRender={5}
                    renderItem={({ item }) => (
                        <View style={styles.conversationRow}>
                            <Image source={item.image} style={styles.avatar} />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.message}>{item.message}</Text>
                            </View>
                            <View style={styles.timeBox}>
                                <Text style={styles.time}>{item.time}</Text>
                                <Text style={styles.timeSmall}>12:45 PM</Text>
                            </View>
                        </View>
                    )}
                />
            ) : (
                <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 10 }}>
                    {friends.map((friend) => (
                        <View key={friend.id} style={styles.friendRow}>
                            <Image source={friend.image} style={styles.avatar} />
                            <Text style={styles.name}>{friend.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: {
        backgroundColor: '#640000',
        paddingTop: 80,
        paddingBottom: 60,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    tabRow: {
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 5,
        backgroundColor: '#fff',
    },
    activeTab: {
        backgroundColor: '#CA0000',
    },
    tabText: {
        color: '#333',
        fontWeight: 'bold',
    },
    activeTabText: {
        color: '#fff',
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        margin: 16,
        borderRadius: 12,
        height: 45,
    },
    conversationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    message: {
        color: '#777',
        fontSize: 14,
    },
    timeBox: {
        alignItems: 'flex-end',
    },
    time: {
        fontSize: 12,
        color: '#888',
    },
    timeSmall: {
        fontSize: 10,
        color: '#aaa',
    },
    friendRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
});
