import * as React from 'react';
import * as ReactDOM from 'react-dom';
// 3rd party
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';

ReactDOM.render(<App/>, document.getElementById('root') as HTMLElement);
