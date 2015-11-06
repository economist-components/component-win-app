import React, { PropTypes, Component } from 'react';
import { Locations, Location, NotFound } from 'react-router-component';
import scrollToTop from './scroll-to-top';
import App from './app';
import NotFoundHandler from '@economist/component-404';
import HomePageHandler from './homepage';
import ArticlePageHandler from './articlepage';
import loadingHandler from './loadingHandler';
import failureHandler from './failureHandler';
import Impart from '@economist/component-react-async-container';
import fetch from './fetch';

const AsyncArticlePageHandler = (
  <Impart.RootContainer
    Component={ArticlePageHandler}
    route={({ articleId }) => (fetch(`http://someurl.com/api/article/${articleId}`))}
    renderLoading={loadingHandler}
    renderFailure={failureHandler}
  />
);
const AsyncHomePageHandler = (
  <Impart.RootContainer
    Component={HomePageHandler}
    route={() => (fetch('http://someurl.com/api/data/homepage'))}
    renderLoading={loadingHandler}
    renderFailure={failureHandler}
  />
);
export default class WorldInApp extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
  }

  render() {
    const { path, ...remainingProps } = this.props;
    return (
      <App
        path={path}
        title="World In"
        {...remainingProps}
      >
        <Locations ref="router" path={path} onNavigation={scrollToTop}>
          <Location path="/" handler={AsyncHomePageHandler} />
          <Location path="/article/:articleId" handler={AsyncArticlePageHandler} />
          <Location path="/article/:articleId/:slug" handler={AsyncArticlePageHandler} />
          <NotFound handler={NotFoundHandler}/>
        </Locations>
      </App>
    );
  }
}
