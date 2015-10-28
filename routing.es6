import React from 'react';

import { Locations, Location, NotFound } from 'react-router-component';
import NotFoundHandler from '@economist/component-404';
const HomePageHandler = <div>Hello world.</div>;
const ArticlePageHandler = <div>An article goes here.</div>;
function scrollToTop() {
  const isBrowser = typeof window !== 'undefined' && window.document;
  if (isBrowser) {
    window.scrollTo(0, 0);
  }
}
export default ({ path }) => (
  <Locations ref="router" path={path} onNavigation={scrollToTop}>
    <Location path="/" handler={HomePageHandler} />
    <Location path="/article/:id" handler={ArticlePageHandler} />
    <Location path="/article/:id/:slug" handler={ArticlePageHandler} />
    <NotFound handler={NotFoundHandler}/>
  </Locations>
);
