import React, { Component } from 'react';
import RecipeForm from '../components/recipes/RecipeForm';
import RecipeCard from '../components/recipes/RecipeCard';
// import {fetchRecipes} from '../actions/fetchRecipes';
// import {getRandomRecipes} from '../actions/getRandomRecipes';
// import {handleSearch} from '../actions/handleSearch';
// import {connect} from 'react-redux'

const apiKey = process.env.REACT_APP_apiKey

class RecipeContainer extends Component {

  state = {
    recipes: []
  }



  render() {
    return (
      <div className='recipe-container' class='bg-yellow-100'>
        <RecipeCard recipes={this.state.recipes} />
      </div>
    )
  }

}

export default RecipeContainer;
