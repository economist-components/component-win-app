/* eslint-disable id-match */
import React from 'react';
// Add Omniture Tracking plugin to the App.
import { setupI13n } from 'react-i13n';
import ReactI13nOmniture from '@economist/react-i13n-omniture';
import OmnitureConfig from '@economist/react-i13n-omniture/config_world-in';
import WorldInApp from '.';

const TrackedApp = setupI13n(WorldInApp, {
  rootModelData: {
    product: 'The World In',
  },
  isViewportEnabled: true,
}, [ new ReactI13nOmniture(OmnitureConfig) ]);
export default (
  <TrackedApp path="/article/10501" />
);
