import React, { Component } from 'react';

const style = {
  height: '128px'
};

export default class Square extends Component {
  render() {
    return (
      <div
        className={`w3-col s4 w3-border w3-round ${this.props.value}`}
        style={style}
        onClick={this.props.handleClick}
      />
    );
  }
}
