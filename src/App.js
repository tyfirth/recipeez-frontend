import React from 'react';
import RecipeContainer from './containers/RecipeContainer'
import { connect } from 'react-redux'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <RecipeContainer />
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
