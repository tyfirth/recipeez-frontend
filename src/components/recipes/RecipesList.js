import React from 'react';
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'

const RecipesList = (props) => {


  return (
    <div>
      <RecipeCard />
    </div>
  )

}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}


export default connect(mapStateToProps)(RecipesList);
