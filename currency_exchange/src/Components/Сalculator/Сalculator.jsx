import Container from '../../Leyout/Container/Container';
import style from './Calculator.module.scss';
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <Container>
        <section>
          <h2>Калькулятор обмена</h2>

          <div className={style.calculatorContainer}>
            <p>Я хочу</p>

            <label>
              <input type='radio' name='radio' value='0' />
              Купить
            </label>

            <label>
              <input type='radio' name='radio' value='1' />
              Продать
            </label>

            <div>
              <input type='number' value='150' />
              <select name='' id=''>
                <option value='USD'>USD</option>
                <option value='RUB'>RUB</option>
                <option value='EUR'>EUR</option>
              </select>
            </div>

            <div>
              <h3>Результат</h3>
              <ul>
                <li>EUR 150</li>
                <li>EUR 150</li>
                <li>EUR 150</li>
                <li>EUR 150</li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
    )
  }
}

export default Calculator;