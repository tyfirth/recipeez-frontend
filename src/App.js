import React from 'react';
import RecipeForm from './components/RecipeForm'

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/recipes')
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
