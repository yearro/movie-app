import React, {PureComponent} from 'react';
import Header from '../components/Header';
import MovieList from '../components/MoviesList';

import {Button, Text} from 'react-native';

/*
class Home extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
    };
  };

  // changeNumber = (numero) => this.setState({ numero });
  render(){
    const {numero} = this.state;
    const {movies} = this.props;

    return(
      <>
        <Header title='Películas' />
        <MovieList movies={movies} />
        {/*
        <Header />
          <Text style={{fontSize:20, textAlign:'center'}}>{numero}</Text>
        <Button onPress={() => this.changeNumber(1)} title='Botón 1' color='orange' />
        <Button onPress={() => this.changeNumber(2)} title='Botón 2 ' />
        *//*}
      </>
    );
  }
}*/

const Home = ({movies}) => {
  // console.log(movies)
  return(
    <>
      <Header title='Películas' />
      <MovieList movies={movies} />
    </>
  );
}
export default Home;