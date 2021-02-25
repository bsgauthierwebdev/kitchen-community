import React from 'react';
import Recipe from '../Recipe/Recipe';
import ApiContext from '../ApiContext';
import {findRecipe} from '../recipes-helpers';

export default class RecipePageMain extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = ApiContext

    handleDeleteRecipe = recipeId => {
        this.props.history.push('/')
    }

    render() {
        const {recipes = []} = this.context
        const {recipeId} = this.props.match.params
        const recipe = recipes.find(recipe => recipe.id == recipeId)

        return (
            <section className = 'RecipePageMain'>
                <Recipe
                    id = {recipe.id}
                    name = {recipe.name}
                    modified = {recipe.modified}
                    onDeleteRecipe = {this.handleDeleteRecipe}
                    history = {this.props.history}
                />
                <div className = 'RecipePageMain__description'>
                    <h4>Description:</h4> 
                    {recipe.description.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                        )}
                </div>
                <div className = 'RecipePageMain__prepTime'>
                    <h4>Prep Time: </h4> 
                    {recipe.prepTime.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                        )}
                </div>
                <div className = 'RecipePageMain__cookTime'>
                    <h4>Cook Time:</h4>
                    {recipe.cookTime.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                        )}
                </div>
                <div className = 'RecipePageMain__servings'>
                    <h4>Servings:</h4> 
                    {recipe.servings.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                        )}
                </div>
                <div className = 'RecipePageMain__ingredients'>
                    <h4>Ingredients:</h4> 
                    {recipe.ingredients.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                        )}
                </div>
                <div className = 'RecipePageMain__directions'>
                    <h4>Directions:</h4> 
                    {recipe.directions.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                        )}
                </div>
            </section>
        )
    }
}