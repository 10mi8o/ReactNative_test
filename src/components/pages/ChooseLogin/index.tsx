import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function ChooseLogin() {
  return (
    <View style={styles.container}>
      <Text>ChooseLogin</Text>
    </View>
  );
}
