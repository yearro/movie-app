import React from 'react';
import {TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#f1c40f',
  },
});

const Filter = ({
  onPress= () => {},
}) => {
  return(
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Icon
        name='filter'
        size={30}
        color='black'
      />
    </TouchableOpacity>
  );
};

export default Filter;