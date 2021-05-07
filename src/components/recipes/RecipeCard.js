import React, { Component } from 'react';
import {connect} from 'react-redux'

class RecipeCard extends Component {

  state = {
    recipes: []
  }

  render() {
    return (
      <div className='recipe-card' class='border p-6 max-w-xl mx-auto rounded-xl shadow-xl bg-white space-y-3 '>
        {this.props.recipes.map(recipe =>
          <div key={recipe} class='font-bold'>

            <h3 class='text-center'>{recipe.title}</h3>

            <img src={recipe.image} alt={recipe.name} class='p-5' />

            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded mx-auto flex justify-center"
              onClick={this.handleOnClick}
              >Click to Favorite
            </button>

          </div>
        )}
      </div>

    )
  }

}


export default RecipeCard;
