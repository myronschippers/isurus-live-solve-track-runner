import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    recentRun: 0,
    longestRun: 0,
    milesRan: 0,
  };

  changeRun = (event, dataKey) => {
    const fieldVal = parseInt(event.target.value);
    console.log('fieldVal', fieldVal);
    this.setState({
      milesRan: fieldVal,
    });
  }

  clickAddRun = (event) => {
    let longestRun = this.state.longestRun;
    const newRun = this.state.milesRan;

    if (newRun > longestRun) {
      longestRun = newRun;
    }

    this.setState({
      recentRun: newRun,
      longestRun: longestRun,
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>React Track Runner</h1>

          <div>
            <input
              type="text"
              placeholder="Distance"
              onChange={this.changeRun}
            />
            <button onClick={this.clickAddRun}>Add New Run</button>
          </div>

          <div>
            <p>Recent Run: {this.state.recentRun}</p>
            <p>Longest Run: {this.state.longestRun}</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
