import React, { Component } from 'react';
import './App.css';
import Header from 'components/header/Header';
import Dropdown from 'components/Dropdown';

class App extends Component {
  render() {
    return (
      <div>
      <Header/ >
      <div className="row">
        <Dropdown/ >
        <div className="codeSelector">
        <p>CodeSelector</p>
        </div>
        <div className="codeResult">
        <p>CodeResult</p>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
