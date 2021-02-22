export const findFolder = (folders = [], folderId) =>
    folders.find(folder => folder.id == folderId)

export const fildRecipe = (recipes = [], recipeId) =>
    recipes.find(recipe => recipe.id === recipeId)

export const getRecipeForFolder = (recipes = [], folderId) => (
    (!folderId)
        ? recipes
        : recipes.filter(recipe => recipe.folderId == folderId)
)

export const countRecipesForFolder = (recipes = [], folderId =>
    recipes.filter(recipe => recipe.folderId == folderId).length)