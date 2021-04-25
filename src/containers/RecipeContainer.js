import React, { Component } from 'react';
import RecipeForm from '../components/recipes/RecipeForm'
import RecipeCard from '../components/recipes/RecipeCard'
import RecipesList from '../components/recipes/RecipesList'
import { connect } from 'react-redux'
import fetchRecipes from '../actions/fetchRecipes'

class RecipeContainer extends Component {

  // componentDidMount() {
  //   this.props.fetchRecipes()
  // }

  render() {
    return (
      <div>
        <RecipeForm />
        <RecipesList />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes
})

// mapDispatchToProps = dispatch => ({
//   addRecipe: recipe => dispatch({ type: 'ADD_RECIPE', recipe }),
//   deleteRecipe: id => dispatch({ type: 'DELETE_RECIPE', id })
// })


export default connect(mapStateToProps, {fetchRecipes})(RecipeContainer);
