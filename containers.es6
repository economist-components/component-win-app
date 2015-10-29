import React from 'react';
import CaptureClicks from 'react-router-component/lib/CaptureClicks';
import { isChildren } from './proptypes';

const AppContainer = ({ children }) => (
  <div className="world-in-App">
    <CaptureClicks>
      {children}
    </CaptureClicks>
  </div>
);
AppContainer.propTypes = {
  children: isChildren,
};

const AppContentContainer = ({ children }) => (
  <div className="world-in-App--content" role="main">
    {children}
  </div>
);
AppContentContainer.propTypes = {
  children: isChildren,
};

export { AppContainer, AppContentContainer };
