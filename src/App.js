import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const fs = require('fs')

class App extends Component {

  constructor(options={}){
    super();
    // Data which will write in a file. 
    let data = "Learning how to write in a file."

    // Write data in 'Output.txt' . 
    fs.writeFile('Output.txt', data, (err) => {

      // In case of a error throw err. 
      if (err) throw err;
    }) 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
