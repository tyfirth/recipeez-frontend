export const addRecipe = recipe => {
  return {
    type: "ADD_RECIPE",
    recipe: Object.assign({}, recipe, action.recipe)
  }
}
