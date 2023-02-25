import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import Router from './route';
import {Provider} from 'react-redux';
import {store} from './store';

type Props = {};

const App = () => {
  const theme = useTheme();

  const THEME = {
    dark: false,
    colors: theme.colors.background,
  };

  const App = () => {
    return (
      <NavigationContainer>
        <Router theme={THEME} />
      </NavigationContainer>
    );
  };

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
