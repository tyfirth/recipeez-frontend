export const addRecipe = (data) => {
  return (dispatch) => {

    fetch('http://localhost:3001/api/v1/recipes', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(recipe => dispatch({
      type: 'ADD_RECIPE',
      payload: recipe
    }))

  }

}
