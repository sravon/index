import React from 'react';
import {Text} from 'react-native';

const Header = () => {
  return <Text style={styles.textStyle}>This is a Header</Text>;
};

const styles = {
  textStyle :{
    fontSize: 30
  }
}

export default Header;
