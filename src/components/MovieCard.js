import React,{PureComponent} from 'react';
import {View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback} from 'react-native';
import Rating from './Rating';
import MovieCardImage from './MovieImageCard';
import MovieFullScreenImage from './MovieFullImage';
import ActorsList from './ActorsList';
import Chip from './Chip';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: '#eee'
  },
  imageCard: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: 300,
    width: '100%',
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  description: {
    fontSize: 15,
    padding: 10,
  },
  link: {
    textDecorationLine: 'underline',
    padding: 10,
    color: 'blue',
    fontSize: 20,
  },
});

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isValidImage: true,
      starRating: 1,
      liked: false,
      fullScreenImage: false,
      showDescription: false,
    };
  };

  changeRating = starNumber => this.setState({ starRating: starNumber});
  toogleLike = () => {this.setState(({liked})=> ({liked: !liked })); };
  toogleImageFull= () => {this.setState(({fullScreenImage})=> ({fullScreenImage: !fullScreenImage })); };
  toogleDescription= () => {this.setState(({showDescription})=> ({showDescription: !showDescription })); };
  
  render() {
    const {
      title,
      year,
      genres,
      imdbRating,
      posterurl,
      actors,
      storyline
    } = this.props;

    const {
      isValidImage,
      starRating,
      liked,
      fullScreenImage,
      showDescription,
    } = this.state

    return(
      <View style={styles.container}>
          {
            fullScreenImage 
            && isValidImage
            &&  <MovieFullScreenImage source={posterurl} onPress={this.toogleImageFull} />
          }
          <MovieCardImage
            validImage={isValidImage}
            posterurl={posterurl}
            onError={() => this.setState({ validImage: false })}
            onLongPress={()=> this.setState({ fullScreenImage: true })}
          />
        {/*
        <Image
          style={styles.imageCard}
          resizeMode='cover'
          source={
            isValidImage ? {uri: posterurl} : require('../assets/picture_not_available.png')
          }
          onError={()=> this.setState({ isValidImage: false })}
        />
        */}
        <Rating
          like
          liked={liked}
          onRatingPress={this.toogleLike}
        />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subtitle}>
          <Text style={styles.description}>{imdbRating}</Text>
          <Rating
            star
            starRating={starRating}
            onRatingPress={this.changeRating}
          />
          <Text style={styles.description}>{year}</Text>
        </View>
        <View>
          <TouchableWithoutFeedback
            onPress={this.toogleDescription}
          >
            <Text style={styles.link}>Ver Descripción</Text>
          </TouchableWithoutFeedback>
          {
            showDescription 
            &&  <View><Text>{storyline}</Text></View>
          }
        </View>
        <View>
          <FlatList
            data={genres}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => `list_gen_${index}`}
            renderItem={({item}) => (
              <Chip item={item}/>
            )}
          />
        </View>
        <View>
          <ActorsList actors={actors} />
        </View>
      </View>
    );
  };
}

export default MovieCard;