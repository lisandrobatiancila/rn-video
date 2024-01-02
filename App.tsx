/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
      />
      <Text>welcome</Text>
    </SafeAreaView>
  );
}

export default App;
