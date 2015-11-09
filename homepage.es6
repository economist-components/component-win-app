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

export default (
  <Impart.RootContainer
    Component={Homepage}
    route={() => (fetch('http://some-url/api/data/homepage'))}
    renderLoading={loadingHandler}
    renderFailure={failureHandler}
  />
);
