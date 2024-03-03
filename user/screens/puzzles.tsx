

import React, { useState, useEffect } from 'react';
import {Alert, View} from 'react-native'
import {Text, Button, TextInput, PaperProvider } from 'react-native-paper';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import {styles,theme} from '../stylesheet';

const PuzzlesScreen: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [favColor, setFavColor] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const isFocused = useIsFocused();

  const questions = [
    { question: 'What is your name?', stateUpdater: setName },
    { question: 'How old are you?', stateUpdater: setAge },
    { question: 'What is your favorite color?', stateUpdater: setFavColor },
  ];

  const handleNextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // All questions asked, navigate to the next screen or perform any other action
      Alert.alert("Good job!");
      navigation.navigate('Dashboard');
      // <HomeButton onPress={() => navigation.navigate('Dashboard')} />
    }
  };

  useEffect(() => {
    if (isFocused) {
      setName('');
      setAge('');
      setFavColor('');
      setCurrentStep(0);
    }
  }, [isFocused]);

  return (
    <PaperProvider theme={theme}>
      {/* <Text>Puzzles Screen</Text> */}
      {currentStep < questions.length && (
        <View style={styles.view}>
          <Text style={styles.QuestionText}>{questions[currentStep].question}</Text>
          <TextInput
            placeholder='Answer'
            value={currentStep === 0 ? name : currentStep === 1 ? age : favColor}
            onChangeText={(text) => questions[currentStep].stateUpdater(text)}
            style = {styles.textInput}
          />
          {/* <Button title="Next" onPress={handleNextStep} /> */}
          <Button onPress={handleNextStep}>Next</Button>
          </View>
      )}

    </PaperProvider>
  );
};

export default PuzzlesScreen;