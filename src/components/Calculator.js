import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const initialcalculation = {
    total: 0,
    next: null,
    operation: null,
  };

  const [currentCalculation, setCalculation] = useState(initialcalculation);

  const clickHandler = (event) => {
    const result = calculate(currentCalculation, event.target.textContent);
    setCalculation(result);
  };

  const showResult = (event) => {
    setCalculation({ total: event.target.textContent });
  };

  const createButtons = () => {
    const buttonArray = ['AC', '+/-', '%', '÷', 'x', '+', '-', '=', '.'];
    for (let i = 9; i > -1; i -= 1) buttonArray.push(i);
    return buttonArray.map((item, index) => <button onClick={clickHandler} className="buttons" id={`btn${index}`} key={item.toString()} type="button">{item}</button>);
  };
  const { total, next, operation } = currentCalculation;

  return (
    <div className="buttons-container">
      <div className="display" onChange={showResult}>
        {total}
        {operation}
        {next}
      </div>
      <>{createButtons()}</>
    </div>
  );
};

export default Calculator;
