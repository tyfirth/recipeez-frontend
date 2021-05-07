import React, { Component } from 'react';
import RecipeForm from '../components/recipes/RecipeForm'
import RecipeCard from '../components/recipes/RecipeCard'
import {fetchRecipes} from '../actions/fetchRecipes'
import {getRandomRecipes} from '../actions/getRandomRecipes'
import {handleSearch} from '../actions/handleSearch'

let apiKey = process.env.REACT_APP_apiKey

class RecipeContainer extends Component {

  state = {
    recipes: []
  }

  componentDidMount() {
    fetch(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${apiKey}`)
      .then(resp =>resp.json())
      .then(data => {
        this.setState({
          recipes: data.recipes
        })
      })
  }

  render() {
    return (
      <div className='recipe-container' class='bg-yellow-100'>
        RecipeContainer
        <RecipeCard recipes={this.state.recipes}/>
      </div>
    )
  }


}




export default RecipeContainer;
