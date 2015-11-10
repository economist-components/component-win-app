import React from 'react';
import Impart from '@economist/component-react-async-container';
import loadingHandler from './loadingHandler';
import failureHandler from './failureHandler';
import fetch from './fetch';

class Homepage extends React.Component {
  render() {
    return (<div>Homepage</div>);
  }
}

function fetchHomepage() {
  return fetch('http://some-url/api/data/homepage');
}

export default (
  <Impart.RootContainer
    Component={Homepage}
    route={fetchHomepage}
    renderLoading={loadingHandler}
    renderFailure={failureHandler}
  />
);
