
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css'
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
