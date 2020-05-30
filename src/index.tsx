import React, { ReactElement } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Main = (): ReactElement => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <TouchableOpacity
        onPress={() => {
          navigate('Sub');
        }}
      >
        <Text>Go go sub</Text>
      </TouchableOpacity>
    </View>
  );
};

const Sub = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>sub</Text>
    </View>
  );
};

const Stack = createStackNavigator();
const StackNavigator = (): ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Main画面' }}
      />
      <Stack.Screen name="Sub" component={Sub} options={{ title: 'Sub画面' }} />
    </Stack.Navigator>
  );
};

const Index = (): ReactElement => {
  return (
    <NavigationContainer onStateChange={newState => console.log({ newState })}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Index;
