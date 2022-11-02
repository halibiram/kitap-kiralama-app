import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen, green} from './Colors';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,

        color: green,
        paddingHorizontal: 10,
        width: '78%',
        backgroundColor: 'rgb(220,220,220)',
        marginVertical: 12,
      }}
      placeholderTextColor={green}></TextInput>
  );
};

export default Field;
