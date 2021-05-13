import React, {Component} from 'react';
import About from '../components/About'
import Favorites from '../components/Favorites'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

class MenuContainer extends Component {

  render() {
    return(
      <div className='menu-container' class='bg-blue-400 p-4 flex justify-around text-lg font-bold'>

        <Link to='/about'>About</Link>
        <Route exact path='/about' component={About} />

        <Link to='/favorites'>Favorites</Link>
        <Route exact path='/favorites'
          render={() => <Favorites recipes={this.props.recipes}/> } />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(MenuContainer);
