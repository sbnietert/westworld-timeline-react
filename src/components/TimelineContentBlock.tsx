import * as React from 'react';
import '../styles/TimelineContentBlock.css';
import TimelineBlock from './TimelineBlock';

interface ITimelineContentBlockProps {
  children?: any;
  contentType: string;
}

function TimelineContentBlock(props: ITimelineContentBlockProps) {
  const contentClassName =
    'TimelineContentBlock_content TimelineContentBlock_content--' + props.contentType;
  return (
    <TimelineBlock markerType="content">
      <div className={contentClassName}>
        {props.children}
      </div>
    </TimelineBlock>
  );
}

export default TimelineContentBlock;