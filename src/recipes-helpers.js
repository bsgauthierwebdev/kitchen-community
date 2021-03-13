export const findFolder = (folders = [], folderId) =>
    folders.find(folder => folder.id == folderId)

export const findRecipe = (recipes = [], recipeId) =>
    recipes.find(recipe => recipe.id === recipeId)

export const getRecipesForFolder = (recipes = [], folderId) => (
    (!folderId)
        ? recipes
        : recipes.filter(recipe => recipe.folderId == folderId)
)

export const countRecipesForFolder = (recipes=[], folderId) =>
    recipes.filter(recipe => recipe.folderId == folderId).length

export const getCommentsForRecipe = (comments = [], recipeId) =>
    (!recipeId)
        ? comments
        : comments.filter(comment => comment.recipeId == recipeId)