// File: src/components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';

// interface ButtonProps {
//   onPress: () => void;
//   title: string;
// }

interface ButtonProps {
  onPress: () => void;
  title: string;
  buttonStyle?: ViewStyle; // Custom style for the button container
  textStyle?: TextStyle; // Custom style for the text inside the button
  width?: number; // Custom width for the button
  height?: number; // Custom height for the button
}

const Button: React.FC<ButtonProps> = ({ onPress, title, buttonStyle, textStyle, width, height}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle, width && {width}, height && {height},]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default Button;
