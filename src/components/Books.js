import React, {useState} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Books = () => {
  const navigator = useNavigation();
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  console.log(count);
  return (
    <View style={{marginTop: 200}}>
      <Text
        style={{
          fontSize: 35,
          color: 'red',
          textAlign: 'center',
          marginBottom: 100,
        }}>
        Toplam: {count}
      </Text>
      <Button onPress={onPress} title="Artir" />
    </View>
  );
};

export default Books;
