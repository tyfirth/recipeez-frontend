import React, { Component } from 'react';
import RecipeCard from '../components/RecipeCard'

const RecipeList = (props) => {
  return (
    <div>
      {props.recipes.map(recipe =>
        <li key={recipe.id}>{recipe.title} - {recipe.summary}</li>
      )}
    <RecipeCard recipes={props.recipes} />
    </div>

  )
}

export default RecipeList;
