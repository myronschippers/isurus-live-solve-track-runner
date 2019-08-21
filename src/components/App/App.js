import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>React Track Runner</h1>

          <div>
            <input type="text" placeholder="Distance" />
            <button>Add New Run</button>
          </div>

          <div>
            <p>Recent Run: 0</p>
            <p>Longest Run: 0</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
