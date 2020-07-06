import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { YellowBox } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Router from './router';

const App = () => {
  YellowBox.ignoreWarnings(['Setting a timer']);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
