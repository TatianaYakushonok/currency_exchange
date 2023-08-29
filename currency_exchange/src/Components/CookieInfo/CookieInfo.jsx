import Container from '../../Leyout/Container/Container';
import style from './CookieInfo.module.scss';
import React from 'react';

class CookieInfo extends React.Component {
  render() {
    return (
      <Container>
        <div className={style.cookieContainer}>
          <p className={style.cookieInfo}>
            На нашем сайте мы используем cookie для сбора информации технического характера.<br/>В часности, для персонифицированной работы сайта мы орабатываем IP-адрес региона вашего местоположения.&nbsp;<a className={style.cookieBtn}>Ok</a>
          </p>
        </div>
      </Container>
    )
  }
}

export default CookieInfo;