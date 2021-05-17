import React, { Component } from 'react';
import RecipePage from '../components/RecipePage';
import RecipeList from '../components/RecipeList'
import RecipeCard from '../components/RecipeCard'

import {fetchRecipes} from '../actions/fetchRecipes';
import {getRandomRecipes} from '../actions/getRandomRecipes';
import {handleSearch} from '../actions/handleSearch';

import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

class RecipeContainer extends Component {


componentDidMount() {
 this.props.fetchRecipes()
}



  render() {
    return (
      <div className='recipe-container' class='bg-yellow-100'>

          <Route path='/' render={() => <RecipeList recipes={this.props.recipes} />} />
      </div>

    )
  }

}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}



export default connect(mapStateToProps, {getRandomRecipes, handleSearch, fetchRecipes})(RecipeContainer);
