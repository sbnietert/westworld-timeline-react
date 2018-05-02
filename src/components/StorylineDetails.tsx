import * as React from 'react';
import '../styles/StorylineDetails.css';
import { IStorylineData } from './Storyline';

interface IStorylineDetailsProps {
  selectedStorylineData?: IStorylineData;
}

const DEFAULT_MESSAGE = (
  <div className="StorylineDetails_content">Select a storyline for more details.</div>
);
function StorylineDetails(props: IStorylineDetailsProps) {
  const data = props.selectedStorylineData;
  return (
    <div className="StorylineDetails">
      <div className="StorylineDetails_header">
        <h2>Storyline Details</h2>
      </div>
      {data != null ? (
        <div className="StorylineDetails_content">
          <h3>{data.name} (S{data.season}E{data.episode})</h3>
          <p>{data.description}</p>
        </div>
      ) : DEFAULT_MESSAGE}
    </div>
  );
}

export default StorylineDetails;