import React from 'react';
import DefaultAppHeader from './header';
import {
  AppContainer as DefaultAppContainer,
  AppContentContainer as DefaultAppContentContainer,
} from './containers';

export default function AppTemplate({
  path = '/',
  children = '',
  components = {
    AppContainer: DefaultAppContainer,
    AppHeader: DefaultAppHeader,
    AppContentContainer: DefaultAppContentContainer,
  },
  ...remainingProps,
} = {}) {
  const { AppContainer, AppHeader, AppContentContainer, AppFooter } = components;
  let header = null;
  if (AppHeader) {
    header = <AppHeader path={path} {...remainingProps} />;
  }
  let footer = null;
  if (AppFooter) {
    footer = <AppFooter path={path} {...remainingProps}/>;
  }
  return (
    <AppContainer>
      {header}
      <AppContentContainer>{children}</AppContentContainer>
      {footer}
    </AppContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  const isComponent = React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.func,
  ]);
  AppTemplate.propTypes = {
    path: React.PropTypes.string.isRequired,
    children: React.PropTypes.node,
    components: React.PropTypes.shape({
      AppContainer: isComponent.isRequired,
      AppHeader: isComponent,
      AppContentContainer: isComponent.isRequired,
      AppFooter: isComponent,
    }),
  };
}
