// File: src/screens/TranscriptionScreen/index.tsx
import React from 'react';
import {Alert, View, Text } from 'react-native';
import Button from '../components/Button';
import {createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native';
import {styles, theme} from '../stylesheet'

const Stack = createNativeStackNavigator();

// Define the DashboardScreenProps type
type TransScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Trans'>;
};


const TranscriptionScreen: React.FC <TransScreenProps> = ({navigation}) => {
  return (
    <View style = {styles.view}>
      {/* <Text>Transcription Screen</Text> */}
      <Button  buttonStyle={{ backgroundColor: 'green' }} width = {200} height = {100} title = "Start" onPress={() => Alert.alert('Starting Transcription')}/>
      <Button  buttonStyle={{ backgroundColor: 'red' }}  width = {200} height = {100} title = "Stop" onPress={() => Alert.alert('Stopping Transcription')} />
    </View>
  );
};


export default TranscriptionScreen;
