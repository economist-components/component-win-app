import fakeFetch from './test/mocks/fetch';
import fetch from 'isomorphic-fetch';

export default process.env.NODE_ENV === 'test' ? fakeFetch : fetch;
