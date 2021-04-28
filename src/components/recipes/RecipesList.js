import React from 'react';
import RecipeCard from './RecipeCard'

const RecipesList = (props) => {


  return (
    <div>
      {props.recipes.map(recipe => <img key={recipe.id} src={recipe.image} alt={recipe.name} />)}
      <RecipeCard />
    </div>
  )

}

export default RecipesList;
