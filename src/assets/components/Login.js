import {style} from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from '../../assets/loginScreen/Background';
import Btn from '../../assets/loginScreen/Btn';
import {darkGreen, green} from '../../assets/loginScreen/Colors';
import {useNavigation} from '@react-navigation/native';
const Login = () => {
  const navigation = useNavigation();
  return (
    <Background>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Hadi</Text>
        <Text style={styles.title}>Okumaya</Text>
        <Text style={styles.title}>Başla</Text>
        <Btn
          bgColor={darkGreen}
          textColor="white"
          btnLabel="Giris Yap"
          Press={() => navigation.navigate('Singin')}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Kayit Ol"
          Press={() => navigation.navigate('Singup')}
        />
      </View>
    </Background>
  );
};
const styles = StyleSheet.create({
  titleWrapper: {
    marginHorizontal: 40,
    marginVertical: 70,
  },
  title: {
    color: 'white',
    fontSize: 64,
  },
});
export default Login;
