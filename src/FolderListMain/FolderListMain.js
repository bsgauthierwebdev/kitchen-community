// import React from 'react';
// import {NavLink, Link} from 'react-router-dom';
// import ApiContext from '../ApiContext';
// import {countRecipesForFolder} from '../recipes-helpers';
// import './FolderListMain.css';

// export default class FolderListMain extends React.Component {
//     static contextType = ApiContext;

//     render() {
//         const {folders = [], recipes = []} = this.context
//         return (
//             <div className = 'FolderListMain'>
//                 <label htmlFor = 'FolderListMain__title'>Folders: </label>
//                 <ul className = 'FolderListMain__list'>
//                     {folders.map(folder =>
//                         <li key = {folder.id}>
//                             <NavLink
//                                 className = 'FolderListMain__folder-link'
//                                 to = {`/folders/${folder.id}`}
//                             >
//                                 {folder.name}
//                                 {' '}
//                                 <span className = 'FolderListMain__num-recipes'>
//                                     {countRecipesForFolder(recipes, folder.id)}
//                                 </span>
//                             </NavLink>
//                         </li>
//                     )}
//                 </ul>
//                 <div className = 'FolderListMain__button-wrapper'>
//                     <Link to = '/add-folder'>
//                     <button
//                         type = 'button'
//                         className = 'FolderListMain__add-folder-button'
//                     >
//                         Add Folder
//                     </button>
//                     </Link>
//                 </div>
//             </div>
//         )
//     }
// }

import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import ApiContext from '../ApiContext';
import {countRecipesForFolder} from '../recipes-helpers';
import './FolderListMain.css';
import FolderNav from '../FolderNav';

export default class FolderListMain extends React.Component {
    static contextType = ApiContext;

    handleSelectFolder(e) {
        e.preventDefault();
        const folderId =  this.state.folderId.value
        this.props.history.push(`/recipes/${folderId}`)
    }

    updateFolderId = (folder) => {
        this.setState({folderId: {value: folder, touched: true}});
    }

    render() {
        const {folders = [], recipes = []} = this.context
        return (
            <div className = 'FolderListMain'>
                <label htmlFor = 'FolderListMain__choose'>Select a Folder</label>
                <form className = 'FolderListMain__select' onSubmit = {e => this.handleSelectFolder(e)}>
                    <div className = 'FolderListMain__select-options'>
                        <FolderNav
                            updateFolderId = {this.updateFolderId} />
                    </div>
                    <button type = 'submit' className = 'FolderListMain__select-go'>
                        Let's go!
                    </button>
                </form>
            </div>
        )
    }
}