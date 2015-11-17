import React from 'react';
import Impart from '@economist/component-react-async-container';
import Homepage from '@economist/component-win-homepage';
import loadingHandler from './loading-handler';
import failureHandler from './failure-handler';
import fetch from 'isomorphic-fetch';
import fakeFetch from './fetch';
import pageTracker from '@economist/react-i13n-omniture/pagetracker';

const fetcher = (process.env.NODE_ENV === 'production') ? fetch : fakeFetch;
function fetchHomepage() {
  return fetcher('/api/homepage').then((response) => (response.json()));
}

const TrackedHomePage = pageTracker(Homepage, {
  template: 'channel',
});
export default function HomePageWithData(props) {
  return (
    <Impart.RootContainer
      {...props}
      Component={TrackedHomePage}
      route={fetchHomepage}
      renderLoading={loadingHandler}
      renderFailure={failureHandler}
    />
  );
}
