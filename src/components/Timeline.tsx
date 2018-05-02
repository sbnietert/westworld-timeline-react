import * as React from 'react';
import '../styles/Timeline.css';
import TimelineStorylinesBlock from './TimelineStorylinesBlock';
import TimelineTextBlock from './TimelineTextBlock';
import TimelineYearBlock from './TimelineYearBlock';

import bernard from '../images/bernard.jpg';
import dolores from '../images/dolores.png';

class Timeline extends React.Component {
  public render() {
    return (
      <section className="Timeline">
        <div className="Timeline_container">
          <TimelineYearBlock year={2017} />
          <TimelineTextBlock title="Early Days of the Park"
            text="Arnold and Ford create hosts as they prepare to open Westworld." />
          <TimelineStorylinesBlock>
            <figure>
              <img src={dolores} alt="Dolores" />
              <figcaption>S1E1</figcaption>
            </figure>
            <figure>
              <img src={bernard} alt="Bernard" />
              <figcaption>S1E2</figcaption>
            </figure>
          </TimelineStorylinesBlock>
          <TimelineYearBlock year={2022} />
          <TimelineTextBlock title="William and Logan's Visit"
            text="William and Logan come to the park, eventually saving it from financial collapse with a large monetary investment." />
          <TimelineStorylinesBlock>
            <figure>
              <img src={dolores} alt="Dolores" />
              <figcaption>S1E2</figcaption>
            </figure>
            <figure>
              <img src={bernard} alt="Bernard" />
              <figcaption>S1E1</figcaption>
            </figure>
          </TimelineStorylinesBlock>
        </div>
      </section>
    );
  }
}

export default Timeline;