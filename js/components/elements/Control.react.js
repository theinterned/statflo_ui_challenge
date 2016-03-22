import React, { Component } from 'react';

class Control extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {attr, label, val, type} = this.props;
    return (
      <div className="control-group">
        <label htmlFor={attr}>{label}</label>
        <div className="controls">
          <input type={type} id={attr} name={attr}></input>
        </div>
      </div>
    );
  }
}

export default Control;
