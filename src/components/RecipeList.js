import React, { Component } from 'react';
import RecipeCard from '../components/RecipeCard'

const RecipeList = (props) => {
  return (
    <div>
      {props.recipes.map(recipe =>
        <li key={recipe.id}><RecipeCard recipe={recipe} /></li>
      )}

    </div>

  )
}

export default RecipeList;
