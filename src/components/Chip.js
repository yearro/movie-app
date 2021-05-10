import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

const colorChips = {
  'Crime': '#95a5a6',
  'Drama': '#8e44ad',
  'Action': '#c0392b',
  'Biography': '#2c3e50',
  'History': '#2c3e50',
  'Adventure': '#3498db',
  'Fantasy': '#e74c3c',
  'Western': '#3498db',
  'Comedy': '#e67e22',
  'Romance': '#16a085',
  'Sci-Fi': '#9b59b6',
  'Mystery': '#3498db',
  'Thriller': '#16a085',
  'Family': '#9b59b6',
  'War': '#e67e22',
  'Animation': '#f39c12',
  'Horror': '#9b59b6',
  'Music': '#3498db',
  'Film-Noir': '#f39c12',
  'Musical': '#e67e22',
  'Sport': '#16a085',
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  }
});

const Chip = ({item, presseable, onPress, defaulColor}) => {
  const bgChipColor = defaulColor ? '#ccc' : colorChips[item]
  return(
    <TouchableOpacity
      style={[styles.container, {backgroundColor: bgChipColor}]}
      disabled={!presseable}
      onPress={() => onPress(item)}
    >
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
    );
  };

export default Chip;
