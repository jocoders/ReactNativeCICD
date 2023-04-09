import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  FlatList
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


export const Display = ({name, age}) => {
  console.log('XDATA_NEW_RENDER_INITIALIZATION', new Date())

  return (
    <View style={SS.container}>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </View>
  );
};

const SS = StyleSheet.create({
  container: {
    height: 100,
    padding: 16,
  }
});

