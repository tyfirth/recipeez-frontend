import React, {Component} from 'react';
import MenuContainer from './MenuContainer'
import RecipeContainer from './RecipeContainer'
import RecipeForm from '../components/recipes/RecipeForm'

class HomeContainer extends Component {

  render() {

    return (
      <div className='HomeContainer'>
        <MenuContainer />
        <RecipeForm />
        <RecipeContainer />
      </div>
    )
  }


}




export default HomeContainer;
