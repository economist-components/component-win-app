import React, { PropTypes, Component } from 'react';
import { isComponent, isChildren } from './proptypes';

import DefaultAppHeader from './header';
import {
  AppContainer as DefaultAppContainer,
  AppContentContainer as DefaultAppContentContainer,
} from './containers';

export default class AppTemplate extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    children: isChildren,
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
    const { children: content, ...remainingProps } = this.props;
    const { AppContainer, AppHeader, AppContentContainer, AppFooter } = this.props.components;
    return (
      <AppContainer>
        {AppHeader ? <AppHeader {...remainingProps} /> : ''}
        <AppContentContainer>
          {content}
        </AppContentContainer>
        {AppFooter ? <AppFooter /> : ''}
      </AppContainer>
    );
  }
}
