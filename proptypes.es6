import { PropTypes } from 'react';

export const isComponent = PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]);
