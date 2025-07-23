import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function M33358({ navigation }) {
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

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Top Image */}
                <Image
                    source={require('../../../assets/images/temp/Diagram1.png')}
                    style={styles.topImage}
                    resizeMode="cover"
                />

                {/* Content Sections */}
                <View style={styles.contentWrapper}>
                    <Text style={styles.sectionHeader}>Portable Process Control Troubleshooting{"\n"}Multimedia Courseware</Text>
                    <Text style={styles.bodyText}>
                        <Text style={styles.bold}>eLearning System: M33358{"\n\n"}</Text>
                        Amatrol’s Portable Process Control Troubleshooting Learning System provides a skill-rich, portable troubleshooting training system for two of the most common types of process control systems, flow and liquid level. The system features eLearning curriculum for subjects like process control equipment safety, loop controllers, level measurement and control, control loop performance, and more.{"\n\n"}
                        M33358 provides vital training experience for students and professionals that will perform operation, safety, and troubleshooting on process control systems in real-world industrial areas, including power generation, petrochemicals, food processing and manufacturing.
                    </Text>

                    <Text style={styles.sectionHeader}>In-Depth Level and Flow Process Control Curriculum</Text>
                    <Text style={styles.bodyText}>
                        Amatrol's Portable Level and Flow Process Control Troubleshooting training system features interactive eLearning curriculum that integrates various types of learning methods to create an engaging, effective learning experience. Amatrol’s multimedia eLearning curriculum includes text with voiceovers, videos, 3D animations, pictures, and interactive activities, quizzes, and self-reviews.{"\n\n"}
                        Specific level and flow process control topics covered include: how an instrument tag identifies the function of a device, how to perform a display and key test on the Honeywell UDC 3500 controller, how to calibrate an I/P converter, how to program a Honeywell UDI 1700 process meter to perform on/off control, how to convert between velocity and volumetric flow rate units, and how to tune a loop using the process reaction curve open-loop method.
                    </Text>

                    <Text style={styles.sectionHeader}>Free Learning Management System (LMS)</Text>
                    <Text style={styles.bodyText}>
                        Amatrol eLearning is easy-to-use for both students and instructors. Its web-based interface is simple to navigate and available on any WebGL-compatible Internet browser. Instructors love Amatrol eLearning for its simple, yet sophisticated Learning Management System (LMS).{"\n\n"}
                        The LMS allows instructors to create custom courses, monitor student participation, track course progress, assess knowledge levels prior to a course, and test knowledge levels after completion. Learners appreciate the fact that they can start and stop as needed, moving through each Amatrol course at their own pace. If a self-review reveals that they didn’t understand a particular topic as well as they thought they did, they can revisit it before moving on.
                    </Text>
                </View>
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
        paddingBottom: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 40,
    },
    topImage: {
        width: width,
        height: 240,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
    },
    contentWrapper: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    sectionHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
        marginTop: 20,
    },
    bodyText: {
        fontSize: 12,
        color: '#333',
        lineHeight: 18,
        textAlign: 'justify',
    },
    bold: {
        fontWeight: 'bold',
        color: '#000',
    },
});
