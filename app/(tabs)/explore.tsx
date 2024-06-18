import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Button, View, Text, Pressable } from 'react-native';
import Voice from '@react-native-voice/voice'
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function TabTwoScreen() {
  const [speechStarted, setSpeechStarted] = useState(false)
  const [results, setResults] = useState([])
  const [date, setDate] = useState("")
  //Start speech recognition
  const startSpeech = async () => {
    await Voice.start("en-US")
    setSpeechStarted(true)
    const today = new Date()

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;
    setDate(currentDate)
  }

  const onSpeechError = async () => {
    console.log("Error")
    setSpeechStarted(false)
    setDate("")


  }
  const onSpeechResults = async (result: any) => {
    if (result) { setResults(result.value) }
  }
  const handleStop = async () => {
    Voice.stop()
    setSpeechStarted(false)
    console.log(date)
    setDate("")
    setResults([])

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
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>



        <View style={[styles.card, { opacity: speechStarted ? 10 : 0 }]}>
          {date && <Text style={styles.heading}>
            Date : {date}

          </Text>}
          {results &&


            <Text >{results}</Text>}


        </View>
        <View style={{ display: "flex", justifyContent: 'center', bottom: '20%' }}>

        </View>
      </View>
      {!speechStarted ?
        <Pressable
          onPress={startSpeech}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/images/microphone.png")} />

        </Pressable>
        :
        <Pressable
          onPress={handleStop}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/images/stop.png")} />

        </Pressable>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    width: '80%',
    height: "60%",
    paddingHorizontal: 40,
    borderRadius: 10,
    minWidth: '80%',
    maxHeight: "60%"
  },
  heading: {
    display: 'flex',
    alignSelf: 'flex-start',
    color: "red",
    bottom: 130
  }
});
