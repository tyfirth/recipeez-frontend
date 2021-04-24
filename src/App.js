import React from 'react';
import RecipeForm from './components/RecipeForm'

let apiKey = '29a56902b8904e6f86670721f2f04872';

let baseURL ='https://api.spoonacular.com/recipes/complexSearch'

let testURL = 'http://localhost:3001/api/v1/recipes/1'

let spoonTestURL = 'https://api.spoonacular.com/recipes/complexSearch?query=chicken&number=10&apiKey=' + apiKey

class App extends React.Component {



  componentDidMount() {
    fetch('http://localhost:3001/api/v1/ingredients', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
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

export default App;
