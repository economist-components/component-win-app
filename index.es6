import React from 'react';

import { Locations, Location, NotFound } from 'react-router-component';
import FourOhFourPage from '@economist/component-404';

export default class WorldInApp extends React.Component {

  static get propTypes() {
    return {
      path: React.PropTypes.string.isRequired,
      onClose: React.PropTypes.func,
      onOpen: React.PropTypes.func,
    };
  }

  constructor() {
    super();
    this.state = { open: false };
  }

  scrollToTop() {
    if (typeof window !== 'undefined' && window.document) {
      window.scrollTo(0, 0);
    }
  }

  render() {
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
            <Locations ref="router" path={this.props.path || '/'} onNavigation={this.scrollToTop}>
              <Location path="/" handler={<div>Hello world.</div>} />
              <Location path="/article/:id" handler={<div>An article goes here.</div>} />
              <Location path="/article/:id/:slug" handler={<div>An article goes here.</div>} />
              <NotFound handler={FourOhFourPage}/>
            </Locations>
          </div>
        </div>
      </div>
    );
  }
}
