import * as React from 'react';
import '../styles/Storyline.css';

export interface IStorylineData {
  name: string;
  description: string;
  locations?: string[];
  inMesaHub?: boolean;
  season: number;
  episode: number;
  darkMode: boolean;
}

interface IStorylineProps {
  data: IStorylineData
  selected?: boolean;
  onSelect: () => void;
};

function Storyline(this: any, props: IStorylineProps) {
  const fileName = 'S' + props.data.season + 'E' + props.data.episode + ' - ' + props.data.name + '.jpg';
  let className = props.selected ? 'Storyline_caption--selected' : '';
  if (props.data.darkMode) {
    className += ' Storyline_caption--dark';
  }
  return (
    <figure className="Storyline" onClick={props.onSelect}>
      <img src={process.env.PUBLIC_URL + '/storyline-screenshots/' + fileName} />
      <figcaption className={className}>S{props.data.season}E{props.data.episode}</figcaption>
    </figure>
  );
}

export default Storyline;