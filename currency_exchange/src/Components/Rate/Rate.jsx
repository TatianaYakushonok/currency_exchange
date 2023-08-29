import Container from '../../Leyout/Container/Container';
import style from './Rate.module.scss';
import React from 'react';

class Rate extends React.Component {
  render() {
    return (
      <Container>
        <h2>Курс валют на 29 августа 2023г.</h2>

        <section className={style.rate}>
          <article className={style.rateItem}>
            <div className={style.rateCurrencyName}>USD</div>
            <div className={style.rateCurrencyIn}>1500 Kr</div>
            <div className={style.rateCurrencyOut}>1200 Kr</div>
          </article>

          <article className={style.rateItem}>
            <div className={style.rateCurrencyName}>USD</div>
            <div className={style.rateCurrencyIn}>1500 Kr</div>
            <div className={style.rateCurrencyOut}>1200 Kr</div>
          </article>

          <article className={style.rateItem}>
            <div className={style.rateCurrencyName}>USD</div>
            <div className={style.rateCurrencyIn}>1500 Kr</div>
            <div className={style.rateCurrencyOut}>1200 Kr</div>
          </article>
          
        </section>
      </Container>
    )
  }
}