import React from 'react';
import DealList from './screens/DealList';
import StoreList from './screens/StoreList';
import DealDetail from './screens/DealDetail';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/stores">
            <StoreList />
          </Route>
          <Route path="/DealDetail/:id">
            <DealDetail />
          </Route>
          <Route path="/" exact>
            <DealList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
