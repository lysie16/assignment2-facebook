import './App.css';
import Header from "./components/header/index";

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
          <Route exact path="/">
            <div>Home Page</div>
            <Header></Header>
          </Route>
          <Route exact path="/profile">
            <div>Profile Page</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
