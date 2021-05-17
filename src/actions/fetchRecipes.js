//action creator

let apiKey = process.env.REACT_APP_apiKey
let testURL = 'http://localhost:3001/api/v1/recipes'


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
