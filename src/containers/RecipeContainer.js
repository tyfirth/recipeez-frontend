import React, { Component } from 'react';
import RecipePage from '../components/RecipePage';
import RecipeList from '../components/RecipeList'

import {fetchRecipes} from '../actions/fetchRecipes';
import {getRandomRecipes} from '../actions/getRandomRecipes';
import {handleSearch} from '../actions/handleSearch';

import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

class RecipeContainer extends Component {


componentDidMount() {
 this.props.fetchRecipes()
}



  render() {
    return (
      <div className='recipe-container' class='bg-yellow-100'>
        <Switch>
          <Route exact path='/' render={() => <RecipeList recipes={this.props.recipes} />} />

          <Route path="/recipes/:id" component={RecipePage} />
        </Switch>
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
