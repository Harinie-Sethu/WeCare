import React from 'react';
import { View,Text } from 'react-native';
import {NavigationContainer, } from '@react-navigation/native'
import {createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import {
  Card,
  Title,
  Button,
  Paragraph,
  List,
  PaperProvider,
} from 'react-native-paper';

// Define the DashboardScreenProps type
type DashboardScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Dashboard'>;
};


const DashboardScreen: React.FC <DashboardScreenProps> = ({navigation}) => {
  return (
    <PaperProvider>
      
      <Text>Main opening screen</Text>
      {/* Button 1 */}
      <Button  onPress={() => navigation.navigate('Transcription')}>Start Doctor Transcription</Button>
      {/* Button 2 */}
      <Button  onPress={() => navigation.navigate('Vitals')} >Log Vitals</Button>
      {/* Button 3 */}
      <Button  onPress={() => navigation.navigate('Puzzles')} >Cognition Puzzles</Button>
    </PaperProvider>
  );
};

export default DashboardScreen;