import * as React from 'react';
import '../styles/TimelineStorylinesBlock.css';
import TimelineContentBlock from './TimelineContentBlock';

interface ITimelineStorylinesBlockProps {
  children?: any;
}

function TimelineStorylinesBlock(props: ITimelineStorylinesBlockProps) {
  return (
    <TimelineContentBlock contentType="storylines">
      {props.children}
    </TimelineContentBlock>
  );
}

export default TimelineStorylinesBlock;