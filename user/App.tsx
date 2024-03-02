// Import necessary dependencies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from './screens/DashboardScreen'; // Page 0
import VitalsScreen from './screens/VitalsScreen'; // Page 1
import PuzzlesScreen from './screens/PuzzlesScreen'; // Page 2
import TranscriptionScreen from './screens/TranscriptionScreen'; // Page 3

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// App component
const App: React.FC = () => {
  return (
    <NavigationContainer>
      {/* Bottom tab navigator for the main screens */}
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Vitals" component={VitalsScreen} />
        <Tab.Screen name="Puzzles" component={PuzzlesScreen} />
        <Tab.Screen name="Transcription" component={TranscriptionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
