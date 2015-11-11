import React, { PropTypes } from 'react';

import StickyPosition from 'react-sticky-position';
import Navigation from '@economist/component-win-navigation';
import Icon from '@economist/component-icon';
import ShareBar from '@economist/component-sharebar';

import Impart from '@economist/component-react-async-container';
import fetch from 'isomorphic-fetch';
import loadingHandler from './loading-handler';
import failureHandler from './failure-handler';

function AppHeader({ navigationItems }) {
  const focusCategorySlug = null;
  const focusSubcategorySlug = null;
  const activeCategorySlug = null;
  const activeSubcategorySlug = null;
  const activeArticleId = null;
  // <div className="world-in-header__main-bar__share-bar">
  //   <ShareBar layout="horizontal"/>
  // </div>
  return (
    <StickyPosition className="world-in-header world-in-header--sticked">
      <div className="world-in-header__inner-wrapper">
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
    </StickyPosition>
  );
}

if (process.env.NODE_ENV !== 'production') {
  AppHeader.propTypes = {
    title: PropTypes.string,
  };
}

export default function AppHeaderWithData() {
  function fetchMenu() {
    return fetch('/api/menu').then((response) => (response.json()));
  }

  return (
    <Impart.RootContainer
      Component={AppHeader}
      route={fetchMenu}
      renderLoading={loadingHandler}
      renderFailure={failureHandler}
    />
  );
}
