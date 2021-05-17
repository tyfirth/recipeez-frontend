import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Favorites extends Component {

  render() {
    return (
      <div className='favorites' class='font-bold'>

        {this.props.recipes.map(recipe =>
          {if (recipe.isFavorite === true){
            return <div class='hover:text-blue-500'>
                    <li key={recipe.id}>
                          <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                  </div>
          }}


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

export default connect(mapStateToProps)(Favorites);
