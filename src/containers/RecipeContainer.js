import React, { Component } from 'react';
import RecipeForm from '../components/recipes/RecipeForm'
import RecipeCard from '../components/recipes/RecipeCard'
import RecipesList from '../components/recipes/RecipesList'
import { connect } from 'react-redux'
import {fetchRecipes} from '../actions/fetchRecipes'
import {getRandomRecipes} from '../actions/getRandomRecipes'

let apiKey = process.env.REACT_APP_apiKey

class RecipeContainer extends Component {

state = {
  recipes: []
}

  componentDidMount() {
    if (this.state.recipes.length === 0) {
      this.props.getRandomRecipes()
    } else {
        this.props.handleSearch()
    }
  }

  handleSearch = (query) => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&instructionsRequired=true&addRecipeInformation=true&fillIngredients=true&number=3&apiKey=${apiKey}`)
      .then(resp => resp.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <RecipeForm handleSearch={this.handleSearch} /><br/>
        <RecipesList recipes={this.props.recipes} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      recipes: state.recipes
  }
}


export default connect(mapStateToProps, {fetchRecipes, getRandomRecipes})(RecipeContainer);
