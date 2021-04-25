import React from 'react';
import RecipeCard from './RecipeCard'

const RecipesList = (props) => {

  console.log(props)

  return (
    <div>
    Recipe List
      <RecipeCard />
    </div>
  )

}

export default RecipesList;
