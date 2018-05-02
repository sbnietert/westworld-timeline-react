import * as React from 'react';
// @ts-ignore
import DragScroll from 'react-dragscroll';
// @ts-ignore
import { Samy, SvgProxy } from 'react-samy-svg'; 
import mapSvgPath from '../images/map.svg';
import '../styles/Map.css';

interface IMapProps {
  selectedLocations?: string[];
  mesaHubFocused?: boolean
}

function Map(props: IMapProps) {
  // tslint:disable-next-line:no-console
  console.dir(props.selectedLocations);
  return (
    <DragScroll className="Map">
      <Samy path={mapSvgPath}>
        <SvgProxy selector="rect" display="none"/>
        {props.selectedLocations && props.selectedLocations.map((loc, i) => {
          const id = '#' + loc.replace(' ','_');
          return <SvgProxy selector={id} display="inline" key={loc}/>
        })}
      </Samy>
    </DragScroll>
  );
}

export default Map;