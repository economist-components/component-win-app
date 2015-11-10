import React, { PropTypes } from 'react';

export default function AppHeader({ title }) {
  return (
    <div className="world-in-header">
      <a href="/" className="world-in-header__logo">
        <h1 className="world-in-header__logo-title">{title}</h1>
      </a>
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  AppHeader.propTypes = {
    title: PropTypes.string,
  };
}
