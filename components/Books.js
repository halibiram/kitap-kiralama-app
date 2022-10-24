import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

const Books = navigator => {
  return (
    <View>
      <Text>Books</Text>
      <Button onPress={() => navigator.navigate('Details')} title="Click Me!" />
    </View>
  );
};

export default Books;
