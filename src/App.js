import React, { Fragment } from 'react';

import Header from './common/header';
import Home from './pages/home';
import Create from './pages/create/loadable';
import Guide from './pages/guide/loadable';
import About from './pages/about/loadable';
import Links from './pages/links/loadable';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    // <div>test</div>
    <Provider store={store}>
      <Router>
        <div>
          <Header />
            <Switch>
              <Fragment>
                <Route path='/' exact component={Home} />
                <Route path='/Create' exact component={Create} />
                <Route path='/Guide' exact component={Guide} />
                <Route path='/About' exact component={About} />
                <Route path='/Links' exact component={Links} />
              </Fragment>
            </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
