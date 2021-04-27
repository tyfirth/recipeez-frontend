import React from 'react';
import RecipeContainer from './containers/RecipeContainer'

  let apiKey = process.env.REACT_APP_apiKey
  let randomRecipes = `https://api.spoonacular.com/recipes/random?number=5&apiKey=${apiKey}`

class App extends React.Component {

  // componentDidMount(){
  //   fetch(randomRecipes, {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }

  render() {
    return (
      <div className="App">
        <RecipeContainer />
      </div>
    );
  }
}


export default App;
