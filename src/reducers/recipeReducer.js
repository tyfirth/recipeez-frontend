export default function recipeReducer(state = {recipes: []}, action) {
  // debugger;

  let recipe;
  switch (action.type) {

    case 'FETCH_RECIPES':
      return {recipes: action.payload}

    case 'RANDOM_RECIPES':
      return {recipes: action.payload}

    case 'RECIPE_SEARCH':

      return {recipes: action.payload}

    case 'ADD_RECIPE':
      return {...state, recipes: [...state.recipes, action.payload]}

    case 'FAVORITE_RECIPE':
    let faveStatus = !recipe.isFavorite
      return {...recipe, recipe: faveStatus}

    case 'DELETE_RECIPE':
    const recipes = state.recipes.filter(recipe => recipe.id !== action.payload)
      return {...state, recipes}

    default:
      return state
  }


}
