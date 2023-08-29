import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Main from '../Components/Layout/Main/Main';
import Footer from '../Components/Footer/Footer';
import MainPage from '../pages/MainPage/MainPage';
import ExchangePoints from '../pages/ExchangePoints/ExchangePoints';
import ContactsPages from '../pages/ContactsPage/ContactsPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

class Root extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={ <MainPage/> } />
            <Route path="/exchange" element={ <ExchangePoints /> } />
            <Route path="/contacts" element={ <ContactsPages /> } />
            <Route path="*" element={ <ErrorPage /> } />
          </Routes>
        </main>
        <Footer />
      </>
    )
  }
}

export default Root;