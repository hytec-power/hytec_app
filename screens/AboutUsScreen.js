import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Linking,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons, Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function AboutUsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>About Us</Text>
            </View>

            <ScrollView>
                <View style={styles.scrollContent}>
                    {/* Company Overview */}
                    <View style={styles.card}>
                        <Image
                            source={require('../assets/images/building.png')}
                            style={styles.cardImage}
                            resizeMode="cover"
                        />
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.cardTitle}>
                                Established in 1994 by <Text style={styles.highlight}>Engr. Eric Jude S. Soliman</Text>, Hytec Power Inc. (HPI) is a leading industrial and educational solutions provider in the Philippines.
                            </Text>
                            <Text style={styles.cardParagraph}>
                                It is a one-stop provider, installer, and partner in providing total solutions for skills training, competency assessment, and power testing needs.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image
                            source={require('../assets/images/handshake.png')}
                            style={styles.cardImage}
                            resizeMode="cover"
                        />
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.cardTitle}>
                                For over 30 years in the business, <Text style={styles.highlight}>Hytec Power</Text> has seen the need to solve the job-skills mismatch in the country.
                            </Text>
                            <Text style={styles.cardParagraph}>
                                With the rapid demand for skilled labor and the technical workforce, we strive to be the strong bridge between the education sector and the industry.
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Full-width video card */}
                <View style={styles.fullWidthCard}>
                    <WebView
                        javaScriptEnabled
                        domStorageEnabled
                        source={{ uri: 'https://www.youtube.com/embed/AXaLxXvHFh0' }}
                        style={styles.fullWidthVideo}
                    />
                </View>

                <View style={styles.scrollContent}>
                    {/* MISSION, VISION, SOCIAL RESPONSIBILITY, CORE VALUES, ETHICS */}
                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>MISSION</Text>
                        <Text style={styles.cardParagraph}>
                            To be the most reliable global partner in providing excellent services and innovative solutions to industry and academe. To continuously align education and training with state-of-the-art learning innovations that match.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>VISION</Text>
                        <Text style={styles.cardParagraph}>
                            Hytec Power Inc. envisions itself to be the first-in-mind service-led company for intelligence learning innovations and creative industry solutions.
                        </Text>
                        <Text style={styles.cardParagraph}>
                            Hytec Power Inc. serves as the bridge in addressing global workforce qualifications with innovative learning solutions and industry-approved certifications.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>SOCIAL RESPONSIBILITY</Text>
                        <Text style={styles.cardParagraph}>
                            We take responsibility to understand and serve the needs of the society in general and the learners and workers in particular to close the gaps between academe and industry.
                        </Text>
                        <Text style={styles.cardParagraph}>
                            We are incessantly working to help create a globally competitive Filipino workforce that is highly productive, innovative, creative, and contributes to a peaceful, prosperous knowledge-based economy and society.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>CORE VALUES</Text>
                        <Text style={styles.cardParagraph}>
                            <Text style={styles.bold}>Customer Centric –</Text> We value our work inspired with the customer in mind.{" "}
                            <Text style={styles.bold}>Passionate –</Text> We work with passion to ensure that every customer is delighted every time, all the time.{" "}
                            <Text style={styles.bold}>Collaborative –</Text> We build relationships that deliver results; we embrace teamwork with everyone that matters.{" "}
                            <Text style={styles.bold}>Phenomenal –</Text> We exceed expectations to deliver the best; we are obsessed, passionate and committed to excellence.{" "}
                            <Text style={styles.bold}>Accountable –</Text> We take ownership, responsibility, and strive to be the model in all aspects.{" "}
                            <Text style={styles.bold}>Entrepreneurial –</Text> We challenge traditions and collaborate to innovate.{" "}
                            <Text style={styles.bold}>Upright –</Text> We value integrity and strive to do right and act truthfully.{" "}
                            <Text style={styles.bold}>Committed –</Text> We live our mission and cherish every moment of our work life as HPI family.{" "}
                            <Text style={styles.bold}>Determined –</Text> We are honed by grit and resilience to achieve our goals and vision.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>ETHICS</Text>
                        <Text style={styles.cardParagraph}>
                            <Text style={styles.bold}>Proactive –</Text> I am part of the solution and not the problem.{" "}
                            <Text style={styles.bold}>Excellence-Focused –</Text> I continuously improve myself and my work processes.{" "}
                            <Text style={styles.bold}>Optimistic –</Text> I live in the spirit of positivity.{" "}
                            <Text style={styles.bold}>Steadfast –</Text> I demonstrate firmness and determination.{" "}
                            <Text style={styles.bold}>Truthful –</Text> I speak and act honestly.{" "}
                            <Text style={styles.bold}>Credible –</Text> I practice trustworthiness and ethical behavior.{" "}
                            <Text style={styles.bold}>Innovative –</Text> I am a catalyst of change.{" "}
                            <Text style={styles.bold}>Principled –</Text> I do the right thing even under pressure.{" "}
                            <Text style={styles.bold}>Dedicated –</Text> I commit to serve my company, community, and country.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>INFORMATION</Text>

                        <View style={styles.infoRow}>
                            <Entypo name="location-pin" size={20} color="#aaa" />
                            <Text style={styles.infoText}>
                                #2 T. Cruz St., Cruzville, Zabarte Rd., Brgy Kaligayahan, Novaliches, Quezon City, Metro Manila, Philippines 1123
                            </Text>
                        </View>

                        <View style={styles.infoRow}>
                            <MaterialIcons name="call" size={18} color="#aaa" />
                            <View>
                                <Text style={styles.infoText}>(02) 7006-5435</Text>
                                <Text style={styles.infoText}>(02) 7004-1883</Text>
                                <Text style={styles.infoText}>(02) 7004-1904</Text>
                                <Text style={styles.infoText}>(02) 7116-9138</Text>
                            </View>
                        </View>

                        <View style={styles.infoRow}>
                            <Ionicons name="people" size={18} color="#aaa" />
                            <View>
                                <Text style={styles.infoText}>Ms. Michelle Custodio – HR Supervisor</Text>
                                <Text style={styles.infoText}>+639985588955</Text>
                                <Text style={styles.infoText}>Ms. Chelyn Rose Melendres – HR Staff</Text>
                                <Text style={styles.infoText}>+639178655957</Text>
                                <Text style={styles.infoText}>careers.hpi@hytecpower.com</Text>
                            </View>
                        </View>

                        <View style={styles.infoRow}>
                            <Ionicons name="school" size={18} color="#aaa" />
                            <View>
                                <Text style={styles.infoText}>Mr. Raphael Karlo Javier – Marketing Assistant</Text>
                                <Text style={styles.infoText}>+639663553121</Text>
                                <Text style={styles.infoText}>Ms. Marygrace P. Fajardo – Lifelong Learning Secretary</Text>
                                <Text style={styles.infoText}>+639453371081</Text>
                                <Text style={styles.infoText}>hpi.tour@hytecpower.com</Text>
                            </View>
                        </View>

                        <View style={styles.infoRow}>
                            <MaterialIcons name="work" size={18} color="#aaa" />
                            <View>
                                <Text style={styles.infoText}>Ms. Marlotte Peralta – OJT Coordinator</Text>
                                <Text style={styles.infoText}>+639228418753</Text>
                            </View>
                        </View>

                        <View style={styles.socialRow}>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/hytecpowerincorporated/')}>
                                <FontAwesome name="facebook-square" size={24} color="#7F0000" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/hytecpower')}>
                                <FontAwesome name="instagram" size={24} color="#7F0000" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/@hytecpowerinc')}>
                                <FontAwesome name="youtube-play" size={24} color="#7F0000" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/hytecpower')}>
                                <FontAwesome name="linkedin-square" size={24} color="#7F0000" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.tiktok.com/@hytecpower')}>
                                <Image
                                    source={require('../assets/images/tiktok.png')}
                                    style={styles.socialIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
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
        backgroundColor: '#7F0000',
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 16,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    scrollContent: {
        padding: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    cardImage: {
        width: '100%',
        height: 180,
        borderRadius: 8,
        marginBottom: 12,
    },
    cardTextContainer: {
        marginTop: 8,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    cardParagraph: {
        fontSize: 14,
        color: '#444',
        marginBottom: 8,
    },
    highlight: {
        color: '#B30000',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#B30000',
    },
    bold: {
        fontWeight: 'bold',
    },
    fullWidthCard: {
        height: 220,
        marginHorizontal: 0,
        marginBottom: 20,
    },
    fullWidthVideo: {
        flex: 1,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
        marginBottom: 12,
    },
    infoText: {
        fontSize: 14,
        color: '#444',
    },
    socialRow: {
        flexDirection: 'row',
        gap: 16,
        marginTop: 12,
    },
    socialIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});