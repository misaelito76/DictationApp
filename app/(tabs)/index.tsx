import { Image, StyleSheet, Platform, View, Button, Text } from 'react-native';

import Voice from '@react-native-voice/voice'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import SearchBar from '@/components/searchBar';

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (text: string) => {
      setSearchText(text);
      // Additional logic can go here
  };
  return (
    <SafeAreaView >
      <View style={styles.container}>
   <View style={{flexDirection:'row'}}>
   <Text style={styles.title}>Tasks</Text>
   <SearchBar onChangeText={handleSearchTextChange} value={searchText} />
   </View>

<Image
style={{    display:'flex'
  ,alignSelf:'center',justifyContent:'center'}}
source={require("../../assets/images/note-taking.jpg")}>

</Image>
</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
   paddingVertical:160,
  },
  title: {
    gap: 8,
    marginBottom: 8,
    fontFamily:'Times Roman',
    fontWeight:'bold',
    fontSize:24,
    paddingHorizontal:20
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
