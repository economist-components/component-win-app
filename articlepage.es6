import React from 'react';
import ArticlePage from '@economist/component-win-articlepage';
import Impart from '@economist/component-react-async-container';
import loadingHandler from './loading-handler';
import failureHandler from './failure-handler';
import fetch from 'isomorphic-fetch';
import fakeFetch from './fetch';

export default function ArticlePageWithData() {
  const fetcher = (process.env.NODE_ENV === 'production') ? fetch : fakeFetch;
  function fetchArticle({ articleId }) {
    return fetcher(`/api/article/${articleId}`).then((response) => (response.json()));
  }

  return (
    <Impart.RootContainer
      Component={ArticlePage}
      route={fetchArticle}
      renderLoading={loadingHandler}
      renderFailure={failureHandler}
    />
  );
}
