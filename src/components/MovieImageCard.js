import React from 'react';
import { TouchableHighlight, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 300,
    width: '100%',
    backgroundColor: '#34495e',
  },
});

const MovieCardImage = ({
  validImage,
  posterurl,
  onError = () => { },
  onLongPress= ()=> {},
}) => {
  // puede ir código
  return (
    <TouchableHighlight
      onLongPress={onLongPress}
      underlayColor="transparent"
      delayLongPress={2000}
    >
      <Image
        style={styles.image}
        source={
          validImage
            ? { uri: posterurl }
            : require('../assets/picture_not_available.png')
        }
        onError={onError}
      />
    </TouchableHighlight>
  );
};

export default MovieCardImage;