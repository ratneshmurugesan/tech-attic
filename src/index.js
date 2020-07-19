import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ScreenSizeProvider } from './prototypes/AutoScreenResizer/index.jsx';

ReactDOM.render(
  <ScreenSizeProvider><App /></ScreenSizeProvider>,
  document.getElementById('root')
);