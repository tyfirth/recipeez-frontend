import React, {Component} from 'react';

const RecipePage = ({match, recipes}) => {

console.log(match.params.id)

let recipe = recipes.filter(recipe => recipe.id == match.params.id)[0]

console.log(recipe)

  return (
    <div className='recipe-page' class='mx-auto p-5'>

      <h1 class='text-center font-bold'>{recipe.title}</h1>

      <img src={recipe.image}
        alt={recipe.title}
        class='p-5 mx-auto' />

      <p class='text-center'>Description: {recipe.summary}</p>
    </div>
  )


}

export default RecipePage;
