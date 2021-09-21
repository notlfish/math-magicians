import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Calculator from './pages/CalculatorPage';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Header from './components/Header';
import './App.css';

const App = () => (
  <div>
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
        </Switch>
      </main>
    </Router>
  </div>
);

export default App;
