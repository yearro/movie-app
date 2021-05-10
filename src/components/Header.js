import React, {PureComponent} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#e74c3c',
    margin: 20,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
/*
class Header extends PureComponent {
  constructor(props) {
    super(props);
  };

  render() {
    const {title} = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };
}
*/

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

Header.PropType = {
  title: PropTypes.string,
}
Header.defaultProps = {
  title: 'Sin título',
};
export default Header;