import React from 'react';
import RecipeContainer from './containers/RecipeContainer'

  let apiKey = process.env.REACT_APP_apiKey
  let randomRecipes = `https://api.spoonacular.com/recipes/random?number=5&apiKey=${apiKey}`

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <RecipeContainer />
      </div>
    );
  }
}


export default App;
