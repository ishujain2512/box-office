import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is Home Page
      </Route>
      <Route exact path="/starred">
        This is Starred
      </Route>
      <Route>This is 404 Page not found HI feel free to browse us more.</Route>
    </Switch>
  );
}

export default App;
