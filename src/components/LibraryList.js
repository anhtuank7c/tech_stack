import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log('Render method: ', this.props.libraries);
    return;
  }
}

const mapStateToProps = (state) => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
