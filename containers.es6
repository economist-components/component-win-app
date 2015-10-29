import React from 'react';
import CaptureClicks from 'react-router-component/lib/CaptureClicks';

export const AppContainer = ({ children }) => (
  <div className="world-in-App">
    <CaptureClicks>
      {children}
    </CaptureClicks>
  </div>
);
export const AppContentContainer = ({ children }) => (
  <div className="world-in-App--content" role="main">
    {children}
  </div>
);
