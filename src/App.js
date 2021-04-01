import logo from './logo.svg';
import './App.css';
import React from 'react';

const App = () => {

  const APP_ID  = "66216237";
  const APP_KEY = "a4946b48045d3f08510d23436ff1e137";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`



  return(
    <div className = "App">
      <h1>Hello React</h1>
    </div>
  )
}

export default App;
