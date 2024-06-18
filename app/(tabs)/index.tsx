import { Image, StyleSheet, Platform, View, Button } from 'react-native';

import Voice from '@react-native-voice/voice'

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Button title='Speech to text' />

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
});
