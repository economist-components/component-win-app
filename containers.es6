import React, { PropTypes } from 'react';
import CaptureClicks from 'react-router-component/lib/CaptureClicks';

export function AppContainer({ children }) {
  return (
    <div className="world-in-app">
      <CaptureClicks>
        {children}
      </CaptureClicks>
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  AppContainer.propTypes = {
    children: PropTypes.node,
  };
}

export function AppContentContainer({ children }) {
  return (
    <div className="world-in-content" role="main">
      {children}
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  AppContentContainer.propTypes = {
    children: PropTypes.node,
  };
}
