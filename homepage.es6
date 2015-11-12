import React from 'react';
import Impart from '@economist/component-react-async-container';
import Homepage from '@economist/component-win-homepage';
import loadingHandler from './loading-handler';
import failureHandler from './failure-handler';
import fetch from 'isomorphic-fetch';
import fakeFetch from './fetch';

const fetcher = (process.env.NODE_ENV === 'production') ? fetch : fakeFetch;
function fetchHomepage() {
  return fetcher('/api/homepage').then((response) => (response.json()));
}

export default function HomePageWithData(props) {
  return (
    <Impart.RootContainer
      {...props}
      Component={Homepage}
      route={fetchHomepage}
      renderLoading={loadingHandler}
      renderFailure={failureHandler}
    />
  );
}
