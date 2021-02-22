import React from 'react';
import ApiContext from '../ApiContext';
import {findRecipe, findFolder} from '../recipes-helpers';

export default class RecipePageNav extends React.Component {
    statuc defaultProps = {
        history: {
            goBack: () => {}
        },
        match: {
            params: {}
        }
    }
    static contextType = ApiContext;

    render() {
        const {recipes, folders} = this.context
        const {recipeId} = this.props.match.params
        const recipe = findRecipe(recipes, recipeId) || {}
        console.log(recipe)
        const folder = findFolder(folders, recipe.folderId)
        console.log(folder)
        
        return (
            <div className = 'RecipePageNav'>
                <button
                    tag = 'button'
                    role = 'link'
                    onClick = {() => this.props.history.goBack()}
                    className = 'RecipePageNav__back-button'
                >
                    <br />
                    Back
                </button>
                {folder && (
                    <h3 className = 'RecipePageNav__folder-name'>
                        {folder.ame}
                    </h3>
                )}
            </div>
        )
    }
}