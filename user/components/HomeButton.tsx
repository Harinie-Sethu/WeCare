// File: src/components/HomeButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface HomeButtonProps {
  onPress: () => void;
}

const HomeButton: React.FC<HomeButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Home</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    padding: 20,    
    borderRadius: 5,
    marginTop: 'auto',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeButton;
