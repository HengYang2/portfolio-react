import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage'

function App() {
  return (
    <Router>
      <switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </switch>
    </Router>
  );
}

export default App;
