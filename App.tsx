import React, { useEffect } from 'react';
import './css/global.css';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import * as SplashScreen from 'expo-splash-screen';
import { Nosifer_400Regular, useFonts } from '@expo-google-fonts/nosifer';

function App(){
  const [fontsLoaded] = useFonts({
    Nosifer_400Regular
  });

  useEffect(() => {
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  },[fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return(
    <AppNavigator />
  );
}

export default App;