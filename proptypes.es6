import { PropTypes } from 'react';

export const isComponent = PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]);

export const isChildren = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.arrayOf(PropTypes.element),
]);
