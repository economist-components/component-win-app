/* eslint-disable init-declarations, global-require */
let fetch;
if (process.env.NODE_ENV === 'test') {
  fetch = require('./test-fetch');
} else {
  fetch = require('isomorphic-fetch');
}

export default fetch;
