import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Assets, Image,Button,Colors} from 'react-native-ui-lib';

function redirMetrics(filename:string) {
  // Assuming the filenames are valid and exist in the same directory
  window.location.href = filename;
}
export default function App() {
  return (
    <View style={styles.container}>
      <Button label={'Transcribe appointment'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>
      <Button margin-5 label={'Track your health'} size={Button.sizes.medium} backgroundColor={Colors.red30} onPress={() => redirMetrics('health_metrics.tsx')}/>
      <Button label={'Sharpen your brain'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>
      <Text>Helath Metrics hahahah mr.poopy butthead</Text>
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
