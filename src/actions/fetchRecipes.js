//action creator

let apiKey = process.env.REACT_APP_apiKey
let baseURL ='https://api.spoonacular.com/recipes/complexSearch?query=sisig&number=10&apiKey='
let testURL = 'http://localhost:3001/api/v1/recipes'
let spoonTestURL = `https://api.spoonacular.com/recipes/complexSearch?query=tacos&instructionsRequired=true&addRecipeInformation=true&fillIngredients=true&number=3&apiKey=${apiKey}`


export function fetchRecipes() {
  return (dispatch) => {
    fetch(testURL, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(recipes => dispatch({
      type: 'FETCH_RECIPES',
      payload: recipes
    }))
  }
}
