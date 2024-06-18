import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Button, View, Text } from 'react-native';
import Voice from '@react-native-voice/voice'
import { useEffect, useState } from 'react';


export default function TabTwoScreen() {
  const [speechStarted, setSpeechStarted] = useState(false)
  const [results, setResults] = useState([])
  //Start speech recognition
  const startSpeech = async () => {
    await Voice.start("en-US")
    setSpeechStarted(true)
  }

  const onSpeechError = async () => {
    console.log("Error")
    setSpeechStarted(false)


  }
  const onSpeechResults = async (result: any) => {
    setResults(result.value)
  }
  const handleStop = async () => {
    Voice.stop()
    setSpeechStarted(false)

  }
  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults
    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])
  useEffect(() => {
    if (results) {
      console.log(results)
    }
  }, [results])
  return (
    <View style={styles.container}>



      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top: 20 }}>
        {results && <Text >{results}</Text>}


      </View>
      <View style={{ display: "flex", justifyContent: 'center' }}>
        {!speechStarted ? <Button
          title='Speech to text'
          onPress={startSpeech} /> :
          <Button
            title='Stop speech'
            onPress={handleStop} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
