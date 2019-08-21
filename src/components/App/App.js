import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    recentRun: {
      distance: 0,
      time: 0,
      speed: 0,
    },
    longestRun: {
      distance: 0,
      time: 0,
      speed: 0,
    },
    fastestRun: {
      distance: 0,
      time: 0,
      speed: 0,
    },
    milesRan: {
      distance: 0,
      time: 0,
    },

  };

  changeRun = (event, dataKey) => {
    const fieldVal = parseInt(event.target.value);
    console.log('fieldVal', fieldVal);
    this.setState({
      milesRan: {
        [dataKey]: fieldVal
      },
    })
  }

  clickAddRun = (event) => {
    let longestRun = this.getLongestRun(this.state.milesRan, this.state.longestRun);
    let fastestRun = this.state.fastestRun;
    const newRun = this.state.milesRan;


    this.setState({
      recentRun: {
        ...newRun,
      },
      longestRun: {
        ...longestRun
      },
      fastestRun: {
        ...fastestRun,
      },
    })
  }

  getLongestRun(currentRun, longestRun) {
    if (currentRun.distance > longestRun.distance) {
      return currentRun
    }

    return longestRun
  }

  speedCalculator(distance, time) {
    const minsInHour = 60;
    const speed = distance / (time /minsInHour);
    return speed;
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
              onChange={(event) => this.changeRun(event, 'distance')}
            />
            <input
              type="text"
              placeholder="Time"
              onChange={(event) => this.changeRun(event, 'time')}
            />
            <button onClick={this.clickAddRun}>Add New Run</button>
          </div>

          <div>
            <h3>Recent Run</h3>
            <p>distance: {this.state.recentRun.distance}</p>
            <p>time: {this.state.recentRun.time}</p>
            <p>Average Miles Per Hour: {this.state.recentRun.speed}</p>
          </div>

          <div>
            <h3>Longest Run</h3>
            <p>distance: {this.state.longestRun.distance}</p>
            <p>time: {this.state.longestRun.time}</p>
            <p>Average Miles Per Hour: {this.state.longestRun.speed}</p>
          </div>

          <div>
            <h3>Fastest Run</h3>
            <p>distance: {this.state.fastestRun.distance}</p>
            <p>time: {this.state.fastestRun.time}</p>
            <p>Average Miles Per Hour: {this.state.fastestRun.speed}</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
