import React from 'react';

import Homepage from '@economist/component-win-homepage';
import pageTracker from '@economist/react-i13n-omniture/pagetracker';

import Impart from '@economist/component-react-async-container';
import cache from '@economist/component-react-async-container/cache';
import loadingHandler from './loading-handler';
import failureHandler from './failure-handler';
import fetch from 'isomorphic-fetch';
import fakeFetch from './fetch';

function fetchHomepage() {
  const fetcher = (process.env.NODE_ENV === 'production') ? fetch : fakeFetch;
  return fetcher('/api/homepage').then((response) => (response.json()));
}
function cacheHomepage() {
  return cache('/api/homepage');
}

const TrackedHomePage = pageTracker(Homepage, {
  template: 'channel',
  topic: '',
  title: '',
});
export default function HomePageWithData(props) {
  return (
    <Impart.RootContainer
      {...props}
      Component={TrackedHomePage}
      cache={cacheHomepage}
      route={fetchHomepage}
      renderLoading={loadingHandler}
      renderFailure={failureHandler}
    />
  );
}
