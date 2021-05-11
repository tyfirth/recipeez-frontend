
let apiKey = process.env.REACT_APP_apiKey;


let random = `https://api.spoonacular.com/recipes/random?number=3&apiKey=${apiKey}`

export function getRandomRecipes() {

  return (dispatch) => {

    fetch(random)
      .then(resp => resp.json())
      .then(data => dispatch({
        type: 'RANDOM_RECIPES',
        payload: data.recipes
      }))
  }
}
