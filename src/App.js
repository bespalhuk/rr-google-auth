import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import history from './history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Main}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
