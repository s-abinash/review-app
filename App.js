import 'react-native-gesture-handler';
import React from 'react';
import {useFonts} from 'expo-font';
import Navigator from "./routes/drawer";


export default function App() {
  const [loaded] = useFonts({
    'Nunito-Bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
    'Nunito': require('./assets/fonts/NunitoSans-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Navigator/>
  );
}