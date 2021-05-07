import React, { Component } from 'react';
import RecipeForm from '../components/recipes/RecipeForm'
import RecipeCard from '../components/recipes/RecipeCard'
import RecipesList from '../components/recipes/RecipesList'
import { connect } from 'react-redux'
import {fetchRecipes} from '../actions/fetchRecipes'
import {getRandomRecipes} from '../actions/getRandomRecipes'
import {handleSearch} from '../actions/handleSearch'

let apiKey = process.env.REACT_APP_apiKey

class RecipeContainer extends Component {

state = {
  recipes: []
}


}




export default RecipeContainer;
