require('fetch-ie8');

const React = require('react');
const render = require('react-dom').render;

import Routers from './router/router.js'




render(
  <Routers/>,
  document.getElementById('app')
)