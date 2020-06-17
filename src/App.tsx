import React, { useState } from 'react';
import * as UiContext from './contexts/ui';
import Routes from './routes';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function App() {
  const [applicationState, setApplicationState] = useState(
    UiContext.createApplicationInitialState(),
  );

  return (
    <UiContext.Context.Provider
      value={{ applicationState, setApplicationState }}
    >
      <Routes />
    </UiContext.Context.Provider>
  );
}
