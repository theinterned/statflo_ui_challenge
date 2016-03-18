import React, { Component } from 'react';
import { Link } from 'react-router';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var renderItem = this.props.renderItem || this.renderItem;
    return <ul> {this.props.items.map(renderItem)} </ul>;
  }

  renderItem(item) {
    return <li>{item}</li>;
  }
}

export default List;
