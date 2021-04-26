import React, { Component } from 'react';
import RecipeForm from '../components/recipes/RecipeForm'
import RecipeCard from '../components/recipes/RecipeCard'
import RecipesList from '../components/recipes/RecipesList'
import { connect } from 'react-redux'
import {fetchRecipes} from '../actions/fetchRecipes'

class RecipeContainer extends Component {

  componentDidMount() {
    this.props.fetchRecipes()
  }

  // componentDidMount() {
  //   this.handleFetch()
  // }

  render() {
    return (
      <div>
        <RecipeForm /><br/>
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


export default connect(mapStateToProps, {fetchRecipes})(RecipeContainer);
