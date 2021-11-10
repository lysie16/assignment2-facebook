import './App.css';
import Header from "./components/header/index";
import Sidebar from "./components/sidebar/index";
import Feed from "./components/feed/index";
import Widgets from "./components/widgets/index";


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
            {/* <div>Home Page</div> */}
            <Header></Header>
            <div className ="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
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
