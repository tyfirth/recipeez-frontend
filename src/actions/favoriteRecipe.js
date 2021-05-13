export function favoriteRecipe(recipe) {
  let faveStatus = recipe.isFavorite
  debugger;

  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/recipes/${recipe.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(recipe)
    })
    .then(resp => resp.json())
    .then(data => dispatch({
      type: 'FAVORITE_RECIPE',
      payload: recipe.isFavorite
    }))
  }
}
