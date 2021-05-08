import React, { Component } from 'react';
import RecipeForm from '../components/RecipeForm';
import RecipeCard from '../components/RecipeCard';
// import {fetchRecipes} from '../actions/fetchRecipes';
import {getRandomRecipes} from '../actions/getRandomRecipes';
import {handleSearch} from '../actions/handleSearch';

import {connect} from 'react-redux'

class RecipeContainer extends Component {

  state = {
    recipes: []
  }


componentDidMount() {
  this.state.recipes.empty? this.props.handleSearch() : this.props.getRandomRecipes()
}


  render() {
    return (
      <div className='recipe-container' class='bg-yellow-100'>
        <RecipeCard recipes={this.props.recipes} />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}



export default connect(mapStateToProps, {getRandomRecipes, handleSearch})(RecipeContainer);
