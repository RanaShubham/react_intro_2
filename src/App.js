import './App.css';
import React,{useEffect, useState} from 'react';

const App = () => {

  const APP_ID  = "66216237";
  const APP_KEY = "a4946b48045d3f08510d23436ff1e137";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const[counter, setCounter] = useState(0);
  
  useEffect( () => {
    alert("effect ran!!");
  }, [counter]);

  return(
    <div className = "App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" onClick={(event)=>event.preventDefault()} type="submit">Search</button>
      </form>
      <h1 onClick={() => setCounter(counter+1)}>{counter}</h1>
    </div>
  )
}

export default App;
