import Container from '../../Layout/Container/Container';
import style from './Navigation.module.scss';
import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div className={style.navContainer}>
        <Container>
          <nav className={style.nav}>
            <ul className={style.navList}>
              <li><a href='#!'>Главная</a></li>
              <li><a href='#!'>Пункты обмена</a></li>
              <li><a href='#!'>Контакты</a></li>
            </ul>
          </nav>
        </Container>
      </div>
    )
  }
}

export default Navigation;