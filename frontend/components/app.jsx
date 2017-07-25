import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div>
    <header>
      <Link to="/">
        <h1>The Online Store</h1>
      </Link>
    </header>
    <Switch>

    </Switch>
  </div>
);

export default App;
