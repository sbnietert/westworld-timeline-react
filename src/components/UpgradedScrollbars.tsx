import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';

interface IUpgradedScrollbarsProps {
  scrollbarClass?: string;
  children?: any;
}

interface IUpgradedScrollbarsState {
  visible: boolean;
}

class UpgradedScrollbars extends React.Component<IUpgradedScrollbarsProps, IUpgradedScrollbarsState> {
  private scrollbarsRef: React.RefObject<Scrollbars>;

  constructor(props: IUpgradedScrollbarsProps) {
    super(props);
    this.scrollbarsRef = React.createRef();
    this.state = {
      visible: false
    };
  }

  public render() {
    return (
      <Scrollbars ref={this.scrollbarsRef} renderThumbVertical={this.getScrollbar}>
        {this.props.children}
      </Scrollbars>
    );
  }

  public componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        visible: true
      });
    }, 0);
}
  
  private getScrollbar = (divProps: {}) => {
    return <div {...divProps} style={{
      visibility: this.state.visible ? 'visible' : 'visible'
    }} className={this.props.scrollbarClass} />;
  }
}

export default UpgradedScrollbars;