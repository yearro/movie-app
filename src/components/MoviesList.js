import React, {PureComponent} from 'react';
import {FlatList,StyleSheet,View,Modal,TouchableOpacity} from 'react-native';
import MovieCard from './MovieCard';
import FilterButton from './Filters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FiterButtons from './FilerButtons';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  filterButton: {
    position: 'absolute',
    bottom: '15%',
    right: '5%',
  }
});

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeModal: false,
      movieGenRes: [],
      movies: props.movies,
    };
  };
  componentDidMount = () => {
    this.getGenData(); 
  };

  toogleModal = () => {this.setState(({activeModal})=> ({activeModal: !activeModal })); };
  getGenData = () => {
    const {movies} = this.props;
    const genResData = movies.reduce((genresType, movie) => {
      return [...genresType, ...movie.genres];
    }, []);
    const genResSet = new Set(genResData);
    this.setState({
      movieGenRes: [...genResSet] ,
    });
  };

  applyFilter = (genre) => {
    const {movies} = this.props;
    const filteredMovies = movies.filter((movie) => movie.genres.includes(genre));
    this.setState({
      movies: [...filteredMovies],
      activeModal: false,
    }, () => {
      this.FlatList.scrollToOffset({
        animated: true,
        offset: 0,
      });
    });
  };

  render(){
    const {
      activeModal,
      movieGenRes,
      movies,
    } = this.state;

    return(
      <>
        <FlatList
          ref={(ref)=>(this.FlatList = ref)}
          style={styles.container}
          data={movies}
          keyExtractor={(item, index) => `list_movie_${index}`}
          renderItem={({item}) => (
            <MovieCard
              title={item.title}
              year={item.year}
              genres={item.genres}
              posterurl={item.posterurl}
              imdbRating={item.imdbRating}
              actors={item.actors}
              storyline={item.storyline}
            />
          )}
        />
        <View style={styles.filterButton}>
          <FilterButton onPress={this.toogleModal}/>
        </View>
        <Modal
          visible={activeModal}
          animationType='slide' 
        >
          <TouchableOpacity
            onPress={this.toogleModal}
          >
            <Icon
              name='close-box'
              size={30}
              color='black'
            />
          </TouchableOpacity>
          <FiterButtons
            movieGen={movieGenRes}
            onPress={this.applyFilter}
          />
        </Modal>
      </>
    );
  }
}

export default MoviesList;