import React, {useState} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Books = () => {
  // const navigator = useNavigation();
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View>
      <Button onPress={onPress} title="Press Me" />
      <Text>Count: {count}</Text>
      <Text>Books</Text>

      <Button
        onPress={() => this.props.navigator.navigate('Details')}
        title="Click Me!"
      />
    </View>
  );
};

export default Books;
