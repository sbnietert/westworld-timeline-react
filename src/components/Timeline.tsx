import * as React from 'react';
import '../styles/Timeline.css';
import Storyline, { IStorylineProps } from './Storyline';
import TimelineStorylinesBlock from './TimelineStorylinesBlock';
import TimelineTextBlock from './TimelineTextBlock';
import TimelineYearBlock from './TimelineYearBlock';

import bernard from '../images/bernard.jpg';
import dolores from '../images/dolores.png';

interface ITimelineProps {
  onStorylineSelected: (props: IStorylineProps) => void;
}

function Timeline(props: ITimelineProps) {
  return (
    <section className="Timeline">
      <div className="Timeline_container">
        <TimelineYearBlock year={2017} />
        <TimelineTextBlock title="Early Days of the Park"
          text="Arnold and Ford create hosts as they prepare to open Westworld." />
        <TimelineStorylinesBlock>
          <Storyline name="Welcome to Sweetwater" screenshot={dolores} locations={['Sweetwater', 'Abernathy Ranch']}
            description="Dolores is introduced as the audience witnesses her standard timeloop for the first time."
            season={1} episode={1} onSelect={props.onStorylineSelected} />
          <Storyline name="Behind the Scenes" screenshot={bernard} locations={['Control Room', 'Behavior Lab', 'Mesa Gold']}
            description="Bernard and his team notice Ford's 'reveries' update." inMesaHub={true}
            season={1} episode={2} onSelect={props.onStorylineSelected} />
        </TimelineStorylinesBlock>
        <TimelineYearBlock year={2022} />
        <TimelineTextBlock title="William and Logan's Visit"
          text="William and Logan come to the park, eventually saving it from financial collapse with a large monetary investment." />
        <TimelineStorylinesBlock>
          <Storyline name="Dolores" screenshot={dolores} locations={['Lowlands', 'Sea']}
            description=""
            season={1} episode={1} onSelect={props.onStorylineSelected} />
          <Storyline name="Bernard" screenshot={bernard} locations={['Control Room', 'Behavior Lab and Diagnostics']}
            description=""
            season={1} episode={2} onSelect={props.onStorylineSelected} />
        </TimelineStorylinesBlock>
      </div>
    </section>
  );
}

export default Timeline;