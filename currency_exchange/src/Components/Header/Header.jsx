import React from 'react';
import style from './Header.module.scss';
import Container from '../Layout/Container/Container';
import Navigation from './Navigation/Navigation';

class Header extends React.Component {
  
  render() {
    return (
      <header className={style.header}>
        <div className={style.headerTopBar}></div>

        <div className={style.headerMain}>
          <Container>
            <h1 className={style.headerTitle}>React Lite Level</h1>
          </Container>
        </div>

        <Navigation />
      </header>
    )
  }
}

export default Header;
