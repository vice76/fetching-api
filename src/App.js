import React,{ Fragment } from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import About from './pages/about';
import Create from './pages/create';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/create' component={Create} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
