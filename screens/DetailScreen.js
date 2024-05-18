import React, {useContext} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import UserContext from '../components/UserContext';
import {TextInput} from 'react-native-gesture-handler';

export default function DetailScreen({route}) {
  const {name, setName} = useContext(UserContext);
  const musicData = route.params.musicData;
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.text}>{musicData.artist}</Text>
      <Text>{name}</Text>
      <TextInput
        style={styles.text_input}
        onChangeText={setName}
        value={name}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_input: {
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 2,
    height: 20,
    width: '50%',
    margin: 200,
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
});
