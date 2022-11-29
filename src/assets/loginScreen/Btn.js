import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Btn({bgColor, btnLabel, textColor, Press, Width}) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: Width,
        paddingVertical: 10,
        marginVertical: 10,
      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
