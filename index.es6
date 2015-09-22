import React from 'react';

import { Locations, Location, NotFound } from 'react-router-component';
import CaptureClicks from 'react-router-component/lib/CaptureClicks';

import StickyMasthead from '@economist/component-stickymasthead';
import ShareBar from '@economist/component-sharebar';
import Icon from '@economist/component-icon';
import MoreMenu from '@economist/component-moremenu';
import ArticlePage from '@economist/component-articletemplate';
import HomePage from '@economist/component-storytiles';
import FourOFourPage from '@economist/component-404';

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
          <StickyMasthead className="WorldInApp--header" topOffset="1">
            <MoreMenu/>
            <a href="/" className="WorldInApp--header-logo StickyMasthead--hidden">
              <h1 className="WorldInApp--header-logo-title">The World</h1>
              <Icon
                icon="worldin"
                className="WorldInApp--header-logo-icon"
                background="none"
                size="100%"
              />
            </a>
            <div className="WorldInApp--header-sharebar StickyMasthead--visible touch">
              <div className="WorldInApp--header-sharebar-container">
                <ShareBar
                  fxDirection="flip-to-top"
                  fxType="cube"
                  background="#333333"
                  fxDefaultStateBackground="#999999"/>
              </div>
              <a href="/" className="WorldInApp--header-sharebar-home">
                <Icon
                  icon="home"
                  color="white"
                  background="rgb(51, 189, 235)"
                  size="100%"
                />
              </a>
            </div>
          </StickyMasthead>
        <CaptureClicks>
          <div className="WorldInApp--content" role="main">
            <Locations ref="router" path={this.props.path || '/'} onNavigation={this.scrollToTop}>
              <Location path="/" handler={HomePage} />
              <Location path="/article/:id" handler={ArticlePage} />
              <Location path="/article/:id/:slug" handler={ArticlePage} />
              <NotFound handler={FourOFourPage}/>
            </Locations>
          </div>
        </CaptureClicks>
      </div>
    );
  }
}
