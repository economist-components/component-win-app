import React, { PropTypes } from 'react';

const AppHeader = ({ title }) => (
  <div className="world-in-App--header">
    <a href="/" className="world-in-App--header-logo">
      <h1 className="world-in-App--header-logo-title">{title}</h1>
    </a>
  </div>
);
AppHeader.propTypes = {
  title: PropTypes.string,
};

export default AppHeader;
