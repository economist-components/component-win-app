import React, { PropTypes } from 'react';
import Navigation from '@economist/component-win-navigation';
import ShareBar from '@economist/component-sharebar';
import Icon from '@economist/component-icon';
/* Mockup data  */
import json from './test/data/large';
const navigationItems = json;
const focusCategorySlug = null;
const focusSubcategorySlug = null;
const activeCategorySlug = 'world';
const activeSubcategorySlug = 'africa';
const activeArticleId = 55;
/* End Mockup data  */
// <div className="world-in-header__main-bar__share-bar">
//   <ShareBar layout="horizontal"/>
// </div>

export default function AppHeader({ title }) {
  return (
    <div className="world-in-header">
        <div className="world-in-header__navigation">
          <div className="world-in-header__navigation-inner-wrapper">
            <div className="world-in-header__main-bar">
              <div className="world-in-header__economist-logo">
                <a className="world-in-header__economist-logo-link"
                  href="http://www.economist.com" title="The Economist website"
                >
                  <Icon icon="economist-small" size="26px" />
                </a>
              </div>
              <div className="world-in-header__main-bar__spacer">
              </div>
              <div className="world-in-header__home-icon">
                <a href="/"
                  title="Home page" className="world-in-header__home-logo-link"
                >
                  <Icon icon="home" />
                </a>
              </div>
              <div className="world-in-header__hamburger-placeholder">
              </div>
            </div>
            <div className="world-in-header__main-navigation">
              <Navigation
                navigationItems={navigationItems}
                focusCategorySlug={focusCategorySlug}
                focusSubcategorySlug={focusSubcategorySlug}
                activeCategorySlug={activeCategorySlug}
                activeSubcategorySlug={activeSubcategorySlug}
                activeArticleId={activeArticleId}
              />
            </div>
          </div>
        </div>
        <a href="/" className="world-in-header__logo">
          <img src="./assets/world-in-logo.svg" alt="The World In 2016" width="120px" />
        </a>
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  AppHeader.propTypes = {
    title: PropTypes.string,
  };
}
