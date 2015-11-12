import React, { PropTypes, Component } from 'react';
import { Locations, Location, NotFound } from 'react-router-component';
import scrollToTop from './scroll-to-top';
import App from './app';
import NotFoundHandler from '@economist/component-404';
import HomePageHandler from './homepage';
import ArticlePageHandler from './articlepage';

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
          <Location path="/" handler={HomePageHandler} />
          <Location path="/article/:id" handler={ArticlePageHandler} />
          <Location path="/article/:id/:slug" handler={ArticlePageHandler} />
          <NotFound handler={NotFoundHandler}/>
        </Locations>
      </App>
    );
  }
}
