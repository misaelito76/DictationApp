import { Image, StyleSheet, Platform, View, Button, Text } from 'react-native';

import Voice from '@react-native-voice/voice'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
<Image
style={{    display:'flex'
  ,alignSelf:'center',justifyContent:'center'}}
source={require("../../assets/images/note-taking.jpg")}>

</Image>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  card: {
   flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 320,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    width: '30%',
    height: "10%",
    borderRadius: 10,
    minWidth: '30%',
    maxHeight: "10%",
    position:'absolute'
  },
});
