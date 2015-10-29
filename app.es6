import React, { PropTypes, Component } from 'react';

import DefaultAppHeader from './header';
import {
  AppContainer as DefaultAppContainer,
  AppContentContainer as DefaultAppContentContainer,
} from './containers';

const isComponent = PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]);
export default class AppTemplate extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]),
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
