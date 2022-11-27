import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';

export function Button({bgColor, btnLabel, textColor, Press, Width, loading}) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 10,
        alignItems: 'center',
        width: Width,
        paddingVertical: 20,
        marginVertical: 10,
      }}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator size={28} color={'white'} />
      ) : (
        <Text style={{color: textColor, fontSize: 20, fontWeight: 'bold'}}>
          {btnLabel}
        </Text>
      )}
    </TouchableOpacity>
  );
}
