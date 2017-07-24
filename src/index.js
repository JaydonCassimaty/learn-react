import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import 'containers/app/Animations.css';
import App from 'containers/app/App';
import registerServiceWorker from 'utils/registerServiceWorker';

ReactDOM.render(
  <App/ > ,
  document.getElementById('root')
);

registerServiceWorker();
