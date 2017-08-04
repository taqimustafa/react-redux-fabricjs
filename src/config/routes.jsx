import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from 'views/Home';
import About from 'views/About';
import Editor from 'views/Editor';

const history = createBrowserHistory();

const CustomRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} history={history}/>
      <Route path="/about" component={About} history={history}/>
      <Route path="/editor" component={Editor} history={history}/>
    </Switch>
  </Router>
);
export default CustomRouter;
