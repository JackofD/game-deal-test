import DealList from './screens/DealList';
import StoreList from './screens/StoreList';
import DealDetail from './screens/DealDetail';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
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
          <Route path="/:id" exact>
            <DealList />
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
