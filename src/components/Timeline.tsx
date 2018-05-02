import * as React from 'react';
// @ts-ignore
import timelineData from '../data/timeline.json';
import '../styles/Timeline.css';
import Storyline, { IStorylineData } from './Storyline';
import TimelineStorylinesBlock from './TimelineStorylinesBlock';
import TimelineTextBlock from './TimelineTextBlock';
import TimelineYearBlock from './TimelineYearBlock';

interface ITimelineProps {
  onStorylineSelected: (data: IStorylineData) => void;
}

interface ITimelineState {
  blocks: object[];
  selectedStorylineData: IStorylineData | null;
}

class Timeline extends React.Component<ITimelineProps, ITimelineState> {
  constructor(props: ITimelineProps) {
    super(props);
    this.state = {
      blocks: timelineData.blocks,
      selectedStorylineData: null,
    }
  }
  public render() {
    return (
      <section className="Timeline">
        <div className="Timeline_container">
          {this.state.blocks.map(this.blockDataToComponent)}
        </div>
      </section>
    );
  }

  private blockDataToComponent = (block: any) => {
    const key = JSON.stringify(block);
    switch (block.type) {
      case "year":
        return <TimelineYearBlock year={block.year} key={key}/>
      case "text":
        return <TimelineTextBlock title={block.title} text={block.text} key={key}/>
      case "storylines":
        return (
          <TimelineStorylinesBlock key={key}>
            {block.storylines.map((data: IStorylineData) => (
              <Storyline data={data} selected={data === this.state.selectedStorylineData}
                onSelect={this.onStorylineSelected.bind(this, data)} key={JSON.stringify(data)} />
            ))}
          </TimelineStorylinesBlock>
        );
      default:
        return null;
    }
  }

  private onStorylineSelected = (data: IStorylineData, i: number) => {
    this.setState({ selectedStorylineData: data });
    this.props.onStorylineSelected(data);
  }
}

export default Timeline;