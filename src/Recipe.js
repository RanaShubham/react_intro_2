import React from 'react';
import style from './recipe.module.css'; //This is a css specially made for the recipe component.

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
            Ingredients:
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <img src={image} alt=""/>
        </div>
    );
}

export default Recipe;