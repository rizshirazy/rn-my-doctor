import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import Router from './router';

const App = () => (
  <>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    <FlashMessage position="top" />
  </>
);

export default App;
