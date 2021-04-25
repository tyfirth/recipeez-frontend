//action creator

let apiKey = '29a56902b8904e6f86670721f2f04872';
let baseURL ='https://api.spoonacular.com/recipes/complexSearch?query=sisig&number=10&apiKey='
let testURL = 'http://localhost:3001/api/v1/recipes/1'
let spoonTestURL = `https://api.spoonacular.com/recipes/complexSearch?query=tacos&instructionsRequired=true&addRecipeInformation=true&fillIngredients=true&number=3&apiKey=${apiKey}`

export default function fetchRecipes(action) {

  // fetch(testURL, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   }
  // })
  // .then(resp => resp.json())
  // .then(data => console.log(data))

  //dispatch goes here

  return action
}
