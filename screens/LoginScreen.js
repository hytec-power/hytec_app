import React, { useRef, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Animated,
    Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
    const loginTranslateY = useRef(new Animated.Value(100)).current;
    const loginOpacity = useRef(new Animated.Value(0)).current;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        Animated.parallel([
            Animated.timing(loginTranslateY, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(loginOpacity, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    const handleLogin = () => {
        if (username === 'ojt.admin@email.com' && password === 'password') {
            navigation.navigate('MainTabs');
        } else {
            Alert.alert('Login Failed', 'Incorrect username or password.');
        }
    };    
      const handleFacebookLogin = () => Alert.alert('Not yet available.');
    const handleGoogleLogin = () => Alert.alert('Not yet available.');
    const handleGmailLogin = () => Alert.alert('Not yet available.');
    const handleMicrosoftLogin = () => Alert.alert('Not yet available.');
    const onPressForgotPassword = () => Alert.alert('Not yet available.');

    return (
        <LinearGradient
            colors={['#ffffff', '#ffffff', '#990000']}
            locations={[0.2, 0.1, 0.8]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.container}
        >
            <Image
                source={require('../assets/images/hytec_logoo.png')}
                style={styles.image}
            />

            <Animated.View
                style={[
                    styles.form,
                    {
                        opacity: loginOpacity,
                        transform: [{ translateY: loginTranslateY }],
                    },
                ]}
            >
                <Text style={styles.text}>Username</Text>
                <TextInput
                    placeholder="type your username"
                    placeholderTextColor="#888"
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />

                <Text style={[styles.text, { marginTop: 20 }]}>Password</Text>
                <TextInput
                    placeholder="type your password"
                    placeholderTextColor="#888"
                    secureTextEntry
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity onPress={onPressForgotPassword}>
                    <Text style={styles.forgotPassword}>Forgot your password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <View style={styles.signupContainer}>
                    <Text style={styles.signupLabel}>SIGN-UP USING:</Text>

                    <View style={styles.iconRow}>
                        <TouchableOpacity onPress={handleFacebookLogin}>
                            <Image
                                source={require('../assets/images/facebook_logo.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleGoogleLogin}>
                            <Image
                                source={require('../assets/images/google_logo.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleGmailLogin}>
                            <Image
                                source={require('../assets/images/gmail_logo.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleMicrosoftLogin}>
                            <Image
                                source={require('../assets/images/microsoft_logo.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.orText}>or</Text>
                    <TouchableOpacity>
                        <Text style={styles.signupLink}>SIGN-UP</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 350,
        height: 350,
        borderRadius: 10,
        position: 'absolute',
        top: 50,
        alignSelf: 'center',
    },
    form: {
        width: '80%',
        marginTop: 400,
    },
    text: {
        fontSize: 18,
        color: '#000',
        marginBottom: 5,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginTop: 5,
        color: '#444',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    button: {
        marginTop: 25,
        width: 200,
        height: 50,
        backgroundColor: '#c62828',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    signupContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    signupLabel: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 10,
    },
    icon: {
        width: 30,
        height: 30,
        marginHorizontal: 5,
    },
    orText: {
        color: '#000',
        fontSize: 14,
        marginVertical: 3,
    },
    signupLink: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000',
        textDecorationLine: 'underline',
    },
});
