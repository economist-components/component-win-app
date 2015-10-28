import React, { PropTypes, Component } from 'react';
import RouteHandler from './routing';

export default class WorldInApp extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
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
            <RouteHandler path={path} />
          </div>
        </div>
      </div>
    );
  }
}
