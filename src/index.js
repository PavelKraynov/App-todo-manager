import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App.js';
 import store  from './redux/store.js';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
