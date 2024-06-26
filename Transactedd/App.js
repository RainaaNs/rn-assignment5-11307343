import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

import { useFonts } from 'expo-font';

import { StateContext, useStateContext } from './src/context/StateContext';
import { theme } from './src/util/StyledComp';

export default function App() {

  // const { isToggled } = useStateContext()

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }



  return (

    <NavigationContainer >
      <StateContext>
        <AppNavigator />
      </StateContext>
    </NavigationContainer>

  );
}
