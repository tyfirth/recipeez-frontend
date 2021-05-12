import React, { Component } from 'react';
import {addRecipe} from '../actions/addRecipe'
import {connect} from 'react-redux'


const RecipeCard = (props) => {
  console.log(props)
    // return (
    //   <div className='recipe-card' class='border p-6 max-w-xl mx-auto rounded-xl shadow-xl bg-white space-y-3 '>
    //     {props.recipes.map(recipe =>
    //
    //       <div key={recipe.id} class='font-bold'>
    //
    //         <h3 class='text-center'>{recipe.title}</h3>
    //
    //         <img src={recipe.image} alt={recipe.name} class='p-5' />
    //
    //         <button
    //           class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded mx-auto flex justify-center"
    //           >Click to Favorite
    //           </button>
    //
    //       </div>
    //     )}
    //   </div>
    // )

    return (
      <div className='recipe-card' key={props.recipe.id} class='border p-6 max-w-xl mx-auto rounded-xl shadow-xl bg-white space-y-3'>

        <h3 class='text-center font-bold'>{props.recipe.title}</h3>
        <img src={props.recipe.image} alt={props.recipe.title} class='p-5' />
        <p class='text-center'>Description: {props.recipe.summary}</p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded mx-auto flex justify-center"
            >Click to Favorite
        </button>
      </div>
    )


}




export default connect(null, {addRecipe})(RecipeCard);
