import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './TodoContainer/Todos';
 import store  from '../redux/store.js';
import { Provider } from 'react-redux';
import * as serviceWorker from '../serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
