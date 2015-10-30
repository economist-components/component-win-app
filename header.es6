import React, { PropTypes } from 'react';

const AppHeader = ({ title }) => (
  <div className="world-in-header">
    <a href="/" className="world-in-header__logo">
      <h1 className="world-in-header__logo-title">{title}</h1>
    </a>
  </div>
);
AppHeader.propTypes = {
  title: PropTypes.string,
};

export default AppHeader;
