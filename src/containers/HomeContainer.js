import React, {Component} from 'react';
import MenuContainer from './MenuContainer'
import RecipeContainer from './RecipeContainer'
import RecipeForm from '../components/RecipeForm'
import {handleSearch} from '../actions/handleSearch'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import About from '../components/About'
import Favorites from '../components/Favorites'
import RecipePage from '../components/RecipePage';



class HomeContainer extends Component {

  render() {

    return (
      <div className='HomeContainer'>

        <MenuContainer />

        <Route exact path='/about' component={About}></Route>

        <Route exact path='/'>
          <RecipeForm handleSearch={this.handleSearch}/>
          <RecipeContainer apiKey={this.props.apiKey}/>
        </Route>

        <Route exact path='/favorites'
            render={routeProps =>
              <Favorites {...routeProps} recipes={this.props.recipes}/> } />

        <Route path="/recipes/:id"
          render={routeProps => <RecipePage {...routeProps} recipes={this.props.recipes} /> } />
      </div>
    )
  }


}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}


export default connect(mapStateToProps, {handleSearch})(HomeContainer);
