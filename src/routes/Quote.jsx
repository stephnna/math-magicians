import { Link } from 'react-router-dom';
export default function Qoute() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <nav  className='home-main-nav'>
     <div><h1>Math Magicians</h1> </div>
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
    <p className='main-quote'>Math is not about a number, it is about computation. -John Paul</p>
    </main>
  );
}