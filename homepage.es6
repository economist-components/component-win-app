import React from 'react';
import Impart from '@economist/component-react-async-container';
import Homepage from '@economist/component-win-homepage';
import loadingHandler from './loading-handler';
import failureHandler from './failure-handler';
import fetch from 'isomorphic-fetch';

function fetchHomepage() {
  return fetch('/api/homepage').then((response) => (response.json()));
}

export default (
  <Impart.RootContainer
    Component={Homepage}
    route={fetchHomepage}
    renderLoading={loadingHandler}
    renderFailure={failureHandler}
  />
);
