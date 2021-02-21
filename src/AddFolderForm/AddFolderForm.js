import React, {Component} from 'react';
import RecipeError from '../RecipeError';
import config from '../config';
import ValidationError from '../ValidationError';
import PropTypes from 'prop-types';
import ApiContext from '../ApiContext';

class AddFolderForm extends Component {
    static contextType = ApiContext;
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: "",
                touched: false
            }
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
            <>
            <form className = 'newFolder'
                onSubmit = {(e) => this.handleSubmit(e)}>
                    <RecipeError>
                        <h2> Make a new folder</h2>
                        <label htmlFor = 'newFolder__name'>Folder Name: </label>
                        <input
                            type = 'text'
                            className = 'newFolder__input'
                            name = 'name'
                            id = 'name'
                            onChange = {e => this.updateName(e.target.value)} />
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
            </>
        )
    }
}

AddFolderForm.defaultProps = {
    folders: [],
    content: "",
    name: "",
    error: null
}

AddFolderForm.propTypes = {
    folders: PropTypes.array,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    content: PropTypes.string,
    modified: PropTypes.string,
}

export default AddFolderForm;