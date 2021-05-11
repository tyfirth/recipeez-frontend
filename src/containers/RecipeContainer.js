import React, { Component } from 'react';
import RecipeForm from '../components/RecipeForm';
import RecipeCard from '../components/RecipeCard';
import RecipeList from '../components/RecipeList'
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

// componentDidUpdate(prevProps) {
//   debugger;
//
//   console.log('Recipe Container updated!')
// }
//


  render() {
    return (
      <div className='recipe-container' class='bg-yellow-100'>
        <RecipeList recipes={this.props.recipes} />
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
