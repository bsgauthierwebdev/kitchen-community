import React from 'react';
import {Link} from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import ApiContext from '../ApiContext'
import {getRecipesForFolder} from '../recipes-helpers'

export default class RecipeListMain extends React.Component {

    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = ApiContext

    render() {
        const {folderId} = this.props.match.params
        const {recipes = []} = this.context
        const recipesForFolder = getRecipesForFolder(recipes, folderId)

        return (
            <section className = 'RecipeListMain'>
                <ul>
                    {recipesForFolder.map(recipe =>
                        <li key = {NodeIterator.id}>
                            <Recipe
                                id = {recipe.id}
                                name = {recipe.name}
                                modified = {recipe.modified}
                            />
                        </li>
                    )}
                </ul>
                <div className = 'RecipeListMain__button-container'>
                <button
                    tag = {Link}
                    to = '/add-note'
                    type = 'button'
                    className = 'RecipeListMain__add-recipe-button'
                >
                    Add Recipe
                </button>
                </div>
            </section>
        )
    }
}