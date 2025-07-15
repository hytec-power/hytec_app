// SplashScreen.js
import React, { useEffect, useRef } from 'react';
import {
    View,
    StyleSheet,
    Animated,
    Dimensions,
    Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ onFinish }) {
    const circleScale = useRef(new Animated.Value(0)).current;
    const logoOpacity = useRef(new Animated.Value(0)).current;
    const logoScale = useRef(new Animated.Value(0.5)).current;
    const logoTranslateY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Step 1: Circle expands
        Animated.timing(circleScale, {
            toValue: 10,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            
            Animated.parallel([
                Animated.timing(logoOpacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(logoScale, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                
                Animated.timing(logoTranslateY, {
                    toValue: -height / 2 + 225,  
                    duration: 1000,
                    useNativeDriver: true,
                }).start(() => {
                     
                    setTimeout(onFinish, 500);
                });
            });
        });
    }, []);

    return (
        <View style={styles.container}>
            {/* Expanding Circle */}
            <Animated.View
                style={[
                    styles.circle,
                    {
                        transform: [{ scale: circleScale }],
                    },
                ]}
            >
                <LinearGradient
                    colors={['#000000', '#c62828']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={styles.gradientFill}
                />
            </Animated.View>

            {/* Hytec Logo Animation */}
            <Animated.Image
                source={require('../assets/images/hytec_logoo.png')}
                style={[
                    styles.logo,
                    {
                        opacity: logoOpacity,
                        transform: [
                            { scale: logoScale },
                            { translateY: logoTranslateY },
                        ],
                    },
                ]}
                resizeMode="contain"
            />
        </View>
    );
}

const CIRCLE_SIZE = 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        position: 'absolute',
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        overflow: 'hidden',
    },
    gradientFill: {
        flex: 1,
    },
    logo: {
        width: 350,
        height: 350,
        position: 'absolute',
    },
});