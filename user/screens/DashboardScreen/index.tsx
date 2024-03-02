import React from 'react';
import { View, Text, Button } from 'react-native';
import {NavigationContainer, } from '@react-navigation/native'
import {createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

// Define the DashboardScreenProps type
type DashboardScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Dashboard'>;
};


const DashboardScreen: React.FC <DashboardScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Main opening screen</Text>
      {/* Button 1 */}
      <Button title="Start Doctor Transcription" onPress={() => navigation.navigate('Transcription')} />
      {/* Button 2 */}
      <Button title="Log Vitals" onPress={() => navigation.navigate('Vitals')} />
      {/* Button 3 */}
      <Button title="Cognition Puzzles" onPress={() => navigation.navigate('Puzzles')} />
    </View>
  );
};

export default DashboardScreen;
