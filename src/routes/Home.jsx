import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <nav className="home-main-nav">
        <div>
          <h1>Math Magicians</h1>
          {' '}
        </div>
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
      <h3 className="home-main-h2">Welcome to our Page!</h3>
      <p className="home-main-p">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Explicabo quos doloremque id
        necessitatibus natus aperiam quibusdam perferendis
        laudantium sapiente unde molestias eligendi
        error ratione officia veniam itaque inventore,
        libero voluptatem.Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        Explicabo quos doloremque id necessitatibus natus aperiam
        quibusdam perferendis laudantium sapiente unde molestias eligendi
        error ratione officia veniam itaque inventore, libero voluptatem
      </p>

      <p className="home-main-p">
        Lorem ipsum dolor sit amet consectetur adipisicing e
        lit. Molestiae optio voluptatum nesciunt laborum iusto
        repudiandae, eum debitis quae fuga veritatis hic laudantium.
        Non minus sequi laborum quaerat, provident nobis? Earum?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
        veniam sed aspernatur ratione consequatur asperiores explicabo
        vitae, laboriosam perferendis modi numquam cum repellendus
        sunt, suscipit
        eum nemo nobis delectus debitis. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Reiciendis neque optio harum
        voluptatem facere earum explicabo eum officiis deserunt,
        voluptatibus hic undeipsa quisquam voluptatum quae aperiam
        dolorem voluptates
        consectetur!
      </p>
    </main>
  );
}
