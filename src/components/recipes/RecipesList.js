import React from 'react';
import RecipeCard from './RecipeCard'

const RecipesList = (props) => {

  console.log(props)

  return (
    <div>
    Recipe List
      {props.recipes.map(recipe => <li key={recipe.id}>{recipe.name} - {recipe.description} </li>)}
      <RecipeCard />
    </div>
  )

}

export default RecipesList;
