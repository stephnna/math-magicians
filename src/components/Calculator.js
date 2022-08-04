import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  clickHandler = (event) => {
    const result = calculate(this.state, event.target.textContent);
    this.setState(result);
  }

  showResult = (event) => {
    this.setState({
      total: event.target.textContent,
    });
  }

  createButtons = () => {
    const buttonArray = ['AC', '+/-', '%', '÷', 'x', '+', '-', '=', '.'];
    for (let i = 9; i > -1; i -= 1) {
      buttonArray.push(i);
    }
    return buttonArray.map((item, index) => <button onClick={this.clickHandler} className="buttons" id={`btn${index}`} key={item.toString()} type="button">{item}</button>);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="buttons-container">
        <div className="display" onChange={this.showResult}>
          {total}
          {operation}
          {next}
        </div>
        <>{this.createButtons()}</>
      </div>
    );
  }
}

export default Calculator;
