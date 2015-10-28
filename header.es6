import React from 'react';

const AppHeader = () => (
  <div className="WorldInApp--header">
    <a href="/" className="WorldInApp--header-logo StickyMasthead--hidden">
      <h1 className="WorldInApp--header-logo-title">The World</h1>
    </a>
    <div className="WorldInApp--header-sharebar StickyMasthead--visible touch">
      <div className="WorldInApp--header-sharebar-container"></div>
    </div>
  </div>
);
export default AppHeader;
