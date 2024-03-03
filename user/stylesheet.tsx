import { StyleSheet} from 'react-native';
import {
    MD3LightTheme as DefaultTheme,
  } from 'react-native-paper';
const styles = StyleSheet.create({
  
  container: {
      margin:15,
      width:350,
      alignSelf:'center',
      height:100,
      backgroundColor:'#501677',
      justifyContent: 'center'
      // color:'purple'
    },

    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      flexWrap:'wrap',
      lineHeight: 36, // Adjust the lineHeight based on your design
      flex: 1, 
    },

    QuestionText: {
      color: 'black',
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      margin:25
      // flexWrap:'wrap',
      // lineHeight: 36, // Adjust the lineHeight based on your design
      // flex: 1, 
    },

    view: {
      backgroundColor: '#9971B4',
      width: '100%',
      height: '100%',
      justifyContent: 'center'
    },
    textInput: {
      width: 300,
      margin: 10,
      alignItems:'center',
      alignSelf:'center',
    }
  });
  const theme =  {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#501677",
      secondary: "white",
      background: "#E2C9F3",
      surface: "#E2C9F3",
    },
  };
  export { styles, theme };