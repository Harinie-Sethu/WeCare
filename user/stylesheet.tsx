import { StyleSheet} from 'react-native';
import {
    MD3LightTheme as DefaultTheme,
  } from 'react-native-paper';
const styles = StyleSheet.create({
    container: {
      margin:5,
    },
    view: {
      backgroundColor: 'blue',
      width: '100%',
      height: '100%',
    },
    middle: {
      flex: 0.3,
      backgroundColor: 'beige',
      borderWidth: 5,
    },
    bottom: {
      flex: 0.3,
      backgroundColor: 'pink',
      borderWidth: 5,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
  });
  const theme =  {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "purple",
      secondary: "blue",
      background: "blue",
      surface: "blue",
      accent: '#f1c40f',
    },
  };
  export { styles, theme };