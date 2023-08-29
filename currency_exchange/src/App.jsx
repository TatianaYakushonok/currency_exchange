import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Root from './routes/Root';
import MainPage from './pages/MainPage/MainPage';
import ExchangePoints from './pages/ExchangePoints/ExchangePoints';
import ContactsPages from './pages/ContactsPage/ContactsPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Root />
      </Router>
    )
  }
}

export default App;