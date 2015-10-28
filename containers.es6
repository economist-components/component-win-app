import React from 'react';

export const AppContainer = ({ children }) => (
  <div className="WorldInApp">
    {children}
  </div>
);
export const AppContentContainer = ({ children }) => (
  <div className="WorldInApp--content" role="main">
    {children}
  </div>
);
