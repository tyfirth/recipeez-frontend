import React, {Component} from 'react';
import MenuContainer from './MenuContainer'
import RecipeContainer from './RecipeContainer'
import RecipeForm from '../components/RecipeForm'
import {handleSearch} from '../actions/handleSearch'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'

class HomeContainer extends Component {

  render() {

    return (
      <div className='HomeContainer'>
        <MenuContainer />
        <RecipeForm handleSearch={this.handleSearch}/>
        <RecipeContainer apiKey={this.props.apiKey}/>
      </div>
    )
  }


}




export default connect(null, {handleSearch})(HomeContainer);
