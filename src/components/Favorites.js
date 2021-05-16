import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'

class Favorites extends Component {
  //
  // componentDidMount() {
  //   let faves = this.props.recipes.filter(recipe => recipe.isFavorite = true)
  //   console.log(faves)
  // }




  render() {
    return (
      <div className='favorites' class='hover:text-white'>

        {this.props.recipes.map(recipe =>
          <ul>
            <li>{recipe.title}</li>
          </ul>
        )}

      </div>
    )
  }
}

export default Favorites;
