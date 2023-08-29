import React from 'react';
import Header from '../Components/Header/Header';
import Main from '../Components/Layout/Main/Main';
import Footer from '../Components/Footer/Footer';

class Root extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Footer />
      </>
    )
  }
}

export default Root;