import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth';

import Routes from './src/routes';

const App = () => (
  <NavigationContainer>
    <AuthProvider>
      <StatusBar backgroundColor="#131313" barStyle="light-content" />
      <Routes />
    </AuthProvider>
  </NavigationContainer>
);

export default App;
