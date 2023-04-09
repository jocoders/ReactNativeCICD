import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity, Text,
} from "react-native";

import {
  Colors,
} from "react-native/Libraries/NewAppScreen";
import { Display } from "./Display";


const App = () => {
  const [active, setActive] = useState(false);
  const [name, setName] = useState('Jo')
  const [age, setAge] = useState(37)

  const memoObj = useMemo(() => {
    return { name: "Jo", age: 37 };
  }, []);

  const memoObj1 = () => {
    return { name: "Jo", age: 37 };
  }


  const onPress = () => {
    setActive(prev => !prev);
  }


  return (
    <View style={SS.container}>
      <TouchableOpacity onPress={onPress}>
        <Text>{'Change activity'}</Text>
      </TouchableOpacity>
      <Text>{`This is the current activity value: ${active}`}</Text>
      <Display name={name} age={age} />
    </View>
  );
};

const SS = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
