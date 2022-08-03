/* eslint no-use-before-define: 0 */
function App() {
  const createButtons = () => {
    const buttonArray = ['AC', '+/-', '%', '/', '*', '+', '-', '=', '.'];
    for (let i = 0; i < 10; i += 1) {
      buttonArray.push(i);
    }
    const listbuttons = buttonArray.map((item, index) => <button className="buttons" id={`btn${index}`} key={item.toString()} type="button">{item}</button>);
    return listbuttons;
  };

  return (
    <div className="App">
      <div className="buttons-container">
        <div className="display" />
        {createButtons()}
      </div>
    </div>
  );
}

export default App;
