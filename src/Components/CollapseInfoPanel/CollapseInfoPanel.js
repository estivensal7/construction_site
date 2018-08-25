import React from 'react';
import { Jumbotron } from 'reactstrap';
import './CollapseInfoPanel.css';

const CollapseInfoPanel = (props) => {
  return (
    <div className="collapse-info-panel-container">
      <Jumbotron className="collapse-info-panel-jumbotron">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      </Jumbotron>
    </div>
  );
};

export default CollapseInfoPanel;