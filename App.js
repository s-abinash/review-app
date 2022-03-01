import 'react-native-gesture-handler';
import React from 'react';
import {useFonts} from 'expo-font';
import Navigator from "./src/routes/drawer";
import { store } from './src/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import axios from 'axios';
import Amplify from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
Amplify.configure(awsconfig)

axios.defaults.baseURL = 'http://10.0.2.2:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const App=()=> {
  const [loaded] = useFonts({
    'Nunito-Bold': require('./src/assets/fonts/NunitoSans-Bold.ttf'),
    'Nunito': require('./src/assets/fonts/NunitoSans-Regular.ttf'),
  });

  let persistor = persistStore(store);

  if (!loaded) {
    return null;
  }
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator/>
        </PersistGate>
      </Provider>
  );
}

// Amplify Setup: https://docs.amplify.aws/start/getting-started/installation/q/integration/react-native/
// https://dev.to/dev_sahan/complete-guide-to-aws-amplify-and-react-native-4on5

export default App