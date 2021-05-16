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
      // const faveRecipes = state.recipes.map(recipe => {
      //   return recipe.id === action.payload.id ? (recipe.isFavorite = action.payload.isFavorite) : recipe})

      const faveRecipes = state.recipes.map(recipe =>
        {if (recipe.id === action.payload.id) {
          console.log(recipe.isFavorite)
          console.log(action.payload.isFavorite)
          console.log(recipe)
          recipe.isFavorite = action.payload.isFavorite
          return recipe
        } else {
          return recipe
        }})


      return {recipes: faveRecipes}

    case 'DELETE_RECIPE':
    const recipes = state.recipes.filter(recipe => recipe.id !== action.payload)
      return {...state, recipes}

    default:
      return state
  }


}
