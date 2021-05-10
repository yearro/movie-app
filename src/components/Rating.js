import React, {PureComponent} from 'react';
import {View,Text,TouchableHighlight,StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#95a5a6',
  },
  likeRating: {
    position: 'absolute',
    left: 20,
    top: 20,
    borderRadius: 30,
    padding: 0,
    elevation: 10,
    backgroundColor: 'white',
  },
});
/*
class Rating extends PureComponent {
  render() {
    const {
      star,
      like,
      starRating,
      onRatingPress = () => {},
      liked,
    } = this.props;

    if(star) {
      const starTotal = Array.from({length:5})
        .map((_, index) => (
          <TouchableHighlight
            key={`icon_${index}`}
            underlayColor='transparent'
            onPress={()=> onRatingPress(index + 1)}
          >
            <Icon
              name='star'
              size={30}
              color={ index < starRating ? '#f1c40f' : '#95a6a6'}
            />
          </TouchableHighlight>
        ));
        return(
          <View style={styles.container}>
            {starTotal}
          </View>
        );
    }
    if(like) {
      return(
        <TouchableOpacity
          onPress={onRatingPress}
          style={styles.likeRating}
        >
          <Icon
            name='heart'
            size={30}
            color={ liked ? '#e74c3c' : '#ccc'}
          />
        </TouchableOpacity>
      );
    }
    return(null);
  };
}
*/

const Rating =({
  star,
  like,
  starRating,
  onRatingPress = () => {},
  liked
}) => {
    if(star) {
      const starTotal = Array.from({length:5})
        .map((_, index) => (
          <TouchableHighlight
            key={`icon_${index}`}
            underlayColor='transparent'
            onPress={()=> onRatingPress(index + 1)}
          >
            <Icon
              name='star'
              size={30}
              color={ index < starRating ? '#f1c40f' : '#95a6a6'}
            />
          </TouchableHighlight>
        ));
        return(
          <View style={styles.container}>
            {starTotal}
          </View>
        );
    };
    if(like) {
      return(
        <TouchableOpacity
          onPress={onRatingPress}
          style={styles.likeRating}
        >
          <Icon
            name='heart'
            size={30}
            color={ liked ? '#e74c3c' : '#ccc'}
          />
        </TouchableOpacity>
      );
    }
    return(null);
  }
export default Rating;