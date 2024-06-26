import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Statistics from '../screens/Statistics';
import MyCards from '../screens/MyCards';
import { useStateContext } from '../context/StateContext';


const { Navigator, Screen } = createBottomTabNavigator();

const AppNavigator = () => {
  const { isToggled } = useStateContext()
  return (
    <Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { 
          height: 70,
          backgroundColor: isToggled=== true ? "#161622" : 'white',
          borderTopWidth:0
           },
        tabBarLabelStyle: {
          fontSize: 12,
          opacity: 0.6,
          marginBottom: 13
        }
      }}>

      
        <Screen name="Home" component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ size }) => (
              <Image
                source={require('../assets/home.png')}
                style={{
                  width: size,
                  height: size,
                  marginTop: 10
                }}
              />
            ),
          }} />
        <Screen name="My Cards" component={MyCards}
          options={{
            tabBarLabel: "My Cards",
            tabBarIcon: ({ size }) => (
              <Image
                source={require('../assets/myCards.png')}
                style={{
                  width: size,
                  height: size,
                  marginTop: 10
                }}
              />
            ),
          }}

        />
        <Screen name="Statistics" component={Statistics}
          options={{
            tabBarLabel: "Statistics",
            tabBarIcon: ({ size }) => (
              <Image
                source={require('../assets/statictics.png')}
                style={{
                  width: size,
                  height: size,
                  marginTop: 10
                }}
              />
            ),
          }} />
        <Screen name="Settings" component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ size }) => (
              <Image
                source={require('../assets/settings.png')}
                style={{
                  width: size,
                  height: size,
                  marginTop: 10
                }}
              />
            ),
          }} />

    </Navigator>

  );
};

export default AppNavigator;