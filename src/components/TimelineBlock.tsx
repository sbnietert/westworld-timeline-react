import * as React from 'react';
import '../styles/TimelineBlock.css';

interface ITimelineBlockProps {
  markerType: string;
  children?: any;
}

function TimelineBlock(props: ITimelineBlockProps) {
  const markerClassName = 'TimelineBlock_marker TimelineBlock_marker--' + props.markerType;
  return (
    <div className="TimelineBlock">
      <div className={markerClassName} />
      {props.children}
    </div>
  );
}

export default TimelineBlock;