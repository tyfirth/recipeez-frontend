const apiKey = process.env.REACT_APP_apiKey;

export function handleSearch(query) {

  return (dispatch) => {

    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&instructionsRequired=true&addRecipeInformation=true&fillIngredients=true&number=3&apiKey=${apiKey}`)
      .then(resp => resp.json())
      .then(data => dispatch({
        type: 'RECIPE_SEARCH',
        payload: data.recipes
      }))
      .then(resp => resp.json())
      .then(data => console.log(data.recipes))
    }
  }
