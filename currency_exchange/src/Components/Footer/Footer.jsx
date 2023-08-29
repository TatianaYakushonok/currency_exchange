import Container from '../Layout/Container/Container';
import style from './Footer.module.scss';
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className={style.footer}>
        <div className={style.footerBottom}>
          <Container>
            <div className={style.footerLinkContainer}>

              <div className={style.footerItem}>
                <h2 className={style.footerTitle}>
                  <a className={style.footerTitleLink} href="">2023 &copy; React. Lite Level</a>
                </h2>
                <p className={style.footerTitleInfo}>All Rights Reserved</p>
              </div>

              <div className={style.footerItem}>
                <ul className={style.footerListMap}>
                  <li className={style.footerItemMap}>
                    <a href='#' tooltip='Карта сайта'>Карта сайта</a>
                  </li>
                  <li className={style.footerItemMap}>
                    <a href='#' target='_blank' tooltip='Google Sitemap'>Google Sitemap</a>
                  </li>
                </ul>
              </div>

              <div className={style.footerItem}>
                <ul className={style.footerListLink}>
                  <li className={style.footerItemLink}>
                    <a href='#' tooltip='Контакты'>Контакты</a>
                  </li>
                  <li className={style.footerItemLink}>
                    <a href='#'>Гарантии</a>
                  </li>
                  <li className={style.footerItemLink}>
                    <a href='#'>О сервисе</a>
                  </li>
                  <li className={style.footerItemLink}>
                    <a href='#'>Условия возврата</a>
                  </li>
                  <li className={style.footerItemLink}>
                    <a href='#'>Соглашение о использовании сервиса</a>
                  </li>
                </ul>
              </div>

            </div>
          </Container>
        </div>

        <div className={style.footerCopyright}>
          <div className={style.footerFlexContainer}>
            <div className={style.footerItem}>
              <ul className={style.footerList}></ul>
            </div>

            <div className={style.footerItem}>
              <div className={style.footerPayment}>
                <ul className={style.footerList}></ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;