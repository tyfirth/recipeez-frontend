
let apiKey = process.env.REACT_APP_apiKey;

export function getRandomRecipes() {

  return (dispatch) => {
    fetch(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${apiKey}`)
      .then(resp => resp.json())
      .then(data => dispatch({
        type: 'RANDOM_RECIPES',
        payload: data.recipes
      }))
  }
}
