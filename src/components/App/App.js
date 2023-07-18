import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import HomePage from '../HomePage/HomePage'
import PortfolioPage from '../PortfolioPage/PortfolioPage'

function App() {
  return (
    <Router>
      <Navbar />
      <switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/PortfolioPage">
          <PortfolioPage />
        </Route>
      </switch>
    </Router>
  );
}

export default App;
