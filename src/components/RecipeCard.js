import React, { Component } from 'react';
import {addRecipe} from '../actions/addRecipe'
import {favoriteRecipe} from '../actions/favoriteRecipe'
import {deleteRecipe} from '../actions/deleteRecipe'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'


class RecipeCard extends Component {

  state = {
    recipe: this.props.recipe
  }

  handleOnClick = (event) => {
    let faveStatus = this.state.recipe.isFavorite
    // debugger;
    this.setState({
      recipe: {...this.state.recipe, isFavorite: !faveStatus}
    })
    this.props.favoriteRecipe(this.state.recipe)
    // event.target.reset();
  }

  removeRecipe = (event) => {
    this.props.deleteRecipe(this.state.recipe.id)
  }


render() {

  return (
    <div className='recipe-card' key={this.props.recipe.id} class='border p-6 max-w-xl mx-auto rounded-xl shadow-xl bg-white space-y-3'>

      <h3 class='text-center font-bold'>{this.props.recipe.title}</h3>
      <img src={this.props.recipe.image} alt={this.props.recipe.title} class='p-5' />
      <p class='text-center'>Description: {this.props.recipe.summary}</p>

    <div>
      {this.state.recipe.isFavorite ? (<button onClick={this.handleOnClick} class="bg-red-500   hover:bg-red-700 text-white font-bold p-3 rounded mx-auto flex justify-center">You Like this Recipe!</button>
        ) : (
          <button onClick={this.handleOnClick} class="bg-blue-500   hover:bg-blue-700 text-white font-bold p-3 rounded mx-auto flex justify-center">Click To Favorite</button>)}
    </div>

    <Link class='flex justify-center text-blue-500 focus:text-purple-500'
      key={this.props.recipe.id}
      to={`/recipes/${this.props.recipe.id}`}
      >{this.props.recipe.title}</Link>

      <div>
        <button onClick={this.removeRecipe}
          class="bg-red-500 hover:bg-red-700 text-white font-bold p-3 rounded mx-auto flex object-right-top">Delete Recipe</button>
      </div>


    </div>
  )

}
}


const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, {addRecipe, favoriteRecipe, deleteRecipe})(RecipeCard);
