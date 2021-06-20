
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
