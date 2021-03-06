import React, {Component} from 'react';
import ApiContext from './ApiContext';

class FolderNav extends React.Component {
    static contextType = ApiContext;

    render() {
        const {folders = []} = this.context;
        return (
            <select className = 'folderSelect'>
                <option value = "">Select a Folder</option>
                {folders.map(folder =>
                    <option
                        key = {folder.id}
                        value = {folder.id}
                        className = 'folderSelect'>
                            {folder.name}
                        </option>)}
            </select>
        )
    }
}

export default FolderNav;