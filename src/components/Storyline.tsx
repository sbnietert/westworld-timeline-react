import * as React from 'react';

export interface IStorylineProps {
  name: string;
  description: string;
  screenshot: string;
  characters?: string[];
  locations?: string[];
  inMesaHub?: boolean
  season: number;
  episode: number;
  onSelect: (props: IStorylineProps) => void;
};

function Storyline(this: any, props: IStorylineProps) {
  return (
    <figure onClick={props.onSelect.bind(this, props)}>
      <img src={props.screenshot} />
      <figcaption>S{props.season}E{props.episode}</figcaption>
    </figure>
  );
}

export default Storyline;