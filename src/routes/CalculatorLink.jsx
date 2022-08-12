import { Link } from 'react-router-dom';
import Calculator from '../components/Calculator';
export default function CalculatorLink() {
  return (
    <main style={{ padding: "1rem 0" }}>
    <nav className='home-main-nav'>
     <div><h1>Math Magicians</h1></div>
      <div>
      <Link to="/">Home</Link>
      {' '}
      |
      {' '}
      <Link to="/calculator">Calculator</Link>
      {' '}
      |
      {' '}
      <Link to="/quote">Quote</Link>
      </div>         
    </nav>
    <div className='calculator-link-h3'>
      <div><h3>Let's do some Math</h3></div>
      <Calculator />
      </div>
    </main>
  );
}

