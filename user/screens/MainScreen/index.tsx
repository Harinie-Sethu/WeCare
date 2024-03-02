// File: src/screens/MainScreen/index.tsx
import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';

import {createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

// Define the DashboardScreenProps type
type MainScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Main'>;
};

const MainScreen: React.FC <MainScreenProps> = ({ navigation }) => {
  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View>
      <Text>Main Opening Screen</Text>
      <Button onPress={() => navigateTo('Transcription')} title="Start Doctor Transcription" />
      <Button onPress={() => navigateTo('Vitals')} title="Log Medical Vitals" />
      <Button onPress={() => navigateTo('Puzzles')} title="Cognition Puzzles" />
    </View>
  );
};

export default MainScreen;
