import React, { ReactElement } from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Index = (): ReactElement => {
  return <View style={styles.container} />;
};

export default Index;
