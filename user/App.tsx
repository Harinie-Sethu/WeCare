import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Linking,Text, View } from 'react-native';
import {Assets, Image,Button,Colors} from 'react-native-ui-lib';


const redirMetrics = (filename: string) => {
  // Assuming the filenames are valid and exist in the same directory
  Linking.openURL(filename);
};
export default function App() {
  return (
    <View style={styles.container}>
      <Button label={'Transcribe appointment'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>
      <Button margin-5 label={'Track your health'} size={Button.sizes.medium} backgroundColor={Colors.red30} onPress={() => redirMetrics('health_metrics')}/>
      <Button label={'Sharpen your brain'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>
      <Text>hoi jay and mansa!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
