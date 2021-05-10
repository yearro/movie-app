import React from 'react';
import {TouchableHighlight,StyleSheet,Image} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 20, 
  },  
});

const MovieFullImage = ({
  source,
  onPress= ()=> {},
}) => (
  <TouchableHighlight
    style={styles.container}
    underlayColor='black'
    onPress={onPress}
  >
    <Image
      style={styles.image}
      source={{
        uri: source,
      }}
      resizeMode='contain'
    />
  </TouchableHighlight>
);


export default MovieFullImage;