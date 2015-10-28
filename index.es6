import React, { PropTypes, Component } from 'react';

import { Locations, Location, NotFound } from 'react-router-component';
import NotFoundHandler from '@economist/component-404';
const HomePageHandler = <div>Hello world.</div>;
const ArticlePageHandler = <div>An article goes here.</div>;
export default class WorldInApp extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
  }

  scrollToTop() {
    const isBrowser = typeof window !== 'undefined' && window.document;
    if (isBrowser) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const path = this.props.path || '/';
    return (
      <div className="WorldInApp">
        <div className="WorldInApp--header">
          <a href="/" className="WorldInApp--header-logo StickyMasthead--hidden">
            <h1 className="WorldInApp--header-logo-title">The World</h1>
          </a>
          <div className="WorldInApp--header-sharebar StickyMasthead--visible touch">
            <div className="WorldInApp--header-sharebar-container"></div>
          </div>
        </div>
        <div>
          <div className="WorldInApp--content" role="main">
            <Locations ref="router" path={path} onNavigation={this.scrollToTop}>
              <Location path="/" handler={HomePageHandler} />
              <Location path="/article/:id" handler={ArticlePageHandler} />
              <Location path="/article/:id/:slug" handler={ArticlePageHandler} />
              <NotFound handler={NotFoundHandler}/>
            </Locations>
          </div>
        </div>
      </div>
    );
  }
}
