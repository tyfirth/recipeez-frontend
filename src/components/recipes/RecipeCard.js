import React, { Component } from 'react';
import {connect} from 'react-redux'

class RecipeCard extends Component {

  state = {
    recipes: []
  }

  render() {
    return (
      <div class='flex'>
        {this.props.recipes.map(recipe =>

          <div class='p-6 max-w-sm mx-auto rounded-xl shadow-xl flex items-center space-x-4 place-content-center'>
            <div class='food-name'>
              <h3 class='font-bold'>{recipe.title}</h3>
            </div>
            <img class='mx-auto  p-5 max-w-sm flex-shrink self-auto'  key={recipe.id} src={recipe.image} alt={recipe.name} />
            <button class='absolute ...'>Click to Favorite </button>
          </div>
        )}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeCard);
