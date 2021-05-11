import React, { Component } from 'react';
import RecipeCard from '../components/RecipeCard'

const RecipeList = ({recipes}) => (
  <div className='recipe-list'>
  {recipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id} />)}

  </div>
)

export default RecipeList;
