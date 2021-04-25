import React from 'react';
import RecipeForm from './components/RecipeForm'
import { connect } from 'react-redux'
import fetchRecipes from './actions/fetchRecipes'

class App extends React.Component {



  componentDidMount() {
    this.props.fetchRecipes()
  }



  render() {
    return (
      <div className="App">
        App
        <RecipeForm />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     recipes: state.recipes
//   }
// }

export default connect(null, {fetchRecipes})(App);
