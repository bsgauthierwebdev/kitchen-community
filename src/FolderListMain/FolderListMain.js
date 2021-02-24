import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import ApiContext from '../ApiContext';
import {countRecipesForFolder} from '../recipes-helpers';

export default class FolderListMain extends React.Component {
    static contextType = ApiContext;

    render() {
        const {folders = [], recipes = []} = this.context
        return (
            <div className = 'FolderListMain'>
                <ul className = 'FolderListMain__list'>
                    {folders.map(folder =>
                        <li key = {folder.id}>
                            <NavLink
                                className = 'FolderListMain__folder-link'
                                to = {`/folders/${folder.id}`}
                            >
                                <span className = 'FolderListMain__num-recipes'>
                                    {countRecipesForFolder(recipes, folder.id)}
                                </span>
                                {folder.name}
                            </NavLink>
                        </li>
                    )}
                </ul>
                <div className = 'FolderListMain__button-wrapper'>
                    <Link to = '/add-folder'>
                    <button
                        type = 'button'
                        className = 'FolderListMain__add-folder-button'
                    >
                        Add Folder
                    </button>
                    </Link>
                </div>
            </div>
        )
    }
}