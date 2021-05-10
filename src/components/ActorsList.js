import React from 'react';
import {FlatList,Text, StyleSheet} from 'react-native';
import Chip from './Chip';

const ActorsList = ({actors}) => (
  <FlatList
    data={actors}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(_, index) => `list_actors_${index}`}
    renderItem={({item}) => (
      <Chip defaulColor item={item}/>
    )}
  />
);

export default ActorsList;