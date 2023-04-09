import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  FlatList
} from 'react-native';

export const Display = ({name, age}) => {
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

