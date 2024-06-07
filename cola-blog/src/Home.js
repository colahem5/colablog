import { useState } from "react";

const Home = () => {
  // let name = 'mario';
  const [name, setName] = useState('Soda Captain Cream');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // name = 'luigi';
    setName('General Cola');
    setAge(30);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } has tripped { age } times.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;