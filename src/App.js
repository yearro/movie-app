/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './screens/Home'
import movies from './lib/movies.json'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {

  return (
    <SafeAreaView>
      <StatusBar />
      <Home movies={movies} />
    </SafeAreaView>
  );
};

export default App;
