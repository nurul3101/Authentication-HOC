import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route , BrowserRouter , Switch } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';
import Resources from './components/resources';
import Header from './components/header'
import requireAuth from './components/require_authentication';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <Switch>
      <Route path="/resources" component={requireAuth(Resources)} />
      <Route path="/" component={App} />
    </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
