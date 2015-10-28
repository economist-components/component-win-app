import React, { PropTypes, Component } from 'react';
import CaptureClicks from 'react-router-component/lib/CaptureClicks';
import RouteHandler from './routing';

import DefaultAppHeader from './header';
import {
  AppContainer as DefaultAppContainer,
  AppContentContainer as DefaultAppContentContainer,
} from './containers';

export default class App extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    components: PropTypes.shape({
      AppContainer: PropTypes.oneOf([ PropTypes.string, PropTypes.func ]).isRequired,
      AppHeader: PropTypes.oneOf([ PropTypes.string, PropTypes.func ]),
      AppContent: PropTypes.oneOf([ PropTypes.string, PropTypes.func ]).isRequired,
      AppFooter: PropTypes.oneOf([ PropTypes.string, PropTypes.func ]),
    }),
  }

  static defaultProps = {
    components: {
      AppContainer: DefaultAppContainer,
      AppHeader: DefaultAppHeader,
      AppContent: DefaultAppContentContainer,
    },
  }

  render() {
    const path = this.props.path || '/';
    const { AppContainer, AppHeader, AppContent, AppFooter } = this.props.components;
    return (
      <AppContainer>
        <CaptureClicks>
          <AppHeader />
          <AppContent>
            <RouteHandler path={path} />
          </AppContent>
          <AppFooter />
        </CaptureClicks>
      </AppContainer>
    );
  }
}
