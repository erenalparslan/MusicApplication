import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './MusicCard.styles';

export default function MusicCard({musicData}) {
  return (
    <View style={style.container}>
      <Image
        style={style.image_styles} // Genişlik ve yükseklik değerlerini ayarlayın
        source={{
          uri: musicData.imageUrl,
        }}
      />
      <View style={style.info_container}>
        <Text style={style.text_title}>{musicData.title}</Text>
        <Text style={style.text_desc}>{musicData.artist}</Text>
      </View>
      <View style={style.end_view}>
        {musicData.isSoldOut && <Text style={style.text_end}>TÜKENDİ</Text>}
      </View>
    </View>
  );
}
