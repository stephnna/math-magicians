import React from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  // Initialize useState hook's inpute argument
  const initialcalculation = {
    total: 0,
    next: null,
    operation: null,
  };
  //destructure useState output
  const [currentCalculation, setCalculation] = React.useState(initialcalculation);

// performs calculation and set the result
  const clickHandler = (event) => {
    const result = calculate(currentCalculation, event.target.textContent);
    setCalculation(result);
  };

  //display the calculatiuon result
  const showResult = (event) => setCalculation({ total: event.target.textContent }); 

  // creates all calculator buttons except the display which has a div container
  const createButtons = () => {
    const buttonArray = ['AC', '+/-', '%', '÷', 'x', '+', '-', '=', '.'];
    for (let i = 9; i > -1; i -= 1) buttonArray.push(i);
    return buttonArray.map((item, index) => <button onClick={clickHandler} className="buttons" id={`btn${index}`} key={item.toString()} type="button">{item}</button>);
  };
  // destructure the result of current calculation
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
