import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import UserGuide from './docs/userGuide';

const App = () => ( 
  <Router>
    <Switch>
      <Route path="/docs/userguide" component={UserGuide}
      />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
