import * as React from 'react';
import InfoBox from './InfoBox';
import { IStorylineData } from './Storyline';

interface IStorylineDetailsProps {
  selectedStorylineData?: IStorylineData;
}

const DEFAULT_NAME = 'No Storyline Selected';
const DEFAULT_DESC = 'Select a storyline for more details.';
function StorylineDetails(props: IStorylineDetailsProps) {
  const data = props.selectedStorylineData;
  let name = DEFAULT_NAME;
  let desc = DEFAULT_DESC;
  if (data != null) {
    name = data.name + ' (S' + data.season + 'E' + data.episode + ')';
    desc = data.description;
  }
  return (
    <InfoBox title="Storyline Details" name={name}>
      <p>{desc}</p>
    </InfoBox>

  );
}

export default StorylineDetails;