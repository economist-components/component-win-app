import React, { PropTypes, Component } from 'react';
import { Locations, Location, NotFound } from 'react-router-component';
import scrollToTop from './scroll-to-top';
import App from './app';
import NotFoundHandler from '@economist/component-404';
import HomePageHandler from './homepage';
import ArticlePageHandler from './articlepage';

/* eslint-disable id-match */
export default class WorldInApp extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    i13n: React.PropTypes.object,
  }

  componentDidMount() {
    this.pageviewEvent();
  }

  navigationHandler() {
    scrollToTop();
    this.pageviewEvent();
  }

  pageviewEvent() {
    this.props.i13n.executeEvent('pageview', {
      // TODO: this part need to be dynamic
      title: 'Title of the article',
      template: 'article',
      topic: 'Science',
      publishDate: new Date(),
    });
  }

  render() {
    const { path, ...remainingProps } = this.props;
    return (
      <App
        path={path}
        title="World In"
        {...remainingProps}
      >
        <Locations ref="router" path={path} onNavigation={this.navigationHandler.bind(this)}>
          <Location path="/" handler={HomePageHandler} />
          <Location path="/article/:articleId" handler={ArticlePageHandler} />
          <Location path="/article/:articleId/:slug" handler={ArticlePageHandler} />
          <NotFound handler={NotFoundHandler}/>
        </Locations>
      </App>
    );
  }
}
