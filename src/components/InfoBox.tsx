import * as React from 'react';
import '../styles/InfoBox.css';
import UpgradedScrollbars from './UpgradedScrollbars';

interface IInfoBoxProps {
  title: string;
  name: string;
  children?: any;
}

function InfoBox(props: IInfoBoxProps) {
  return (
    <div className="InfoBox">
      <header>
        <h2 className="InfoBox_name">{props.name}</h2>
        <h2 className="InfoBox_title">{props.title}</h2>
      </header>
      
      <div className="InfoBox_content">
        <UpgradedScrollbars scrollbarClass="InfoBox_scrollbar">
          <div className="InfoBox_inner-content">
            {props.children}
          </div>
        </UpgradedScrollbars>
      </div>
    </div>
  );
}

export default InfoBox;