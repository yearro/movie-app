import React from 'react';
import {View,StyleSheet} from 'react-native';
import Chip from './Chip';

const  styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const FilterButton = ({movieGen, onPress}) => {
  const genChip = movieGen.map((genre, index) => (
    <Chip
      onPress={onPress}
      presseable
      key={`chip-gen-${index}`}
      item={genre}
    />
  ));

  return(
    <View style={styles.container}>
      {genChip}
    </View>
  );
};

export default FilterButton;