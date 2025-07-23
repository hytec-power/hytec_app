import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const notifications = [
    {
        id: '1',
        title: 'Team Meeting at HQ',
        message: 'Reminder: Operations team meeting today at 3:00 PM in Conference Room B.',
        time: '2:15 PM',
        date: 'July 6, 2025',
        icon: 'users',
        unread: true,
        section: 'Today',
    },
    {
        id: '2',
        title: 'Product Training - CyberTech',
        message: 'Join the product training session today at 4:30 PM via Zoom. Check your email for the link.',
        time: '11:00 AM',
        date: 'July 6, 2025',
        icon: 'chalkboard-teacher',
        unread: true,
        section: 'Today',
    },
    {
        id: '3',
        title: 'Maintenance Seminar',
        message: 'The HVAC maintenance seminar is now available for replay. Access it on the e-Hytec platform.',
        time: '4:45 PM',
        date: 'July 5, 2025',
        icon: 'tools',
        unread: false,
        section: 'Yesterday',
    },
    {
        id: '4',
        title: 'Schedule Confirmation',
        message: 'You are confirmed for the Lifelong Learning tour on Monday. Check your itinerary inside the app.',
        time: '9:30 AM',
        date: 'July 5, 2025',
        icon: 'calendar-check',
        unread: false,
        section: 'Yesterday',
    },
    {
        id: '5',
        title: 'System Update Notice',
        message: 'The e-Hytec portal will undergo maintenance from 10:00 PM to 1:00 AM tonight.',
        time: '6:00 PM',
        date: 'July 5, 2025',
        icon: 'laptop-code',
        unread: true,
        section: 'Yesterday',
    },
];

export default function NotificationScreen() {
    const navigation = useNavigation();
    const sections = ['Today', 'Yesterday'];

    const handlePress = (notification) => {
        console.log('Pressed:', notification.title);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={28} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Notifications</Text>
                <View style={styles.rightSpacer} />
            </View>

            {/* Notification List */}
            <FlatList
                data={sections}
                keyExtractor={(item) => item}
                renderItem={({ item: section }) => (
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>{section}</Text>
                        {notifications
                            .filter((n) => n.section === section)
                            .map((notif) => (
                                <TouchableOpacity
                                    key={notif.id}
                                    style={styles.cardContainer}
                                    onPress={() => handlePress(notif)}
                                    activeOpacity={0.7}
                                >
                                    <View style={styles.dotContainer}>
                                        <View
                                            style={[
                                                styles.dot,
                                                { backgroundColor: notif.unread ? '#f44336' : '#ccc' },
                                            ]}
                                        />
                                    </View>
                                    <View style={styles.card}>
                                        <View style={styles.cardContent}>
                                            <FontAwesome5
                                                name={notif.icon}
                                                size={24}
                                                color="#f44336"
                                                style={styles.icon}
                                            />
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.title}>{notif.title}</Text>
                                                <Text style={styles.message} numberOfLines={1}>
                                                    {notif.message}
                                                </Text>
                                                <View style={styles.footer}>
                                                    <Text style={styles.time}>{notif.time}</Text>
                                                    <Text style={styles.date}>{notif.date}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
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
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    rightSpacer: {
        width: 28, // same width as back button icon to center text
    },
    sectionContainer: {
        paddingHorizontal: 10,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 10,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
    },
    dotContainer: {
        width: 20,
        marginTop: 25,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    card: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        borderRadius: 8,
        padding: 30,
        elevation: 1,
    },
    cardContent: {
        flexDirection: 'row',
        gap: 12,
    },
    icon: {
        marginRight: 12,
        marginTop: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    message: {
        color: 'gray',
        fontSize: 14,
        marginBottom: 6,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    time: {
        fontSize: 12,
        color: 'gray',
    },
    date: {
        fontSize: 12,
        color: 'gray',
    },
});
