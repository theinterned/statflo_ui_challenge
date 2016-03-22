import React, { Component } from 'react';

class Control extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  value() {
    if (this.state && this.state.value) {
      return this.state.value;
    }
    return this.props.value;
  }
  render() {
    let {attr, label, value, type, required} = this.props;
    const isRequired = (required && (required === "true" || required === true));
    console.log(required == 'true');
    return (
      <div className="control-group">
        <label htmlFor={attr}>{label}</label>
        <div className="controls">
          <input
            type={type}
            id={attr}
            name={attr}
            value={value}
            required={isRequired ? "true" : null}
            onChange={(e) => this.handleChange(e)} />
        </div>
      </div>
    );
  }
}

export default Control;
