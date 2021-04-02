import './App.css';
import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';

const App = () => {

  const APP_ID  = "2e17dc01";
  const APP_KEY = "eb394a7007cd98a44599a1118c3099a0";
  // var exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);
  const [recipies, setRecipies] = useState([]); //state to store recipies.
  const [search, setSearch] = useState(''); //state to store the incomplete search term while it's being written before clicking on search button.
  const [query, setQuery] = useState('salad'); //state to store the final search term.
    
  useEffect( () => {
    getRecepies();
  }, [query]);

  const getSearch = e => { //This funtion is triggered because of onSubmit in the form at line 44. e here is an even (not event listener).
    e.preventDefault(); //To stop the automatic page refresh everytime we start typing into the search box.
    setQuery(search);
    setSearch('');
  }

  const getRecepies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits);

    // Alternate way.
    // fetch(exampleReq)
    // .then(response => {
    //   response.json
    // })
  }
  
  const updateSearch = e => { //e is a variable to target an event that is triggered when onChange is triggered by input field in line 45.
    setSearch(e.target.value);
  }

  return(
    <div className = "App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipies.map(x => ( //Here we have map function which takes another function to apply over all the elemets in recepies array.
          <Recipe 
          title={x.recipe.label} 
          calories={x.recipe.calories} 
          image={x.recipe.image}
          ingredients = {x.recipe.ingredients} 
          key={x.recipe.label} /> // For the inner function we are just defining the return and not the body hence () instead of {} after recipe => ()
        ))}
        <h1 onClick={() => setCounter(counter+1)}>{counter}</h1>
      </div>
    </div>
  )
}

export default App;