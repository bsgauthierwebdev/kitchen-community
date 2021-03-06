import React, {Component} from 'react';
import ApiContext from './ApiContext';

class FolderNav extends Component {
    static contextType = ApiContext;
    static defaultProps = {
        history: {
            push: () => {}
        },
    }
    constructor(props) {
        super(props);
        this.state = {
            folderId: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.history.push(`/folders/${e.target.value}`)
    }

    render() {
        const {folders = []} = this.context;
        return (
            <select className = 'folderSelect' onChange = {this.handleChange}>
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