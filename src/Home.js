import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState('Aditya');

    const handleClick = () => {
        setName('Shekhar');
    };

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name }</p>
            <br/>
            <button onClick={handleClick}>Click Here</button>
        </div>
     );
}
 
export default Home;