import React, { Component } from 'react';
import logo from 'assets/images/logo.svg';
import Navbar from './Navbar.js'
import navData from 'assets/data/NavData'

class Header extends Component{
  render() {
    return (
        <div className="App-header">
          <img className='App-logo' src={logo} alt="logo"></img>
          <Navbar items={navData}/>
        </div>
    );
  }
}

export default Header;
