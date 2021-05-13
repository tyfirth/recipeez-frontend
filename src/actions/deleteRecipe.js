export const deleteRecipe = (recipeID) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/recipes/${recipeID}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => dispatch({
      type: 'DELETE_RECIPE',
      payload: recipeID
    }))
  }
}
