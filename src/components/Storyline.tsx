import * as React from 'react';
import '../styles/Storyline.css';

export interface IStorylineData {
  name: string;
  description: string;
  screenshotFile: string;
  characters?: string[];
  locations?: string[];
  inMesaHub?: boolean;
  season: number;
  episode: number;
}

interface IStorylineProps {
  data: IStorylineData
  selected?: boolean;
  onSelect: () => void;
};

function Storyline(this: any, props: IStorylineProps) {
  return (
    <figure className="Storyline" onClick={props.onSelect}>
      <img src={process.env.PUBLIC_URL + '/storyline-screenshots/' + props.data.screenshotFile} />
      <figcaption className={props.selected ? 'Storyline_caption--selected' : ''}>
        S{props.data.season}E{props.data.episode}
      </figcaption>
    </figure>
  );
}

export default Storyline;