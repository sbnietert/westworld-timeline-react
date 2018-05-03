
import * as React from 'react';
// @ts-ignore
import DragScroll from 'react-dragscroll';
// @ts-ignore
import { Samy, SvgProxy } from 'react-samy-svg';
// @ts-ignore
import { MoonLoader } from 'react-spinners';
import mapSvgPath from '../images/map2.svg';
import '../styles/Map.css';

interface IMapProps {
  selectedLocations?: string[];
  mesaHubFocused?: boolean
}

class Map extends React.Component<IMapProps> {
  private divEl: HTMLDivElement;
  private dragScrollRef: React.RefObject<DragScroll>;
  private animationInProgress: boolean;
  private animationProgress: number;
  private animationStart: number;
  private animationTarget: number;
  private animationStartTime: number;
  private animationDuration = 400;

  constructor(props: IMapProps) {
    super(props);
    this.dragScrollRef = React.createRef();
  }

  public render() {
    return (
      <DragScroll ref={this.dragScrollRef} className="Map">
        <Samy path={mapSvgPath}>
          <SvgProxy selector="rect" display="none"/>
          {this.props.selectedLocations && this.props.selectedLocations.map((loc, i) => {
            const id = '#' + loc.split(' ').join('_');
            return <SvgProxy selector={id} display="inline" key={loc}/>
          })}
        </Samy>
        <div className="Map_loading-indicator-container">
          <div className="Map_loading-indicator">
            <MoonLoader color="rgb(255, 159, 0)" loading={true}/>
          </div>
        </div>
      </DragScroll>
    );
  }

  public componentDidMount() {
    this.updateDivRefAndStartAnimation();
  }

  public componentDidUpdate() {
    this.updateDivRefAndStartAnimation();
  }

  private updateDivRefAndStartAnimation() {
    this.divEl = this.dragScrollRef.current.refs.container;
    this.animationTarget =
      this.props.mesaHubFocused ? (this.divEl.scrollWidth - this.divEl.clientWidth) : 0;
    if (!this.animationInProgress) {
      this.animationInProgress = true;
      this.animationProgress = 0;
      this.animationStart = this.divEl.scrollLeft;
      this.animationStartTime = Date.now();
      this.animateScroll();
    }
  }

  private animateScroll = () => {
    this.animationProgress = Math.min((Date.now() - this.animationStartTime)/this.animationDuration, 1);
    this.divEl.scrollLeft = this.animationStart + easeInOut(this.animationProgress)*(this.animationTarget - this.animationStart);
    if (this.animationProgress < 1) {
      window.requestAnimationFrame(this.animateScroll);
    } else {
      this.animationInProgress = false;
    }
  }
}

function easeInOut(t: number) { return t<.5 ? 2*t*t : -1+(4-2*t)*t }

export default Map;