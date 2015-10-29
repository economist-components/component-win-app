import React from 'react';

import { Locations, Location, NotFound } from 'react-router-component';
import scrollToTop from './scroll-to-top';

import WorldInApp from './app';
import NotFoundHandler from '@economist/component-404';
import HomePageHandler from './homepage';
import ArticlePageHandler from './articlepage';

export default ({ path, ...remainingProps }) => (
  <WorldInApp
    path={path}
    title="World In"
    {...remainingProps}
  >
    <Locations ref="router" path={path} onNavigation={scrollToTop}>
      <Location path="/" handler={HomePageHandler} />
      <Location path="/article/:id" handler={ArticlePageHandler} />
      <Location path="/article/:id/:slug" handler={ArticlePageHandler} />
      <NotFound handler={NotFoundHandler}/>
    </Locations>
  </WorldInApp>
);
