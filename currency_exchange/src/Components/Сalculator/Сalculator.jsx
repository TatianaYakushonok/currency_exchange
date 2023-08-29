import style from './Calculator.module.scss';
import React from 'react';

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }

  calcRate = (e) => {
    e.preventDefault();
    const target = e.target.elements;
    const countCurrancy = target['count-currancy'].value;
    const typeCurrancy = target['type-currancy'].value;
    this.setState({ result: Math.floor((1 / this.state.rate[typeCurrancy].toFixed(4)) * countCurrancy) });
  }

  render() {
    return (
      <section className={style.calculator}>
        <h2 className={style.calculatorTitle}>Калькулятор обмена</h2>

        <div className={style.calculatorContainer}>
          <p className={style.calculatorDesc}>Я хочу</p>

          <form onSubmit={this.calcRate}>
            <input type='number' defaultValue='150' name='count-currancy' />
            <select name='type-currancy' id=''>
              {Object.keys(this.props.rate).map((keyName, i) => 
                <option value={keyName} key={i}>{keyName}</option>
              )}
            </select>
            <input type='submit' defaultValue='calc' />
          </form>

          <div>
            <h3>Результат</h3>
            <ul>
              <li>RUB {this.state.result}</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Calculator;