import * as React from 'react';
import '../styles/StorylineDetails.css';
import { IStorylineProps } from './Storyline';

interface IStorylineDetailsProps {
  selectedStorylineProps?: IStorylineProps;
}

const DEFAULT_MESSAGE = "Select a storyline for more details.";
function StorylineDetails(props: IStorylineDetailsProps) {
  const details = props.selectedStorylineProps;
  return (
    <div className="StorylineDetails">
      {details != null ? (
        <div>
          <h2>S{details.season}E{details.episode} - {details.name}</h2>
          <p>{details.description}</p>
        </div>
      ) : DEFAULT_MESSAGE}
    </div>
  );
}

export default StorylineDetails;