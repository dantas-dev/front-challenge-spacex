import React, { Component } from 'react';
import spacex from '../styles/spacex.png';

export default class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <img src={ spacex } alt="SpaceX Logo"/>
      </header>
    )
  }
}
