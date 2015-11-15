import React from 'react';
import ArticlePage from '@economist/component-win-articlepage';
import Impart from '@economist/component-react-async-container';
import loadingHandler from './loading-handler';
import failureHandler from './failure-handler';
import fetch from 'isomorphic-fetch';
import fakeFetch from './fetch';
import pageTracker from '@economist/react-i13n-omniture/pagetracker';

const fetcher = (process.env.NODE_ENV === 'production') ? fetch : fakeFetch;
function fetchArticle({ id }) { // eslint-disable-line
  return fetcher(`/api/article/${id}`).then((response) => (response.json()));
}

const TrackedArticlePage = pageTracker(ArticlePage, {
  template: 'article',
  topic: function(component){
    return component.props.sectionName;
  },
  publishDate: function(component){
    return new Date(Date.parse(component.props.publishDate));
  }
});
export default function ArticlePageWithData(props) {
  return (
    <Impart.RootContainer
      {...props}
      Component={TrackedArticlePage}
      route={fetchArticle}
      renderLoading={loadingHandler}
      renderFailure={failureHandler}
    />
  );
}
