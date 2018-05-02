import * as React from 'react';
import '../styles/App.css';
import Timeline from './Timeline';

import map from '../images/map.svg';
import logo from '../images/westworld-logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header>
          <div className="timeline-header">
            <div className="timeline-header-logo-container">
              <img className="timeline-header-logo" src={logo} alt="Westworld Logo" />
            </div>
            <div className="timeline-header-text-container">
              <h1>Season 1 Timeline</h1>
            </div>
          </div>
          <div className="map-header">Test</div>
        </header>
        <div className="content-container">
          <Timeline/>
          <section className="map-test">
            <img src={map}/>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
