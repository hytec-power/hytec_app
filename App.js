// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';


// Screens
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PrincipalsScreen from './screens/PrincipalsScreen';
import AboutUs from './screens/AboutUsScreen';
import NewsScreen from './screens/NewsScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import PrincipalsDetailScreen from './screens/PrincipalDetailScreen';
import SeeAllCategories from './screens/SeeAllCategories';
import Owp from './screens/owp/Owp';
import Owprofile from './screens/owp/Owprofile';
import Owpattendance from './screens/owp/Owpattendance';
import Owpeditprof from './screens/owp/Owpeditprof';
import Owp2ndscreen from './screens/owp/Owp2ndscreen';
import Owp3rdscreen from './screens/owp/Owp3rdscreen';
import OwpMainscreen from './screens/owp/OwpMainscreen';
import SavedScreen from './screens/SavedScreen';
import NotificationScreen from './screens/NotificationScreen';
import ChatScreen from './screens/ChatScreen';
import EHomePage from './screens/E-Hytec/EHomePage';
import ProductListScreen from './screens/E-Hytec/ProductListScreen';
import ProductDetailScreen from './screens/E-Hytec/ProductDetailScreen';
import SearchPage from './screens/E-Hytec/SearchPage';
import Ehytec2ndscreen from './screens/E-Hytec/Ehytec2ndscreen';
import Cart from './screens/OrderSummary/Cart';
import OrderSum from './screens/OrderSummary/OrderSum';
import PaymentType from './screens/OrderSummary/PaymentType';
import Address from './screens/OrderSummary/Address';
import Editadd from './screens/OrderSummary/Editadd';
import Editadd2 from './screens/OrderSummary/Editadd2';
import PaymentOptions from './screens/OrderSummary/PaymentOptions';
import CyberMainScreen from './screens/Cybertech/CyberMainScreen';
import Cyber2ndScreen from './screens/Cybertech/Cyber2ndScreen';
import Cyber3rdScreen from './screens/Cybertech/Cyber3rdScreen';
import { SearchProvider } from './context/SearchContext';
import { ProfileProvider } from './screens/owp/ProfileContext';
import HomeScreenAmatrol from './screens/Amatrol/HomeScreenAmatrol';
import PrincipalDetailScreenAmatrol from './screens/Amatrol/PrincipalDetailScreenAmatrol';
import Industry4Screen from './screens/Amatrol/PostDetailScreen/Industry4Screen';
import M33358 from './screens/Amatrol/TrainingDetailScreen/M33358';
import EhytecMainscreen from './screens/E-Hytec/EhytecMainscreen';
import Train from './screens/Train';
import MicroCredentialsScreen from './screens/MicroCredentialsScreen';

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Saved') iconName = 'bookmark';
          else if (route.name === 'Notifications') iconName = 'notifications';
          else if (route.name === 'Chat') iconName = 'chatbubble';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#CA0000',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
}

// Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <SearchProvider>
      <ProfileProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen name="PrincipalsScreen" component={PrincipalsScreen} />
            <Stack.Screen name="AboutUs" component={AboutUs} />
            <Stack.Screen name="NewsScreen" component={NewsScreen} />
            <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
            <Stack.Screen name="PrincipalDetailScreen" component={PrincipalsDetailScreen} />
            <Stack.Screen name="Owp" component={Owp} />
            <Stack.Screen name="Owprofile" component={Owprofile} />
            <Stack.Screen name="Owpattendance" component={Owpattendance} />
            <Stack.Screen name="Owpeditprof" component={Owpeditprof} />
            <Stack.Screen name="EHomePage" component={EHomePage} />
            <Stack.Screen name="SearchPage" component={SearchPage} />
            <Stack.Screen name="ProductList" component={ProductListScreen} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="OrderSum" component={OrderSum} />
            <Stack.Screen name="PaymentType" component={PaymentType} />
            <Stack.Screen name="Address" component={Address} />
            <Stack.Screen name="Editadd" component={Editadd} />
            <Stack.Screen name="Editadd2" component={Editadd2} />
            <Stack.Screen name="PaymentOptions" component={PaymentOptions} />
            <Stack.Screen name="SeeAllCategories" component={SeeAllCategories} />
            <Stack.Screen name="HomeScreenAmatrol" component={HomeScreenAmatrol} />
            <Stack.Screen name="CyberMainScreen" component={CyberMainScreen} />
            <Stack.Screen name="Cyber2ndScreen" component={Cyber2ndScreen} />
            <Stack.Screen name="Cyber3rdScreen" component={Cyber3rdScreen} />
            <Stack.Screen name="Owp2ndscreen" component={Owp2ndscreen} />
            <Stack.Screen name="Owp3rdscreen" component={Owp3rdscreen} />
            <Stack.Screen name="OwpMainscreen" component={OwpMainscreen} />
            <Stack.Screen name="Ehytec2ndscreen" component={Ehytec2ndscreen} />
            <Stack.Screen name="EhytecMainscreen" component={EhytecMainscreen} />
            <Stack.Screen name="Industry4Screen" component={Industry4Screen} />
            <Stack.Screen name="M33358" component={M33358} />
            <Stack.Screen name="PrincipalDetailScreenAmatrol" component={PrincipalDetailScreenAmatrol} />
            <Stack.Screen name="Train" component={Train}/>
            <Stack.Screen name="MicroCredentialsScreen" component={MicroCredentialsScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ProfileProvider>
    </SearchProvider>
  );
}
