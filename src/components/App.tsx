import * as React from 'react';
import '../styles/App.css';
import Map from './Map';
import { IStorylineData } from './Storyline';
import StorylineDetails from './StorylineDetails';
import Timeline from './Timeline';

import logo from '../images/westworld-logo.svg';

interface IAppState {
  selectedStorylineData?: IStorylineData;
}

class App extends React.Component<{},IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

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
          <StorylineDetails selectedStorylineData={this.state.selectedStorylineData}/>
        </header>
        <div className="content-container">
          <Timeline onStorylineSelected={this.onStorylineSelected}/>
          <Map selectedLocations={this.state.selectedStorylineData && this.state.selectedStorylineData.locations}
            mesaHubFocused={this.state.selectedStorylineData && this.state.selectedStorylineData.inMesaHub} />
        </div>
      </div>
    );
  }
  private onStorylineSelected = (props: IStorylineData) => {
    this.setState({
      selectedStorylineData: props
    });
  };
}

export default App;
