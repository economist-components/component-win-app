import React, { PropTypes } from 'react';
import CaptureClicks from 'react-router-component/lib/CaptureClicks';

const AppContainer = ({ children }) => (
  <div className="world-in-App">
    <CaptureClicks>
      {children}
    </CaptureClicks>
  </div>
);
AppContainer.propTypes = {
  children: PropTypes.node,
};

const AppContentContainer = ({ children }) => (
  <div className="world-in-App--content" role="main">
    {children}
  </div>
);
AppContentContainer.propTypes = {
  children: PropTypes.node,
};

export { AppContainer, AppContentContainer };
