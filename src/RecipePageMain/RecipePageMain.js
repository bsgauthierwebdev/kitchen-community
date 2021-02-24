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
                    {recipe.description.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                        )}
                </div>
                <div className = 'RecipePageMain__prepTime'>
                    {recipe.prepTime.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                        )}
                </div>
                <div className = 'RecipePageMain__cookTime'>
                    {recipe.cookTime.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                        )}
                </div>
                <div className = 'RecipePageMain__servings'>
                    {recipe.servings.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                        )}
                </div>
                <div className = 'RecipePageMain__ingredients'>
                    {recipe.ingredients.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                        )}
                </div>
                <div className = 'RecipePageMain__directions'>
                    {recipe.directions.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                        )}
                </div>
            </section>
        )
    }
}