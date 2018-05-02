import * as React from 'react';
import '../styles/TimelineYearBlock.css';
import TimelineBlock from './TimelineBlock';

interface ITimelineYearBlockProps {
  year: number;
}

function TimelineYearBlock(props: ITimelineYearBlockProps) {
  return (
    <TimelineBlock markerType="year">
      <div className="TimelineYearBlock_year">
        <h2>{props.year}</h2>
      </div>
    </TimelineBlock>
  );
}

export default TimelineYearBlock;