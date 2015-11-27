import React, { PropTypes } from 'react';

import StickyPosition from 'react-sticky-position';
import Navigation from '@economist/component-win-navigation';
import Icon from '@economist/component-icon';
import { extract, parse } from 'query-string';

import Impart from '@economist/component-react-async-container';
import cache from '@economist/component-react-async-container/cache';
import fetch from './fetch';
import loadingHandler from './loading-handler';
import failureHandler from './failure-handler';

function AppHeader({ path, navigationItems }) {
  const queryString = extract(path);
  const query = queryString ? parse(queryString) : {};
  const focusNavigation = query.navigation || false;
  const focusCategorySlug = query.category || null;
  const focusSubcategorySlug = query.subcategory || null;
  const id = (path.match(/\d+/) || []).pop();
  const activeArticleId = id ? Number(id) : null;
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
                <a
                  href="/"
                  title="Home page"
                  className="world-in-header__home-logo-link"
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
                focusNavigation={focusNavigation}
                focusCategorySlug={focusCategorySlug}
                focusSubcategorySlug={focusSubcategorySlug}
                activeArticleId={activeArticleId}
              />
            </div>
          </div>
        </div>
        <a href="/" className="world-in-header__logo">
          <img src="/assets/world-in-logo.svg" alt="The World In 2016" width="120px" />
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

function fetchMenu() {
  return fetch('/api/menu').then((response) => (response.json()));
}
function cacheMenu() {
  return cache('/api/menu');
}

export default function AppHeaderWithData(props) {
  return (
    <Impart.RootContainer
      {...props}
      Component={AppHeader}
      cache={cacheMenu}
      route={fetchMenu}
      renderLoading={loadingHandler}
      renderFailure={failureHandler}
    />
  );
}
