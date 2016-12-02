import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    const { title } = styles;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectedLibraryId(id)}
      >
        <View>
          <CardSection>
            <Text style={title}>{this.props.library.title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15,
  }
}

export default connect(null, actions)(ListItem);
