const Home = () => {

    const handleClick = () => {
        console.log('You clicked on the button.');
    };

    const handleClickAgain = (name) => {
        console.log('hello '+ name);
    };

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <br/>
            <button onClick={handleClick}>Click Here</button>
            <button onClick={() => {
                handleClickAgain('Aditya');
            }}>Click here again.</button>
        </div>
     );
}
 
export default Home;