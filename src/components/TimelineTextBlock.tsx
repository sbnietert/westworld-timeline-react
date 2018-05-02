import * as React from 'react';
import '../styles/TimelineTextBlock.css';
import TimelineContentBlock from './TimelineContentBlock';

interface ITimelineTextBlockProps {
  children?: any;
  text: string;
  title: string;
}

function TimelineTextBlock(props: ITimelineTextBlockProps) {
  return (
    <TimelineContentBlock contentType="text">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </TimelineContentBlock>
  );
}

export default TimelineTextBlock;