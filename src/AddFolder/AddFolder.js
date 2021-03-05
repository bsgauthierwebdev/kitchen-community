import React, {Component} from 'react';
import RecipeError from '../RecipeError';
import ValidationError from '../ValidationError';
import ApiContext from '../ApiContext';
import './AddFolder.css';

class AddFolder extends Component {
    static contextType = ApiContext;
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: "",
                touched: false
            },
        };
    }

    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.context.addFolder(this.state.name.value);
        this.props.history.push('/');
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return `Name is required.`;
        }
        else if (name.length < 3) {
            return `Name must be at least 3 characters.`;
        }
    }

    render() {
        const nameError = this.validateName();
        return (
            <div>
                <form className = 'newFolder'
                    onSubmit = {(e) => this.handleSubmit(e)}>
                        <RecipeError>
                            <h1>Add a New Folder</h1>
                            <label htmlFor = 'newFolder__name'>Folder Name:</label>
                            <br />
                            <input
                                type = 'text'
                                className = 'newFolder__input'
                                name = 'name'
                                id = 'name'
                                onChange = {e => this.updateName(e.target.value)}
                                required />
                            {this.state.name.touched && (
                                <ValidationError message = {nameError} />
                            )}
                            <button
                                type = 'submit'
                                className = 'newFolder__submit'
                            >
                                Save
                            </button>
                        </RecipeError>
                </form>
            </div>
        )
    }
}

AddFolder.defaultProps = {
    folders: [],
    content: "",
    name: "",
    error: null
}

export default AddFolder;