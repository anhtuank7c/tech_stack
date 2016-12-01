import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

class ListItem extends Component {
  render() {
    const { title } = styles;
    return (
      <CardSection>
        <Text style={title}>{this.props.library.title}</Text>
      </CardSection>
    );
  }
}
const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15,
  }
}
export default ListItem;