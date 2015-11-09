import React from 'react';
import ArticlePage from '@economist/component-win-articlepage';
import Impart from '@economist/component-react-async-container';
import loadingHandler from './loadingHandler';
import failureHandler from './failureHandler';
import fetch from './fetch';

export default (
  <Impart.RootContainer
    Component={ArticlePage}
    route={({ articleId }) => (fetch(`http://some-url/api/article/${articleId}`))}
    renderLoading={loadingHandler}
    renderFailure={failureHandler}
  />
);
