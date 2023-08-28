import Container from '../../../Leyout/Container/Container';
import style from './Navigation.module.css';
import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <Container className={style.navContainer}>
        <nav className={style.nav}>
          <ul className={style.navList}>
            <li><a href='#!'>Главная</a></li>
            <li><a href='#!'>Пункты обмена</a></li>
            <li><a href='#!'>Контакты</a></li>
          </ul>
        </nav>
      </Container>
    )
  }
}

export default Navigation;