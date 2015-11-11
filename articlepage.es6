import React from 'react';
import ArticlePage from '@economist/component-win-articlepage';
import Impart from '@economist/component-react-async-container';
import loadingHandler from './loading-handler';
import failureHandler from './failure-handler';
import fetch from 'isomorphic-fetch';

function fetchArticle({ articleId }) {
  return fetch(`http://localhost:8080/api/article/${articleId}`).then((response) => {
    return response.json();
  });
}

export default (
  <Impart.RootContainer
    Component={ArticlePage}
    route={fetchArticle}
    renderLoading={loadingHandler}
    renderFailure={failureHandler}
  />
);
