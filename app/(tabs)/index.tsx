import { Image, StyleSheet, Platform, View, Button, Text } from 'react-native';

import Voice from '@react-native-voice/voice'

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text>
          Read my notes
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    width: '30%',
    height: "10%",
    borderRadius: 10,
    minWidth: '30%',
    maxHeight: "10%"
  },
});
