import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

export function isLoading(isLoading, error) {
  if (isLoading) {
    return (
      <View style={styles.isLoadingWrapper}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.error}>
        <Text style={{fontSize: 18}}>
          Baglanti kurulamadi.... internet baglantini kontrol et!
        </Text>
      </View>
    );
  }
}
