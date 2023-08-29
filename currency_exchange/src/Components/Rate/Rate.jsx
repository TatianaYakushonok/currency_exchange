import Container from '../Layout/Container/Container';
import Calculator from '../Сalculator/Сalculator';
import style from './Rate.module.scss';
import React from 'react';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      currencyRate: {},
    };
    this.currency = ['USD', 'EUR', 'CAD'];
  }

  componentDidMount() {
    this.getRate();
  }

  getRate = () => {
    fetch('https://www.cbr-xml-daily.ru/latest.js')
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ date: data.date });
        const result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        this.setState({ currencyRate: result });
      })
  }

  render() {
    return (
      <Container>
        <section className={style.rate}>

        <h2 className={style.rateTitle}>Курс валют на {this.state.date}</h2>

          <div className={style.rateItemContainer}>
            {Object.keys(this.state.currencyRate).map((keyName, i) =>
              <article className={style.rateItem} key={keyName}>
                <div className={style.rateCurrencyName}>{keyName}</div>
                <div className={style.rateCurrencyIn}>
                  {(1 / this.state.currencyRate[keyName].toFixed(4)).toFixed(2)} RUB
                </div>
                <div className={style.rateCurrencyOut}>
                  <p>*Цена за 1RUB</p>
                  <p>{this.state.currencyRate[keyName].toFixed(2)} {keyName}</p>
                </div>
              </article>
            )}
          </div>
          
        </section>
        <Calculator rate={this.state.currencyRate} />
      </Container>
    )
  }
}

export default Rate;