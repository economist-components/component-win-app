import React, { PropTypes, Component } from 'react';
import { isComponent } from './proptypes';

import DefaultAppHeader from './header';
import {
  AppContainer as DefaultAppContainer,
  AppContentContainer as DefaultAppContentContainer,
} from './containers';

export default class AppTemplate extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node,
    components: PropTypes.shape({
      AppContainer: isComponent.isRequired,
      AppHeader: isComponent,
      AppContentContainer: isComponent.isRequired,
      AppFooter: isComponent,
    }),
  }

  static defaultProps = {
    path: '/',
    content: '',
    components: {
      AppContainer: DefaultAppContainer,
      AppHeader: DefaultAppHeader,
      AppContentContainer: DefaultAppContentContainer,
    },
  }

  render() {
    const { children: content = '', ...remainingProps } = this.props;
    const { AppContainer, AppHeader, AppContentContainer, AppFooter } = this.props.components;

    /* eslint-disable init-declarations */
    let headerEl;
    if (AppHeader) {
      headerEl = <AppHeader {...remainingProps} />;
    }

    let footerEl;
    if (AppFooter) {
      footerEl = <AppFooter />;
    }
    /* eslint-enable init-declarations */

    return (
      <AppContainer>
        {headerEl}
        <AppContentContainer>
          {content}
        </AppContentContainer>
        {footerEl}
      </AppContainer>
    );
  }
}
