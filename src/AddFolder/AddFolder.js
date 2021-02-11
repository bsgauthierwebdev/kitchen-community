import React, {Component} from 'react';

class AddFolder extends Component {
    render() {
        return (
            <div>
                <form className = 'newFolder'>
                <h2>Add a New Folder</h2>
                <label htmlFor = 'newFolder__name'>Folder Name:</label>
                <input
                    type = 'text'
                    className = 'newFolder__input'
                    name = 'name'
                    id = 'name'
                    required />
                <button
                    type = 'submit'
                    className = 'newFolder__submit'
                >
                    Save
                </button>
                </form>
            </div>
        )
    }
}

export default AddFolder;