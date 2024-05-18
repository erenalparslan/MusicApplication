import {React, useState} from 'react';

import {
  TextInput,
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
} from 'react-native';
import MusicCard from '../components/MusicCard';
import musics from '../music-data.json';

export default function MusicList({navigation}) {
  const musicCard = ({item}) => (
    <MusicCard musicData={item} navigation={navigation} />
  );
  const seperator = <View style={styles.seperator} />;
  const [filtre, setFiltre] = useState(musics);

  function search(text) {
    let newFiltre = musics.filter(
      item => item.title.toUpperCase().indexOf(text.toUpperCase()) > -1,
    );
    setFiltre(newFiltre);
  }
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <TextInput
            onChangeText={search}
            placeholder="Ara..."
            style={styles.search}
          />
        }
        data={filtre}
        keyExtractor={musics.id}
        renderItem={musicCard}
        ItemSeparatorComponent={seperator}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 24,
    backgroundColor: 'gray',
  },
  seperator: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
  },
  search: {
    margin: 20,
    marginTop: 40,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
});
