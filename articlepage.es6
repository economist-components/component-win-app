import React from 'react';

import ArticlePage from '@economist/component-win-articlepage';
import pageTracker from '@economist/react-i13n-omniture/pagetracker';

import Impart from '@economist/component-react-async-container';
import cache from '@economist/component-react-async-container/cache';
import loadingHandler from './loading-handler';
import failureHandler from './failure-handler';
import fetch from 'isomorphic-fetch';
import fakeFetch from './fetch';

function fetchArticle({ id }) { // eslint-disable-line id-length
  const fetcher = (process.env.NODE_ENV === 'production') ? fetch : fakeFetch;
  return fetcher(`/api/article/${id}`).then((response) => (response.json()));
}
function cacheArticle({ id }) { // eslint-disable-line id-length
  return cache(`/api/article/${id}`);
}

const TrackedArticlePage = pageTracker(ArticlePage, {
  template: 'article',
  topic(component) {
    return component.props.sectionName;
  },
  publishDate(component) {
    return new Date(Date.parse(component.props.publishDate));
  },
});
export default function ArticlePageWithData(props) {
  return (
    <Impart.RootContainer
      {...props}
      Component={TrackedArticlePage}
      cache={cacheArticle}
      route={fetchArticle}
      renderLoading={loadingHandler}
      renderFailure={failureHandler}
    />
  );
}
