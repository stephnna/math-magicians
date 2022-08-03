import React from 'react';

class Calculator extends React.Component {
  createButtons = () => {
    const buttonArray = ['AC', '+/-', '%', '/', '*', '+', '-', '=', '.'];
    for (let i = 9; i > -1; i -= 1) {
      buttonArray.push(i);
    }
    const listbuttons = buttonArray.map((item, index) => <button className="buttons" id={`btn${index}`} key={item.toString()} type="button">{item}</button>);
    return listbuttons;
  };

  render() {
    return (
      <div className="App">
        <div className="buttons-container">
          <div className="display" />
          {this.createButtons()}
        </div>
      </div>
    );
  }
}

export default Calculator;
